import React from "react";
import PropTypes from "prop-types";

function DrinkDetail(props){
  const { drink, onClickingSell, onClickingEdit, onClickingDelete } = props;
  
  function handleSell() {
    onClickingSell(props.drinkId)
  }
  
  function handleEdit(){
    onClickingEdit();
  }

  function handleDelete(){
    onClickingDelete(drink.id);
  }

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
      <button onClick={ handleSell }>Sell a Pint</button>
      <hr></hr>
      <button onClick={ handleEdit }>Update Drink</button>
      <button onClick={ handleDelete }>Remove Drink</button>
      <hr/>
    </React.Fragment>
  );
}

DrinkDetail.propTypes = {
  drink: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};
export default DrinkDetail;