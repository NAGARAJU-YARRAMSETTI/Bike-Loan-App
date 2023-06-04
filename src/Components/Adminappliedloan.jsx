import React from "react";
import "./Adminappliedloan.css";

function Adminappliedloan() {
  return (
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
  );
}

export default Adminappliedloan;
