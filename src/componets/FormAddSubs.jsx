import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FormAddSub = ({setType, setPrice, type, price, setSubs, subs, editId, setEditId, spent, count}) => {
    const [error, setError] = useState(false)
    const [error2, setError2] = useState(false)
    const handleSubs = e=>{
      e.preventDefault()
      if(price ===  "" || Number(price) < 0 || type === ""){
        setError(true)
        return;

        
      }
      if (count - spent < Number(price)) {
        setError2(true)
        return;
      }
      setError2(false)
      if (editId != "") {
        setEditId("");
        // eslint-disable-next-line react/prop-types
        const newSubs = subs.map(item => {
          if (item.id === editId) {
            item.type = type;
            item.price = price;

            
          }
          return item;
        })
        setSubs(newSubs);
      }else{
        const data = {
          type: type,
          price: price,
          id: Date.now()
          
        }
        setSubs([...subs, data])
      }

      setError(false);
      
      setType("");
      setPrice("");
    }
    return (
      <div className="formAddSub">
        <h3>Agregar Suscripciones</h3>
        <form onSubmit={handleSubs}>
          <p>Servicio</p>
          <select
            name=""
            id=""
            onChange={(e) => {
              setType(e.target.value);
            }}
            value={type}
          >
            <option value="">---- Elegir ----</option>
            <option value="netflix">Netflix</option>
            <option value="disneyPlus">Disney Plus</option>
            <option value="hboMax">HBO Max</option>
            <option value="spotify">Spotify</option>
            <option value="crunchyroll">Crunchyroll</option>
            <option value="apletv">Aple Tv</option>
          </select>
          <p>Cantidad</p>
          <input
            type="number"
            placeholder="$20"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
          />
          {editId != "" ? (
            <input type="submit" value="Guardar" />
          ) : (
            <input type="submit" value="Agregar" />
          )}
        </form>
        {error ? <p className="error">Campos Invalidos</p> : null}
        {error2 ? <p className="error">No tienes presupuesto</p> : null}
      </div>
    );

}

export default FormAddSub;