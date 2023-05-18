function login(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert(data.message); // Display success message
      } else {
        alert(data.message); // Display error message
      }
    });
}

function register(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const phoneNo = document.getElementById("phoneNo").value;

  const data = {
    firstName,
    lastName,
    username,
    password,
    age,
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
