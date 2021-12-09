import { PageArea } from "./styled";
import { PageContainer, PageTitle, ErrorMessage } from "../../components";
import { useRef, useState } from "react";
import { OlxAPI } from "../../helpers";

function AddAd() {
  const api = OlxAPI();

  const fileField = useRef();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [priceNegotiable, setPriceNegotiable] = useState(false);
  const [desc, setDesc] = useState("");
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    setError("");   
    setDisable(false);
  };

  return (
    <PageContainer>
      <PageTitle>Postar um anúncio</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form action="email" autoComplete="off" onSubmit={handleSubmit}>
          <label className="area">
            <div className="area-title">Titulo </div>
            <div className="area-input">
              <input
                type="email"
                required
                placeholder="exemplo@exemplo.com"
                disabled={disable}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Categoria </div>
            <div className="area-input">
              <select name="" id="">
                <option value="">Escolha uma categoria</option>
              </select>
            </div>
          </label>
          <label className="area">
            <div className="area-title">Preço</div>
            <div className="area-input">...</div>
          </label>
          <label className="area">
            <div className="area-title">Negociável</div>
            <div className="area-input input-checkbox">
              <input
                className="float-left"
                type="checkbox"
                disabled={disable}
                checked={priceNegotiable}
                onChange={() => setPriceNegotiable(!priceNegotiable)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Descrição</div>
            <div className="area-input">
              <textarea
                disabled={disable}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
          </label>

          <label className="area">
            <div className="area-title">Imagens (1 ou mais) </div>
            <div className="area-input">
              <input
                type="file"
                required
                multiple
                ref={fileField}
                disabled={disable}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title"></div>
            <div className="area-input">
              <button disabled={disable}>Adicionar Anúncio</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}

export default AddAd;
