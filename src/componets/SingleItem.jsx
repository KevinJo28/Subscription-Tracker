import { FaRegEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

// eslint-disable-next-line react/prop-types
const SingleItem = ({price, type, id, eliminarItem, editItem}) => {
    const HandleDelete = (e)=>{
      e.preventDefault();
      eliminarItem(id);

    }
    const HandleEdit = (e)=>{
      e.preventDefault();
      editItem(id);
   

    }
    return (
      <div className="singleItem">
        <img src={"/src/img/" + type + ".png"} alt="services" />
        <h3>Precio: {"$" + price}</h3>
        <section>
          <a href="" className="buttona" onClick={HandleEdit}><FaRegEdit /></a>
          <a href="" className="buttona" onClick={HandleDelete}><TiDelete /></a>
        </section>
        
        
        
      </div>
    );

}



export default SingleItem;