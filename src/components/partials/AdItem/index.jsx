import { Link } from "react-router-dom";
import { FormaterCurrency } from "../../../helpers";
import { Item } from "./styled";

function AdItem({ data }) {
  let price = data.priceNegotiable
    ? "Preço Negociável"
    : FormaterCurrency(data.price);
  return (
    <Item className="aditem">
      <Link to={`/ad/${data.id}`}>
        <div className="itemImage">
          <img src={data.image} alt="" />
        </div>
        <div className="itemName"> {data.title}</div>
        <div className="itemPrice">{price}</div>
      </Link>
    </Item>
  );
}

export default AdItem;
