import React from "react";
import "./services.css";
import Footer from "../../components/footer";

class Services extends React.Component {
  render() {
    return (
      <div id="mainServices">
        <h1>Services</h1>


        <div className="container" id="services">
          <div className="box">
            <h2>Factoring Services</h2>
           <br></br>
           <br></br>
            <p>
              {" "}
            <h3>Royalty Dispatch Services is a trusted provider of Top quality Factoring services!</h3>
              <h3>What is Factoring?</h3>
              
              Factoring is the process that allows our company to purchase your unpaid invoices.
              It is also viewed as accounts receivable financing.
              Factoring allows Royalty Dispatch Services to have a fast turnaround on your pay(sometimes even within hours), while we 
             once the freight has been verified, then collect the
             invoice balance from your customer once they pay.

             <h3>What Can Royalty Dispatch Services do for you?</h3>
              We work to get you paid in 1-3 business days, even in an hour in some cases.
            </p>
          </div>
        
        </div>
        <Footer />
      </div>
    );
  }
}

export default Services;
