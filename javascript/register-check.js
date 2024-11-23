function getQueryParams(param) {
  let params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// Store the referral code in local storage
const referralCode = getQueryParams('ref');
if (referralCode) {
    localStorage.setItem('referralCode', referralCode);
}

document.getElementById('registration-post').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission
  const name = document.getElementById("namefield").value;
  const surname = document.getElementById("surnamefield").value;
  const address = document.getElementById("addressfield").value;
  const zip = document.getElementById("capfield").value;
  const phone = document.getElementById("phonefield").value;
  const email = document.getElementById("userfield").value;
  const password = document.getElementById("passfield").value;

  const referralCode = localStorage.getItem("referralCode") || null; 

  try {
    const response = await fetch('http://localhost/tradeverse/backend/php/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({namefield: name, 
                              surnamefield: surname, 
                              addressfield: address,
                              capfield: zip,
                              phonefield: phone,
                              userfield: email,
                              passfield: password,
                              referralCode: referralCode})
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
    console.log(data.message);

    if (data.message.includes("You are now registered")) {
        window.location.href = "login.html";
    } else {
        console.error(data.message);
    }
} 
    catch (error) {
    console.error('There was a problem with the registration process:', error);
}
})