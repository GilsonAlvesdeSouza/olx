import { PageArea } from "./styled";
import { PageContainer, PageTitle, ErrorMessage } from "../../components";
import { useState } from "react";
import { OlxAPI, doLogin } from "../../helpers";

function Signin() {
  const api = OlxAPI();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);

    const json = await api.login(email, password);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, rememberPassword);
      window.location.href = "/";
    }
    setDisable(false);
  };

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form action="email" autoComplete="off" onSubmit={handleSubmit}>
          <label className="area">
            <div className="area-title">E-mail </div>
            <div className="area-input">
              <input
                type="email"
                required
                placeholder="exemplo@exemplo.com"
                disabled={disable}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Senha </div>
            <div className="area-input">
              <input
                type="password"
                required
                placeholder="Insira sua senha"
                disabled={disable}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Lembrar senha</div>
            <div className="area-input">
              <input
                className="float-left"
                type="checkbox"
                disabled={disable}
                value={rememberPassword}
                onChange={(e) => setRememberPassword(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title"></div>
            <div className="area-input">
              <button disabled={disable}>Fazer login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}

export default Signin;
