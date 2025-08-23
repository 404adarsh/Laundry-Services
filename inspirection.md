<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Service Cart</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background: #f5f6fa;
      padding: 20px;
    }

    .container {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;
      max-width: 1000px;
      margin: auto;
    }

    .card {
      background: #fff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    h2 {
      margin-bottom: 15px;
    }

    .service {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #eee;
    }

    .service span {
      font-weight: bold;
      color: #007bff;
    }

    button {
      padding: 6px 12px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.3s;
    }

    .add {
      background: #eee;
    }

    .remove {
      background: #ffdddd;
      color: #c00;
    }

    button:hover {
      transform: scale(1.05);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 15px;
    }

    table th, table td {
      padding: 8px;
      border-bottom: 1px solid #eee;
      text-align: left;
    }

    .total {
      font-size: 18px;
      font-weight: bold;
      text-align: right;
      margin-top: 10px;
    }

    .form input {
      width: 100%;
      padding: 10px;
      margin: 8px 0;
      border: 1px solid #ddd;
      border-radius: 8px;
    }

    .form button {
      background: #007bff;
      color: #fff;
      width: 100%;
      padding: 12px;
      font-size: 16px;
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- Left: Services -->
    <div class="card">
      <h2>Our Services</h2>
      <p>Click on the Add To Cart button to add the services to your cart</p>
      <div class="service">
        Dry Cleaning - <span>₹200</span>
        <button class="add" onclick="addToCart('Dry Cleaning', 200)">Add Item</button>
      </div>
      <div class="service">
        Wash & Fold - <span>₹100</span>
        <button class="add" onclick="addToCart('Wash & Fold', 100)">Add Item</button>
      </div>
      <div class="service">
        Ironing - <span>₹30</span>
        <button class="add" onclick="addToCart('Ironing', 30)">Add Item</button>
      </div>
      <div class="service">
        Stain Removal - <span>₹500</span>
        <button class="add" onclick="addToCart('Stain Removal', 500)">Add Item</button>
      </div>
      <div class="service">
        Leather & Suede Cleaning - <span>₹999</span>
        <button class="add" onclick="addToCart('Leather & Suede Cleaning', 999)">Add Item</button>
      </div>
      <div class="service">
        Wedding Dress Cleaning - <span>₹2800</span>
        <button class="add" onclick="addToCart('Wedding Dress Cleaning', 2800)">Add Item</button>
      </div>
    </div>

    <!-- Right: Cart -->
    <div class="card">
      <h2>Added Items</h2>
      <table id="cartTable">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Service Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="cartBody"></tbody>
      </table>
      <div class="total">Total Amount: ₹<span id="total">0</span></div>

      <div class="form">
        <h3>Book Now</h3>
        <input type="text" placeholder="Full Name">
        <input type="email" placeholder="Email ID">
        <input type="text" placeholder="Phone Number">
        <button>Book Now</button>
      </div>
    </div>
  </div>

  <script>
    let cart = [];
    
    function addToCart(name, price) {
      cart.push({ name, price });
      renderCart();
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      renderCart();
    }

    function renderCart() {
      const cartBody = document.getElementById("cartBody");
      cartBody.innerHTML = "";
      let total = 0;
      
      cart.forEach((item, index) => {
        total += item.price;
        cartBody.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td><button class="remove" onclick="removeFromCart(${index})">Remove</button></td>
          </tr>
        `;
      });
      
      document.getElementById("total").innerText = total;
    }
  </script>

</body>
</html>
