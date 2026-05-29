import { useEffect, useState } from "react";

import API from "../services/api";

function CreateInvoice() {
  const [clients, setClients] =
    useState([]);

  const [client, setClient] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [description, setDescription] =
    useState("");

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await API.get(
        "/users/clients"
      );

      setClients(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/invoices/create",
        {
          client,
          amount,
          description,
        }
      );

      alert("Invoice Created");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Create Invoice</h1>

      <form onSubmit={handleSubmit}>
        {/* CLIENT DROPDOWN */}

        <select
          required
          value={client}
          onChange={(e) =>
            setClient(e.target.value)
          }
          style={{
            width: "300px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <option value="">
            Select Client
          </option>

          {clients.map((c) => (
            <option
              key={c._id}
              value={c._id}
            >
              {c.name} ({c.email})
            </option>
          ))}
        </select>

        <br />

        {/* AMOUNT */}

        <input
          type="number"
          placeholder="Amount"
          required
          onChange={(e) =>
            setAmount(e.target.value)
          }
          style={{
            width: "300px",
            padding: "10px",
            marginBottom: "20px",
          }}
        />

        <br />

        {/* DESCRIPTION */}

        <input
          type="text"
          placeholder="Description"
          required
          onChange={(e) =>
            setDescription(e.target.value)
          }
          style={{
            width: "300px",
            padding: "10px",
            marginBottom: "20px",
          }}
        />

        <br />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
          }}
        >
          Create Invoice
        </button>
      </form>
    </div>
  );
}

export default CreateInvoice;