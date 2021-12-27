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
  const [adsTotal, setAdsTotal] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);

  const query = useQueryString();
  const initialQuery = (value) => {
    return query.get(value) != null ? query.get(value) : "";
  };
  const [q, setQ] = useState(initialQuery("q"));
  const [cat, setCat] = useState(initialQuery("cat"));
  const [state, setState] = useState(initialQuery("state"));

  useEffect(() => {
    if (adList.length > 0) {
      setPageCount(Math.ceil(adsTotal / adList.length));
    } else {
      setPageCount(0);
    }
  }, [adsTotal]);

  const getAdsList = async () => {
    setWarningMessage("Carregando...");
    setLoading(true);

    let limit = 9;

    let offset = (pageCurrent - 1) * limit;

    let api = OlxAPI();
    const json = await api.getAds({
      sort: "desc",
      limit,
      q,
      cat,
      state,
      offset,
    });
    setAdList(json.ads);
    setAdsTotal(json.total);
    if (adList.length === 0) {
      setWarningMessage("Nenhum resultado encontrado!");
    }
    setResultOpacity(1);
    setLoading(false);
  };

  useEffect(() => {
    setResultOpacity(0.3);
    getAdsList();
  }, [pageCurrent]);

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

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(getAdsList, 2000);
    setResultOpacity(0.3);
    setPageCurrent(1);
  }, [q, cat, state]);

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

  const handleCountPage = (value) => {
    switch (value) {
      case "0":
        setPageCurrent(1);
        break;
      case "-10":
        if (pageCurrent > 1) setPageCurrent(pageCurrent - 10);
        break;
      case "-5":
        if (pageCurrent > 1) setPageCurrent(pageCurrent - 5);
        break;
      case "-1":
        if (pageCurrent > 1) setPageCurrent(pageCurrent - 1);
        break;
      case "+1":
        pageCurrent + 1 < pageCount
          ? setPageCurrent(pageCurrent + 1)
          : setPageCurrent(pageCount);
        break;
      case "+5":
        pageCurrent + 5 < pageCount
          ? setPageCurrent(pageCurrent + 5)
          : setPageCurrent(pageCount);
        break;
      case "+10":
        pageCurrent + 10 < pageCount
          ? setPageCurrent(pageCurrent + 10)
          : setPageCurrent(pageCount);
        break;
      case "final":
        setPageCurrent(pageCount);
        break;
      default:
    }
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
          {loading && adList.length === 0 && (
            <div className="listWarning">{warningMessage}</div>
          )}
          {!loading && adList.length === 0 && (
            <div className="listWarning">{warningMessage}</div>
          )}
          <div className="list" style={{ opacity: resultOpacity }}>
            {handleSearchFiltered()}
          </div>
          <div className="pagination">
            <button className="pageItem" onClick={() => handleCountPage("0")}>
              Início
            </button>
            <button className="pageItem" onClick={() => handleCountPage("-10")}>
              - 10
            </button>
            <button className="pageItem" onClick={() => handleCountPage("-5")}>
              - 5
            </button>
            <button className="pageItem" onClick={() => handleCountPage("-1")}>
              ⏪
            </button>
            <input
              className="pageItem"
              type="text"
              value={pageCurrent}
              disabled
            />
            <button className="pageItem" onClick={() => handleCountPage("+1")}>
              ⏩
            </button>
            <button className="pageItem" onClick={() => handleCountPage("+5")}>
              + 5
            </button>
            <button className="pageItem" onClick={() => handleCountPage("+10")}>
              + 10
            </button>
            <button
              className="pageItem"
              onClick={() => handleCountPage("final")}
            >
              Fim
            </button>
          </div>
          <div className="totalPage">
            {pageCount <= 1 ? (
              <span>{pageCount} página</span>
            ) : (
              <span>{pageCount} páginas</span>
            )}
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
}

export default Ads;
