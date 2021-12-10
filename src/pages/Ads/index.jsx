import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PageContainer, AdItem } from "../../components";
import { OlxAPI } from "../../helpers";
import { PageArea } from "./styled";

function Ads() {
  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

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

    const getRecentAds = async () => {
      const json = await api.getAds({
        sort: "desc",
        limit: 8,
      });
      setAdList(json.ads);
    };

    getStates();
    getCategories();
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
      <li
        key={`categories-${key}`}
        className="categoryItem"
      >
        <img src={item.img} alt="" />
        <span>{item.name}</span>
      </li>
    ));
  };

  const handleRecentsAds = () => {
    return adList.map((item, key) => (
      <AdItem key={`adList-${key}`} data={item} />
    ));
  };

  return (
   <PageContainer>
       <PageArea>
           <div className="leftSide">
              <form method="GET">
                <input type="text" name="q"/>
                <div className="filterName">Estado: </div>
                <select name="state">
                  <option value="">Escolha um estado</option>
                  {handleStateOption()}
                </select>
                <div className="filterName">Categoria: </div>
                <ul>
                  {handleCategories()}
                </ul>
              </form>
           </div>
           <div className="right Side">
                ...
           </div>
       </PageArea>
   </PageContainer>
  );
}

export default Ads;
