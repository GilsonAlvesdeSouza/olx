import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageContainer } from "../../components";
import { OlxAPI } from "../../helpers";
import { PageArea, SearchArea } from "./styled";

function Home() {
  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let api = OlxAPI();

    const getStates = async () => {
      const states = await api.getStates();
      setStateList(states);
    };

    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    };

    getStates();
    getCategories();
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
      <Link key={`categories-${key}`} to={`/ads?cats=${item.slug}`} className="categoryItem">
        <img src={item.img} alt="" />
        <span>{item.name}</span>
      </Link>
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
          <h2>Página inicial</h2>
        </PageArea>
      </PageContainer>
    </>
  );
}

export default Home;
