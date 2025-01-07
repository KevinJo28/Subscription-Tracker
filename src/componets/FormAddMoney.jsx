/* eslint-disable react/prop-types */
import { useState } from "react";

const FormAddMoney = ({ setCount, setIsValid }) => {
    const [input, SetInput] = useState("");
    const [error, SetError] = useState(false);
    const handleForm = (e) => {
        e.preventDefault();
        if (input === "" || Number(input) < 0){
          SetError(true);
          return;
        }
        SetError(false);
        setCount(Number(input));
        setIsValid(true);
        
        
    }
    return (
      <div className="FormAddMoney">
        <form action="" onSubmit={handleForm}>
            <p>Agregar Presupuesto Inicial</p>
            <input type="number" placeholder="$300" onChange={e=>{ SetInput(e.target.value)}}/>
            <input type="submit" value={"Agregar"}/>
        </form>
        {error ? <p className="error">Presupuesto Invalido</p> : null}
      </div>
    );
}

export default FormAddMoney;