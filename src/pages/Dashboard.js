import { useEffect, useState } from "react";

import API from "../services/api";

function Dashboard() {
  const [invoices, setInvoices] =
    useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const res = await API.get(
        "/invoices/my-invoices"
      );

      setInvoices(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handlePay = async (
    invoiceId
  ) => {
    try {
      const res = await API.post(
        "/payments/create-checkout-session",
        {
          invoiceId,
        }
      );

      window.location.href =
        res.data.url;

    } catch (error) {
      console.log(error.response?.data);
      alert(
        error.response?.data?.message ||
          "Payment Failed"
      );
    }
  };

  const logout = () => {
    localStorage.clear();

    window.location.href = "/";
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>
        Welcome {user?.name}
      </h1>

      <button onClick={logout}>
        Logout
      </button>

      {/* ADMIN BUTTON */}

      {user?.role === "admin" && (
        <button
          onClick={() =>
            (window.location.href =
              "/create-invoice")
          }
          style={{
            marginLeft: "20px",
            padding: "10px",
          }}
        >
          Create Invoice
        </button>
      )}

      <hr />

      <h2>Invoices</h2>

      {invoices.length === 0 && (
        <p>No invoices found</p>
      )}

      {invoices.map((invoice) => (
        <div
          key={invoice._id}
          style={{
            border:
              "1px solid gray",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <h3>
            {invoice.description}
          </h3>

          <p>
            Amount: $
            {invoice.amount}
          </p>

          <p>
            Status: {invoice.status}
          </p>

          {/* PAY BUTTON */}

          {invoice.status ===
            "Pending" &&
            user.role ===
              "client" && (
              <button
                onClick={() =>
                  handlePay(
                    invoice._id
                  )
                }
              >
                Pay Now
              </button>
            )}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;