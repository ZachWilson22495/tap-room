import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function DrinkForm(props) {
  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onNewDrinkCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value, pints: event.target.pints.value, id: v4()})
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewDrinkFormSubmission}
      buttonText="Add Drink" />
    </React.Fragment>
  );
}

DrinkForm.propTypes = {
  onNewDrinkCreation: PropTypes.func
};

export default DrinkForm;