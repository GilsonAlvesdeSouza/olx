import { useEffect, useRef, useState } from "react";
import MaskedInput from "react-text-mask";
import { createNumberMask } from "text-mask-addons";
import { PageArea } from "./styled";
import { PageContainer, PageTitle, ErrorMessage } from "../../components";
import { OlxAPI } from "../../helpers";

function AddAd() {
  const fileField = useRef();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState("");
  const [priceNegotiable, setPriceNegotiable] = useState(false);
  const [desc, setDesc] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let api = OlxAPI();
    const getCategories = async () => {
      const cats = await api.getCategories();
      setCategories(cats);
    };
    getCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setError("");
    setDisabled(false);
  };

  const handleCategories = () => {
    if (categories.length > -1) {
      return categories.map((item, key) => (
        <option key={`categories-${key}`} value={item._id}>
          {item.name}
        </option>
      ));
    }
  };

  const priceMask = createNumberMask({
    prefix: "R$ ",
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ",",
  });

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
                type="text"
                required
                placeholder="Informe o titulo"
                disabled={disabled}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Categoria </div>
            <div className="area-input">
              <select
                disabled={disabled}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Escolha uma categoria</option>
                {handleCategories()}
              </select>
            </div>
          </label>
          <label className="area">
            <div className="area-title">Preço</div>
            <div className="area-input">
              <MaskedInput
                mask={priceMask}
                placeholder="R$ 0,00"
                disabled={disabled || priceNegotiable}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Negociável</div>
            <div className="area-input input-checkbox">
              <input
                className="float-left"
                type="checkbox"
                disabled={disabled}
                checked={priceNegotiable}
                onChange={() => setPriceNegotiable(!priceNegotiable)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title">Descrição</div>
            <div className="area-input">
              <textarea
                disabled={disabled}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Descreva uma breve descrição"
              ></textarea>
            </div>
          </label>

          <label className="area">
            <div className="area-title">Imagens (1 ou mais) </div>
            <div className="area-input font-small">
              <input
                type="file"
                required
                multiple
                ref={fileField}
                disabled={disabled}
              />
            </div>
          </label>
          <label className="area">
            <div className="area-title"></div>
            <div className="area-input">
              <button disabled={disabled}>Adicionar Anúncio</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}

export default AddAd;
