import React, { Component } from "react";
import "./Adminappliedloan.css";
import { FormErrors } from "./FormErrors";


export class Adminapprovedloan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput:'',
      formErrors: {searchInput: ''},
      searchInputValid: false,
      formValid: false
    };
  }

  handleUserInput = (e) => {
    const searchInput = e.target.name;
    const value = e.target.value;
    this.setState({[searchInput]: value},
                  () => { this.validateField(searchInput, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let searchInputValid = this.state.searchInputValid;

    switch(fieldName) {
      case 'searchInput':
        searchInputValid = value.match(/[0-9]/gm);
        fieldValidationErrors.searchInput = searchInputValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      searchInputValid: searchInputValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.searchInputValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render() {
    return (
      <form className="demoForm">
      <div>
        <nav>
          <div></div>
          <div>
            <ul>
              <a id="adminAppliedLoan" href="http://localhost:3000/">
                Applied Loans
              </a>
              <a id="AdminLoanDetails" href="/Adminapprovedloan">
                Loan Details
              </a>
            </ul>
          </div>
          <div>
            <a id="logout" href="/login">
              Logout
            </a>
          </div>
        </nav>
        
        <div id="container">
        <div className={`form-group ${this.errorClass(this.state.formErrors.searchInput)}`}>
          <input
            id="searchInput"
            name="searchInput"
            type="text"
            placeholder="Enter Loan Id to Search"
            value={this.state.searchInput}
            onChange={this.handleUserInput}
          ></input>
          
          <button id="searchBtn" type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Search</button>
          <div id="errordiv" className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        </div>
        </div>
        
      </div>
      </form>
    );
  }
}

export default Adminapprovedloan;
