// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const Balance = ({count, subs, setSpent, spent}) => {
  
  const updateBalance = () => {
    // eslint-disable-next-line react/prop-types
    let spents = subs.reduce((accumulator, currentValue) => accumulator + Number(currentValue.price), 0);
    setSpent(spents)

  }
  useEffect(()=>{
    updateBalance()
  }, [subs])
    return (
      <div className="balance">
        <h3>Presupuesto : {"$" + count}</h3>
        <h3>Disponible : {"$" + (Number(count) - Number(spent))}</h3>
        <h3>Gastado : {"$" + (Number(spent))}</h3>
      </div>
    );

}

export default Balance;