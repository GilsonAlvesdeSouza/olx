import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { OlxAPI, formater } from "../../helpers";
import { PageArea, OthersArea, Fake, BreadChumb } from "./styled";
import { AdItem, PageContainer } from "../../components";

function AdPage() {
  const format = formater();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    let api = OlxAPI();
    const getInfo = async (id) => {
      const json = await api.getAd(id, true);
      setInfo(json);
      setLoading(false);
    };
    getInfo(id);
  }, [id]);

  const handleSlideImages = () => {
    return info.images.map((item, key) => (
      <div key={`img-${key}`} className="each-slide">
        <img src={item} alt="" />
      </div>
    ));
  };

  const handleListOthers = () => {
    return info.others.map((item, key) => (
      <AdItem key={`others-${key}`} data={item} />
    ));
  };

  return (
    <PageContainer>
      {info.category && (
        <BreadChumb>
          <span>Você está aqui: </span>
          <Link to="/"> Home</Link>/
          <Link to={`/ads?state=${info.stateName}`}>{info.stateName}</Link>/
          <Link to={`/ads?state=${info.stateName}&cat=${info.category.slug}`}>
            {info.category.name}
          </Link>
          / <span>{info.title}</span>
        </BreadChumb>
      )}
      <PageArea>
        <div className="left-side">
          <div className="box">
            <div className="ad-image">
              {loading && <Fake height="300" />}
              {info.images && <Slide>{handleSlideImages()}</Slide>}
            </div>
            <div className="ad-info">
              <div className="ad-name">
                {loading && <Fake />}
                {info.title && <h2>{info.title}</h2>}
                {info.dateCreated && (
                  <small>Criado em {format.formatDate(info.dateCreated)}</small>
                )}
              </div>
              <div className="ad-description">
                {loading && <Fake height="100" />}
                {info.description}
                <hr />
                {info.views && <small>Visualizações: {info.views}</small>}
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="box box--padding">
            {loading && <Fake />}
            {info.priceNegotiable && "Preço Negociável"}
            {!info.priceNegotiable && info.price && (
              <div className="price">
                Preço: <span>{format.formatCurrency(info.price)}</span>
              </div>
            )}
          </div>
          {loading && <Fake height="50" />}
          {info.userInfo && (
            <>
              <a
                href={`mailto:${info.userInfo.email}`}
                target="_blank"
                rel="noreferrer"
                className="contactSellerLink"
              >
                Fale com o Anunciante
              </a>
              <div className="created-by box box--padding">
                <strong>{info.userInfo.name}</strong>
                <small> {info.userInfo.email}</small>
                <small>Estado: {info.stateName}</small>
              </div>
            </>
          )}
        </div>
      </PageArea>
      <hr />
      <OthersArea>
        {info.others && (
          <>
            <h2>Outras ofertas do vendedor</h2>
            <div className="list">{handleListOthers()}</div>
          </>
        )}
      </OthersArea>
    </PageContainer>
  );
}

export default AdPage;
