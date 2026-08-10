import Ticket from "./Ticket";

function CreateTicket() {
  return (
    <>
      <div className="container-fluid px-5 mt-4">
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <Ticket 
            ticketName="Account Opening"
            logo={<i className="fa-solid fa-circle-plus pb-2 fs-5"></i>}
            item1="Resident individual"
            item2="Minor"
            item3="Non Resident Indian (NRI)" 
            item4="Company, Partnership, HUF and LLP"
            item5="Glossary"
            />
            <Ticket 
            ticketName="Your TradingWave Account"
            logo={<i className="fa-regular fa-circle-user pb-2 fs-5"></i>}
            item1="Your Profile"
            item2="Account modification"
            item3="Client Master Report (CMR) and Depository Participant (DP)" 
            item4="Nomination"
            item5="Transfer and conversion of securities"
            />
            <Ticket 
            ticketName="Tick"
            logo={<i className="fa-brands fa-accusoft pb-2 fs-5"></i>}
            item1=" IPO"
            item2="Trading FAQs"
            item3="Margin Trading Facility (MTF) and Margins" 
            item4="Charts and orders"
            item5="Alerts and Nudges"
            item6="General"
            />
            <Ticket 
            ticketName="Funds"
            logo={<i className="fa-solid fa-indian-rupee-sign pb-2 fs-5"></i>}
            item1="Add money"
            item2="Withdraw money"
            item3="Add bank accounts" 
            item4="eMandates"
            />
            <Ticket 
            ticketName="Console"
            logo={<i className="fa-brands fa-xbox pb-2 fs-5"></i>}
            item1="Portfolio"
            item2="Corporate actions"
            item3="Funds statement" 
            item4="Reports"
            item5="Profile"
            item5="Segments"
            />
            <Ticket 
            ticketName="Coin"
            logo={<i className="fa-brands fa-codiepie pb-2 fs-5"></i>}
            item1="Mutual funds"
            item2="National Pension Scheme (NPS)"
            item3="Fixed Deposit (FD))" 
            item4="Features on Coin"
            item5="Payments and Orders"
            item5="General"
            />
          </div>
          <div className="col-lg-3 col-md-12 mt-4">
                
                <ul className="list-unstyled support-link" >
                    <li className="fs-6 fw-semibold border rounded-top p-3">Quick links</li>
                    <li className="border  p-3"><a href="" className="text-decoration-none">1. Track segment activation</a></li>
                    <li className=" border p-3"><a href="" className="text-decoration-none">2. Intraday margins</a></li>
                    <li className=" border p-3"><a href="" className="text-decoration-none">3. Tick user manual</a></li>
                    <li className=" border rounded-bottom p-3"><a href="" className="text-decoration-none">4. Learn how to create a ticket</a></li>
                </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTicket;
