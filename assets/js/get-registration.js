
let basedUri = 'https://covenant-vercel-api.vercel.app/auth'
const totalCountDiv = document.createElement('div');


document.addEventListener('DOMContentLoaded', function() {
    // Fetch the data from the API server
    fetch(`${basedUri}/reg-data`)
      .then(response => response.json())
      .then(data => {
        // Sort the data by the "createdDate" field in ascending order
        data.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));
  
        // Group the data by "programName"
        const groupedData = groupByProgramName(data);
  
        // Render the tables for each program
        const getContainer = document.querySelector('.getContainer');
  
        for (const programName in groupedData) {
          const programData = groupedData[programName];
          const programTable = createProgramTable(programName, programData);
          getContainer.appendChild(programTable);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  
  // Helper function to group data by "programName"
  function groupByProgramName(data) {
    return data.reduce((result, entry) => {
      if (!result[entry.programName]) {
        result[entry.programName] = [];
      }
      result[entry.programName].push(entry);
      return result;
    }, {});
  }
  
  // Helper function to create a table for a specific program
  function createProgramTable(programName, programData) {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
  
    const tableHeadRow = document.createElement('tr');
    tableHeadRow.innerHTML = `
      <th>Registration ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      <th>Created Date</th>
    `;
    tableHead.appendChild(tableHeadRow);
  
    programData.forEach(entry => {
      const tableBodyRow = document.createElement('tr');
      tableBodyRow.innerHTML = `
        <td>${entry.registrationId}</td>
        <td>${entry.name}</td>
        <td>${entry.email}</td>
        <td>${entry.address}</td>
        <td>${entry.zipCode}</td>
        <td>${entry.phoneNumber}</td>
        <td>${formatDate(entry.createdDate)}</td>
      `;
      tableBody.appendChild(tableBodyRow);
    });
  
    table.appendChild(tableHead);
    table.appendChild(tableBody);
  
    // Apply CSS class to style the program table
    table.classList.add('program-table');
  
    // Create a heading for the program table
    const heading = document.createElement('h2');
    heading.textContent = programName;

    const getContainer = document.createElement('div');
      // Check if programName is "HEAR MY CRY, O LORD"
  // if (programName === "HEAR MY CRY, O LORD") {
  //   // Create a div for displaying the total count
  //   const totalCountDiv = document.createElement('div');
  //   totalCountDiv.textContent = `Total registrations for ${programName}: ${programData.length}`;

  //   // Append the total count div to the container
  //   getContainer.appendChild(totalCountDiv);

  //      // Log the total count to the console
  //      console.log(`Total registrations for ${programName}: ${programData.length}`);
  // }

  
    // Create a getContainer div for the table and heading
    getContainer.appendChild(heading);
    getContainer.appendChild(table);
    getContainer.appendChild(totalCountDiv);
    return getContainer;
  }
  
  // Helper function to format the date
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  
  