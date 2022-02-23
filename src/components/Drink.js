import React from "react";
import PropTypes from "prop-types";
function Drink(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenDrinkClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.brand}</h3>
        <h3>{props.price}</h3>
        <h3>{props.flavor}</h3>
        <h3>{props.pints}</h3>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenDrinkClicked: PropTypes.func
};
export default Drink;