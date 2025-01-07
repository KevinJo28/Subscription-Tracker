import SingleItem from "./SingleItem";

// eslint-disable-next-line react/prop-types
const DisplayItems = ({subs , eliminarItem, editItem}) => {
  return (
    <>
      <h2>Subscripciones</h2>
      {
        // eslint-disable-next-line react/prop-types
        subs.map(item => (
            <SingleItem 
            Key={item.id}
            id={item.id}
            price={item.price}
            type={item.type}
            eliminarItem={eliminarItem}
            editItem={editItem}
            />
        ))
      }
    </>
  );
}

export default DisplayItems;