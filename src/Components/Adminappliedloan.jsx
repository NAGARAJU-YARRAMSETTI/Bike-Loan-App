import React from "react";
import "./Adminappliedloan.css";
import Cards from "./Cards";

function Adminappliedloan() {

  const list = [
    {
      name:"hi",
      id:1,
      


    },
    {
      name:"hello",
      id:2
    },{
      name:"hi",
      id:1
    },
    {
      name:"hello",
      id:2
    },{
      name:"hi",
      id:1
    },
    {
      name:"hello",
      id:2
    }
  ]
  return (
    <div>
      <div className="Adminappliedloan">
      <nav>
        <div>
          <h1>Bike|loan</h1>
        </div>
        <div>
          <ul>
            <a id="adminAppliedLoan">
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
    </div>
    <Cards props={list}/>
    </div>
  );
}

export default Adminappliedloan;
