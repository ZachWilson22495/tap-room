import React from "react";
import PropTypes from "prop-types";

function DrinkDetail(props){
  const { drink, onClickingDelete } = props; //new code

  return (
    <React.Fragment>
      <h3>Name: {drink.name}
      <hr></hr>
      Brand: {drink.brand}
      <hr></hr>
      Price: ${drink.price}
      <hr></hr>
      Flavor: {drink.flavor}
      <hr></hr>
      Pints Remaining: {drink.pints}</h3>
      <hr></hr>
      <button onClick={ props.onClickingEdit }>Update Drink</button>
      <button onClick={()=> onClickingDelete(drink.id) }>Remove Drink</button> { /* new code */ }
      <hr/>
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingDelete: PropTypes.func, // new code
  onClickingEdit: PropTypes.func
};
export default DrinkDetail;