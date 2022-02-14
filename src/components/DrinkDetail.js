import React from "react";
import PropTypes from "prop-types";

function DrinkDetail(props){
  const { drink, onClickingDelete } = props; //new code

  return (
    <React.Fragment>
      <h3>{drink.name}</h3>
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