import { useState, useEffect } from "react";
import api from ".././api/api";
import { toast } from "react-toastify";

function Orders() {
  const [orders, setOrders] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const ordersPerPage = 10;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await api.get("/api/orders");

        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);

        toast.error(
          err.response?.data?.message ||
            "Failed to fetch orders. Please try again.",
        );
      }
    };

    fetchOrders();
  }, []);

  // PAGINATION CALCULATIONS

  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const lastOrderIndex = currentPage * ordersPerPage;

  const firstOrderIndex = lastOrderIndex - ordersPerPage;

  const currentOrders = orders.slice(firstOrderIndex, lastOrderIndex);

  // PAGE CHANGE

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      {orders.length === 0 && <p>You haven't placed any orders today.</p>}

      <h3>Orders ({orders.length})</h3>

      {orders.length > 0 && (
        <>
          <div key={currentPage} className="order-table page-change">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Order val</th>
                  <th>Status</th>
                  <th>Order Time</th>
                </tr>
              </thead>

              <tbody>
                {currentOrders.map((order) => {
                  const totalValue = order.price * order.qty;

                  return (
                    <tr key={order?._id}>
                      <td>{order?._id}</td>

                      <td>{order?.name}</td>

                      <td>{order?.qty}</td>

                      <td className={order?.mode === "BUY" ? "profit" : "loss"}>
                        {order?.mode}
                      </td>

                      <td>{order?.price}</td>

                      <td>{totalValue.toFixed(2)}</td>

                      <td>{order?.status}</td>

                      <td>{new Date(order.createdAt).toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}

          {totalPages > 1 && (
            <div className="pagination">
              <button onClick={handlePrevious} disabled={currentPage === 1}>
                Previous
              </button>

              <div className="page-numbers">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={currentPage === pageNumber ? "active" : ""}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Orders;
