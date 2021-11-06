import Item from "./Item";
import DataContext from "../data/DataContext";
import { useContext } from "react";
const Transaction = (props) => {
  const { item } = props;


  return (
    <div>
      <ul>
        {item.map((e) => {
          return <Item {...e} key={e.id} />; // <Item title={e.title} amount={e.amount} />;
        })}
      </ul>
  
    </div>
  );
};
export default Transaction;
