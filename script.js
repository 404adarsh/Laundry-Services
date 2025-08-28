let cart = [];

function addToCart(name, price, btn) {
  cart.push({ name, price });
  renderCart();

  btn.style.display = "none"; // hide Add
  let removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.innerText = "Remove Item";
  removeBtn.onclick = function () {
    removeFromCartByName(name, btn, removeBtn);
  };
  btn.after(removeBtn);
}

function removeFromCartByName(name, addBtn, removeBtn) {
  const index = cart.findIndex(item => item.name === name);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  renderCart();

  removeBtn.remove();
  addBtn.style.display = "inline-block";
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
          <td><button class="remove-btn" onclick="removeFromCart(${index})">Remove</button></td>
        </tr>
      `;
    });

    document.getElementById("total").innerText = total;
  }

function book() {
    const bookPromise = new Promise((resolve, reject) => {
        const total = document.getElementById("total").innerText;
        if (total > 0) {
            resolve("Success");
        } else {
            alert("Please Select Any Amount To Proceed To Buy");
            reject("Failed");
        }
    });

    bookPromise.then(() => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        function validateForm() {
            let validate = true;
            if (name.length < 3) {
                validate = false;
                alert("Please Enter A Valid Name: " + name);
            } else if (email.length < 5) {
                validate = false;
                alert("Please Enter A Valid Email");
            } else if (phone.length < 10) {
                validate = false;
                alert("Please Enter A Valid Phone Number");
            }
            return validate;
        }
        if (!validateForm()) {
            return;
        }
(function(){
    emailjs.init("-YpHSk83Xkl--yBu8"); 
})();

        // Guru ji agar aap dekh rhe hai ye code to sorry yaha mai comment likh rha hu aapke liye!
        // mai apna service id revel nhi kar sakta to aap apna kar lena
        // ye work kar jaayega      
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", { //ADD YOUR SERVICES ID HERE
            to_name: name,
            to_email: email,
            phone: phone,
            total: document.getElementById("total").innerText
        }).then(function(response) {
            let msgDiv = document.getElementById("confirmationMsg");
            if (!msgDiv) {
                msgDiv = document.createElement("div");
                msgDiv.id = "confirmationMsg";
                document.getElementById("bookBtn").after(msgDiv);
            }
            msgDiv.innerText = "Thank you For Booking the Service. We will get back to you soon!";
        }, function(error) {
            alert("Failed to send confirmation email. Please try again.");
        });

    }).catch((err) => {
        console.log("Error:", err);
    });
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".newsletter-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = form.querySelector("input[name='newsletter-name']").value.trim();
    const email = form.querySelector("input[name='newsletter-email']").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "") {
      alert("⚠️ Please fill in both fields!");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("❌ Please enter a valid email address!");
      return;
    }

    alert(`🎉 Thank you, ${name}! You have been subscribed with ${email}.`);

    form.reset();
  });
});









function burger() {
    let navList = document.querySelector('.nav-list');
    let navbar = document.querySelector('.navbar');
    let uname = document.querySelector('.uname');

    navList.classList.toggle('v-class-resp');
    uname.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

    if (navList.classList.contains('v-class-resp')) {
        const anchors = navList.querySelectorAll('a');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', closeBurgerOnAnchor, { once: true });
        });
    }
}

function closeBurgerOnAnchor() {
    document.querySelector('.nav-list').classList.remove('v-class-resp');
    document.querySelector('.uname').classList.remove('v-class-resp');
    document.querySelector('.navbar').classList.remove('h-nav-resp');
}