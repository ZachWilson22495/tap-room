import React from "react";
import Drink from "./Drink";
import PropTypes from "prop-types";

function DrinkDisplay(props){
  return (
    <React.Fragment>
      <hr/>
      {props.drinkList.map((drink) =>
        <Drink whenDrinkClicked = { props.onDrinkSelection} 
        name={drink.name}
        brand={drink.brand}
        price={drink.price}
        flavor={drink.flavor}
        pints={drink.pints}
        id={drink.id}
        key={drink.id}/>
      )}
    </React.Fragment>
  );
}

DrinkDisplay.propTypes = {
  drinkList: PropTypes.array,
  onDrinkSelection: PropTypes.func
};

export default DrinkDisplay;