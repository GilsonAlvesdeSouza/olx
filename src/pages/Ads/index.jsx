import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PageContainer, AdItem } from "../../components";
import { OlxAPI, useQueryString } from "../../helpers";
import { PageArea } from "./styled";

let timer;

function Ads() {
  const history = useHistory();

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);
  const [resultOpacity, setResultOpacity] = useState(1);
  const [warningMessage, setWarningMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const query = useQueryString();
  const initialQuery = (value) => {
    return query.get(value) != null ? query.get(value) : "";
  };
  const [q, setQ] = useState(initialQuery("q"));
  const [cat, setCat] = useState(initialQuery("cat"));
  const [state, setState] = useState(initialQuery("state"));

  useEffect(() => {
    let queryString = [];

    if (q) {
      queryString.push(`q=${q}`);
    }

    if (cat) {
      queryString.push(`cat=${cat}`);
    }

    if (state) {
      queryString.push(`state=${state}`);
    }

    history.replace({
      search: `?${queryString.join("&")}`,
    });

    const getAddList = async () => {
      setWarningMessage("Carregando...");
      setLoading(true);

      let api = OlxAPI();
      const json = await api.getAds({
        sort: "desc",
        limit: 9,
        q,
        cat,
        state,
      });
      setAdList(json.ads);
      if (adList.length === 0) {
        setWarningMessage("Nenhum resultado encontrado!");
      }
      setResultOpacity(1);
      setLoading(false);
    };

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(getAddList, 2000);
    setResultOpacity(0.3);
  }, [q, cat, state, history, adList.length]);

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
        className={cat === item.slug ? "categoryItem active" : "categoryItem"}
        onClick={() => setCat(item.slug)}
      >
        <img src={item.img} alt="" />
        <span>{item.name}</span>
      </li>
    ));
  };

  const handleSearchFiltered = () => {
    return adList.map((item, key) => (
      <AdItem key={`adList-${key}`} data={item} />
    ));
  };

  return (
    <PageContainer>
      <PageArea>
        <div className="leftSide">
          <form method="GET">
            <input
              type="text"
              name="q"
              placeholder="O que você procura?"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <div className="filterName">Estado: </div>
            <select
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="">Escolha um estado</option>
              {handleStateOption()}
            </select>
            <div className="filterName">Categoria: </div>
            <ul>{handleCategories()}</ul>
          </form>
        </div>
        <div className="rightSide">
          <h2>Resultados</h2>
          {loading && <div className="listWarning">{warningMessage}</div>}
          {!loading && adList.length === 0 && (
            <div className="listWarning">{warningMessage}</div>
          )}
          <div className="list" style={{ opacity: resultOpacity }}>
            {handleSearchFiltered()}
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
}

export default Ads;
