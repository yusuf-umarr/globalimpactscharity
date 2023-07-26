

let programName = ''
let basedUrl = 'https://covenant-vercel-api.vercel.app/auth'

// load program name
loadProgramType() ;

//get data


function storeData(data) {
    // const data = "Hello, World! now";
     localStorage.setItem("myData", data);
  }

function loadProgramType() {
    if (localStorage.getItem("myData")) {
        programName =  localStorage.getItem("myData")
        
    }
  
    const dataDiv = document.getElementById("title");
    dataDiv.textContent = programName + "";

}


//register
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

      // Disable the submit button
        const submitButton = document.getElementById('submitButton');
        submitButton.disabled = true;
        submitButton.value = 'Loading...';

        // Simulate a delay for demonstration purposes (Remove this in your actual code)
        setTimeout(() => {
            // Your code for form submission here

            // Enable the submit button after the loading process is complete
            submitButton.disabled = false;
            submitButton.value = 'Submit';
        }, 2000); 
  
    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const zipCode = document.getElementById('zipCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

      // Generate a registration ID based on time and date
    const registrationId = generateRegistrationId();

     // Get the current date
  const createdDate = new Date().toISOString();
  
    // Create a data object to send in the request body
    const data = {
      name: name,
      email: email,
      address:address,
      zipCode:zipCode,
      phoneNumber:phoneNumber,
      programName:programName,
      registrationId:registrationId,
      createdDate:createdDate

    };

  
    //Send the POST request
    fetch(`${basedUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      console.log('Response:', data);

       // Display a success message
    alert('Registration successful!');
    // location.reload();
        // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('zipCode').value = '';
    document.getElementById('phoneNumber').value = '';
    })
    .catch(error => {
      // Handle any errors
      console.error('Error:', error);
    });
  });

  function generateRegistrationId() {
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');


    const randomLetters = generateRandomLetters(4); 
    const registrationId = `${randomLetters}${year}/${month}/${day}/${hours}:${minutes}/${seconds}`;
    
    return registrationId;
  }

  function generateRandomLetters(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  
  document.addEventListener('DOMContentLoaded', function() {
    // Fetch the data from the API server
    fetch(`${basedUrl}/reg-data`)
      .then(response => response.json())
      .then(data => {
        // Filter data for the specific program "HEAR MY CRY, O LORD"
        const programData = data.filter(entry => entry.programName === "HEAR MY CRY, O LORD");
  
        // Display the total count on the page
        displayTotalCount(programData.length);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  
  // Helper function to display the total count on the page
  function displayTotalCount(totalCount) {
    const totalCountElement = document.getElementById('totalCount');

    if (programName == "HEAR MY CRY, O LORD") {
      if (totalCountElement) {
        totalCountElement.textContent = `Total Seat Left: ${200 - totalCount}`;
      }
      
    }
  
  }
  
