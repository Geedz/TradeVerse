document.getElementById('login-form').addEventListener('submit', async (event) => {
  
  event.preventDefault(); // Prevent the default form submission
  
  const email = document.getElementById("userfield").value;
  const password = document.getElementById("passfield").value;

  try {
    const response = await fetch('http://localhost/tradeverse/backend/php/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userfield: email,
                              passfield: password,})
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();

    const errorMessageDiv = document.getElementById("error-message");

    if (data.message === "Login successful") {

      localStorage.setItem("jwt", data.token);
      localStorage.setItem("current_plan", data.current_plan);
      localStorage.removeItem('referralCode');
      
      window.location.href = "../personal-area/index.html";

      errorMessageDiv.style.display = 'none';
      errorMessageDiv.textContent = '';

    } else {

      console.error(data.message);
      
      errorMessageDiv.style.display = 'block';
      errorMessageDiv.textContent = data.message;
    }
} 
    catch (error) {
    console.error('There was a problem with the login process:', error);
}
})