import { PageArea } from "./styled";
import { PageContainer, PageTitle } from "../../components";

function Signin() {
  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        <form action="email" autoComplete="off">
          <label className="area">
            <div className="area-title">E-mail </div>
            <div className="area-input">
              <input type="email" required placeholder="exemplo@exemplo.com" />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Senha </div>
            <div className="area-input">
              <input type="password" required placeholder="Insira sua senha" />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Lembrar senha</div>
            <div className="area-input">
              <input className="float-left" type="checkbox" />
            </div>
          </label>
          <label className="area">
            <div className="area-title"></div>
            <div className="area-input">
              <button>Fazer login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}

export default Signin;
