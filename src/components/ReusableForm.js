import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Drink Name' />
        <input
          type='text'
          name='brand'
          placeholder='Drink Brand' />
        <input
          type='number'
          name='price'
          placeholder='Drink price' />
        <input
          type='text'
          name='flavor'
          placeholder='Drink Flavor' />
        <input
          type='number'
          name='pints'
          placeholder='Amount of Drink in stock.' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;