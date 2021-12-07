import { PageContainer } from "../../components";
import { PageArea, SearchArea } from "./styled";
function Home() {
  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">
                <option value="">Escolha uma opção</option>
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList"></div>
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
