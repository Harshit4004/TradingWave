function Ticket({ logo, ticketName, item1, item2, item3, item4, item5, item6}) {
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col">
          <div className="dropdown ">
            
            <button
              className="btn dropdown-toggle w-100 border d-flex justify-content-between align-items-center p-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{textAlign: "left"}}
            > <div className="d-flex justify-content-between align-items-center ticket-logo">
                { logo }
              <h1 className="fs-6 ms-3">{ ticketName}</h1>
              </div>
            </button>
            <ul className="dropdown-menu w-100 ps-5 support-link">
              <li>
                <a className="" href="#">
                  { item1 }
                </a>
              </li>
              <li>
                <a className="" href="#">
                  { item2 }
                </a>
              </li>
              <li>
                <a className="" href="#">
                  { item3 }
                </a>
              </li>
              <li>
                <a className="" href="#">
                  { item4 }
                </a>
              </li>
              <li>
                <a className="" href="#">
                  { item5 }
                </a>
              </li>
              <li>
                <a className="" href="#">
                  { item6 }
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default Ticket;
