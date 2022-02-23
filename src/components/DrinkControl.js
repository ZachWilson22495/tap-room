import React from 'react';
import DrinkForm from './DrinkForm'
import DrinkDisplay from './DrinkDisplay'
import DrinkDetail from './DrinkDetail';
import EditDrinkForm from './EditDrinkForm'
import {v4} from 'uuid';

const initialDrinks = [
  {
    name: "Watermelong Island Iced Tea",
    brand: "Fruity Juicers",
    price: 5, 
    flavor: "Watermelon",
    pints: 124,
    id: v4()
  },
  
  {
    name: "Diamond Hard Lemonade",
    brand: "Fruity Juicers",
    price: 10, 
    flavor: "Lemon",
    pints: 124,
    id: v4()
  },

  {
    name: "Liquid Gold",
    brand: "Indiana Mining Co.",
    price: 50, 
    flavor: "Metallic",
    pints: 124,
    id: v4()
  },
]

class DrinkControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      availableDrinks: [...initialDrinks],
      selectedDrink: null,
      editing: false
    };
  }

  // handleSellingClick = () => {
  //   this.setState(chosenDrink => {
  //     console.log(chosenDrink.pints)
  //     if(chosenDrink.pints > 0) {
  //       return {
  //         pints: chosenDrink.quantity - 1
  //       }
  //     } else {
  //       return null;
  //     }
  //   });
  // }

  // handleSellingClick = (id) => {
  //   const chosenDrink = this.state.availableDrinks.find(drink => drink.id === id)
  //   this.setState({
  //     chosenDrink.pints: chosenDrink.pints - 1
  //   });
  // }

  handleSellingClick = (id) => {
    let newAvailableDrinks = [...this.state.availableDrinks];
    let chosenDrink = newAvailableDrinks.find(drink => drink.id === id);
    if (chosenDrink.pints > 0) {
      chosenDrink.pints -= 1
    } else {
      chosenDrink.pints = 0
    }
    
    this.setState({availableDrinks: newAvailableDrinks});
  }

  handleDeletingDrink = (id) => {
    const newMainDrinkList = this.state.availableDrinks.filter(drink => drink.id !== id);
    this.setState({
      availableDrinks: newMainDrinkList,
      selectedDrink: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingDrinkInList = (drinkToEdit) => {
    const editedMainDrinkList = this.state.availableDrinks
      .filter(drink => drink.id !== this.state.selectedDrink.id)
      .concat(drinkToEdit);
    this.setState({
        availableDrinks: editedMainDrinkList,
        editing: false,
        selectedDrink: null
      });
  }

  handleChangingSelectedDrink = (id) => {
    const selectedDrink = this.state.availableDrinks.filter(drink => drink.id === id)[0];
    this.setState({selectedDrink: selectedDrink});
  }

  handleClick = () => {
    if (this.state.selectedDrink != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedDrink: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddDrink = (newDrink) => {
    const newAvailableDrinks = this.state.availableDrinks.concat(newDrink);
    this.setState({availableDrinks: newAvailableDrinks, formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing) {
      currentlyVisibleState = <EditDrinkForm drink = {this.state.selectedDrink} 
      onEditDrink = {this.handleEditingDrinkInList} />
      buttonText = "Return to Drink List";
    } 
    else if (this.state.selectedDrink != null) {
      currentlyVisibleState = <DrinkDetail drink = {this.state.selectedDrink}
      drinkId = {this.state.selectedDrink.id}
      onClickingSell = {this.handleSellingClick}
      onClickingDelete = {this.handleDeletingDrink}
      onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to Drink List";
      
      // While our TicketDetail component only takes placeholder data, we will eventually be passing the value of selectedTicket as a prop.
    }
    else if (this.state.formVisibleOnPage) {
      // This conditional needs to be updated to "else if."
      currentlyVisibleState = <DrinkForm onNewDrinkCreation={this.handleAddDrink}  />;
      buttonText = "Return to Drink List";

    }
    else {
      currentlyVisibleState = <DrinkDisplay drinkList={this.state.availableDrinks} onDrinkSelection={this.handleChangingSelectedDrink} />;
      // Because a user will actually be clicking on the ticket in the Ticket component, we will need to pass our new handleChangingSelectedTicket method as a prop.
      buttonText = "Add Drink";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default DrinkControl;