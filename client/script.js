// Initialize user variable with values firstName, lastName, email, password, phoneNo and userID
let user = {
  id:"",
  firstname: "",
  lastname: "",
  email: "",
  phoneno: "",
};

let product = {
  id: "123",
  name: "Product Name",
  description: "Product Description",
  price: 9.99,
};

const productElement = document.querySelector('[data-reflow-type="product"]');
productElement.setAttribute('data-bss-dynamic-product-param', JSON.stringify(product));

function login(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert(data.message); // Display sucesss message
        user = data.user; // Maps user details to the user variable
        //redirect to home page
        window.location.href = "index.html"; 
        const userIdElement = document.getElementById('user-id');
        userIdElement.textContent = user.id;
      } else {
        alert(data.message); // Display error message
      }
    });
}

function register(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const phoneNo = document.getElementById("phoneNo").value;

  const data = {
    firstName,
    lastName,
    email,
    password,
    phoneNo,
  };

  fetch("http://localhost:3001/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert(data.message); // Display success message
        // Optionally, redirect to a success page
      } else {
        alert(data.message); // Display error message
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred during registration.");
    });
}


function goToRegister(event) {
  event.preventDefault(); // Prevent the default link click behavior
  window.location.href = "register.html"; // Navigate to register.html
}

document.querySelector("a[href='register.html']").addEventListener("click", goToRegister);