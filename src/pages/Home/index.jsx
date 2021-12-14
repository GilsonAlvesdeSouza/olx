import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageContainer, AdItem } from "../../components";
import { OlxAPI } from "../../helpers";
import { PageArea, SearchArea } from "./styled";

function Home() {
  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

  useEffect(() => {
    let api = OlxAPI();
    
    const getStates = async () => {
      const states = await api.getStates();
      setStateList(states);
    };
    getStates();
  }, []);
  
  useEffect(() => {
    let api = OlxAPI();
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    };
    getCategories();
  }, []);
  
  useEffect(() => {
    let api = OlxAPI();
    const getRecentAds = async () => {
      const json = await api.getAds({
        sort: "desc",
        limit: 8,
      });
      setAdList(json.ads);
    };
    getRecentAds();
  }, []);

  const handleStateOption = () => {
    return stateList.map((item, key) => (
      <option key={`stateList-${key}`} value={item.name}>
        {item.name}
      </option>
    ));
  };

  const handleCategories = () => {
    return categories.map((item, key) => (
      <Link
        key={`categories-${key}`}
        to={`/ads?cat=${item.slug}`}
        className="categoryItem"
      >
        <img src={item.img} alt="" />
        <span>{item.name}</span>
      </Link>
    ));
  };

  const handleRecentsAds = () => {
    return adList.map((item, key) => (
      <AdItem key={`adList-${key}`} data={item} />
    ));
  };

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">
                <option value="">Escolha uma opção</option>
                {handleStateOption()}
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList">{handleCategories()}</div>
        </PageContainer>
      </SearchArea>

      <PageContainer>
        <PageArea>
          <h2>Anúncios Recentes</h2>
          <div className="list">{handleRecentsAds()}</div>
          <Link to="/ads" className="seeAllLink">
            Ver Todos
          </Link>
          <hr />
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </PageArea>
      </PageContainer>
    </>
  );
}

export default Home;
