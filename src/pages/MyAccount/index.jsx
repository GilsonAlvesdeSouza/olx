import { useState, useEffect } from "react";
import {
  PageContainer,
  PageTitle,
  UIModal,
  ErrorMessage,
} from "../../components";
import { OlxAPI } from "../../helpers";
import { PageArea } from "./styled";

function MyAcconunt() {
  const [user, setUser] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stateList, setStateList] = useState([]);
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [colorMsg, setColorMsg] = useState("");

  useEffect(() => {
    let api = OlxAPI();
    const getUser = async () => {
      const getUser = await api.getUser();
      setUser(getUser);
    };
    getUser();
  }, [user]);

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
      <option value={item.name} key={`stateList-${key}`}>
        {item.name}
      </option>
    ));
  };

  const handleEditUser = () => {
    setModalOpen(true);
    setName(user.name);
    setEmail(user.email);
  };

  const handleSubmit = async (e) => {
    let api = OlxAPI();
    e.preventDefault();
    setDisabled(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Senha e Confirmar Senha são diferentes");
      setDisabled(false);
      return;
    }

    const json = await api.updateUser(name, state, email, password);

    if (json.error) {
      setError(json.error);
    } else {
      setError("Dados Alterados com sucesso");
      setColorMsg("green");
      setTimeout(() => {
        setModalOpen(false);
        setError("");
        setPassword("");
        setConfirmPassword("");
        setColorMsg(null);
      }, 3000);
    }
    setDisabled(false);
  };

  return (
    <PageContainer>
      <PageTitle>Minha Conta</PageTitle>
      <PageArea>
        <div className="user-data">
          <h2>Meu cadastro</h2>
          <label className="area">
            <div className="area-titulo">Nome:</div>
            <div className="area-content">{user.name}</div>
          </label>
          <label className="area">
            <div className="area-titulo">Email:</div>
            <div className="area-content">{user.email}</div>
          </label>
          <label className="area">
            <div className="area-titulo">Estado:</div>
            <div className="area-content">{user.state}</div>
          </label>
          <label className="area">
            <div className="area-titulo"></div>
            <div className="area-content">
              <button onClick={() => handleEditUser()}>Alterar</button>
            </div>
          </label>
        </div>

        <div className="add-recents">
          <PageTitle>Anúncios</PageTitle>
        </div>

        <UIModal isOpen={modalOpen} onCloseModal={() => setModalOpen(false)}>
          <h2>Atualizar meus dados</h2>
          {error && <ErrorMessage color={colorMsg}>{error}</ErrorMessage>}
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label className="area">
              <div className="area-title">Nome Completo </div>
              <div className="area-input">
                <input
                  type="text"
                  required
                  placeholder="Fulano de Souza"
                  disabled={disabled}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </label>
            <label className="area">
              <div className="area-title">Estado </div>
              <div className="area-input">
                <select
                  value={user.state}
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
                  disabled={disabled}
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
                  disabled={disabled}
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
                  disabled={disabled}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </label>

            <label className="area">
              <div className="area-title"></div>
              <div className="area-input">
                <button disabled={disabled}>Atualizar</button>
              </div>
            </label>
          </form>
        </UIModal>
      </PageArea>
    </PageContainer>
  );
}

export default MyAcconunt;
