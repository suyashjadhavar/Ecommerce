import { useState } from "react";

function CheckoutForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Shipping Details</h2>

      <div className="form-group">
        <label>Full Name</label>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
        />
      </div>

      <div className="form-group">
        <label>Address</label>
        <input
          name="address"
          type="text"
          value={form.address}
          onChange={handleChange}
          placeholder="123 Main St"
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>City</label>
          <input
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            placeholder="Mumbai"
            required
          />
        </div>
        <div className="form-group">
          <label>ZIP Code</label>
          <input
            name="zip"
            type="text"
            value={form.zip}
            onChange={handleChange}
            placeholder="400001"
            required
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-full">
        Place Order
      </button>
    </form>
  );
}

export default CheckoutForm;
