import { useState } from "react";
import Balance from "./Balance";
import FormAddSub from "./FormAddSubs";
import DisplayItems from "./DisplayItems";

// eslint-disable-next-line react/prop-types
const MainControl = ({count}) => {
  const [spent, setSpent] = useState(0);
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [subs, setSubs] = useState([]);
  const [editId, setEditId] = useState("")
  const eliminarItem = id => {
    const newList = subs.filter(item => item.id != id);
    setSubs(newList);
  }
  const editItem = id => {
    setEditId(id);
    subs.map((item) => {
      if (item.id === id) {
        setType(item.type);
        setPrice(item.price);
      }
    });
  }
    return (
      <>
        <div className="mainControl">
          <Balance count={count} subs={subs} spent={spent} setSpent={setSpent}/>
          <FormAddSub
            setPrice={setPrice}
            setType={setType}
            price={price}
            type={type}
            subs={subs}
            setSubs={setSubs}
            editId={editId}
            setEditId={setEditId}
            spent={spent}
            count={count}
          />
        </div>
        <DisplayItems subs={subs} eliminarItem={eliminarItem} editItem={editItem} />
      </>
    );

}

export default MainControl;