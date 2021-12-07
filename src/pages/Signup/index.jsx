import { PageArea } from "./styled";
import { PageContainer, PageTitle, ErrorMessage } from "../../components";
import { useState, useEffect } from "react";
import { OlxAPI, doLogin } from "../../helpers";

function Signin() {
  const api = OlxAPI();
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState("");
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    let api = OlxAPI();
    const getStates = async () => {
      const res = await api.getStates();
      setStateList(res);
    };
    getStates();
  }, []);

  const handleStateOption = () => {
    return stateList.map((item, key) => (
      <option value={item._id} key={`stateList-${key}`}>
        {item.name}
      </option>
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Senha e Confirmar Senha são diferentes");
      setDisable(false);
      return;
    }

    const json = await api.register(name, state, email, password);

    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token);
      window.location.href = "/";
    }
    setDisable(false);
  };

  return (
    <PageContainer>
      <PageTitle>Cadastro</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label className="area">
            <div className="area-title">Nome Completo </div>
            <div className="area-input">
              <input
                type="text"
                required
                placeholder="Fulano de Souza"
                disabled={disable}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Estado </div>
            <div className="area-input">
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              >
                <option value="">Escolha uma opção</option>
                {handleStateOption()}
              </select>
            </div>
          </label>
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
            <div className="area-title">Confirmar Senha </div>
            <div className="area-input">
              <input
                type="password"
                required
                placeholder="Repita sua senha"
                disabled={disable}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </label>

          <label className="area">
            <div className="area-title"></div>
            <div className="area-input">
              <button disabled={disable}>Cadastrar</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}

export default Signin;
