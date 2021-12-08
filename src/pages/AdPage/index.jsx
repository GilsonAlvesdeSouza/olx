import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OlxAPI, formater } from "../../helpers";
import { PageArea } from "./styled";
import { PageContainer } from "../../components";
import { Fake } from "./styled";

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

  return (
    <PageContainer>
      <PageArea>
        <div className="left-side">
          <div className="box">
            <div className="ad-image">{loading && <Fake height="300" />}</div>
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
          <div className="box box--padding">{loading && <Fake />}</div>
          <div className="box box--padding">
            {loading && <Fake height="50" />}
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
}

export default AdPage;
