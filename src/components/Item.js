import PropTypes from "prop-types"; // ES6
import DataContext from "../data/DataContext";
import "./style1.css";
import { useContext } from "react";

const Item = (props) => {
  const { title, amount } = props;
const name=useContext(DataContext)
  const status =amount<0 ? "extense":"income"
  const symbol=amount<0?"-":"+"
  return (
    <li className={status}>
      {title} <span>{symbol}{Math.abs(amount)}</span>

    </li>
  );
};

Item.prototype = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
export default Item;
