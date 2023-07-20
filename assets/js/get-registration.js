
let basedUrl = 'https://covenant-vercel-api.vercel.app/auth'


// document.addEventListener('DOMContentLoaded', function() {
//     // Fetch the data from the API server
//     fetch(`${basedUrl}/reg-data`)
//       .then(response => response.json())
//       .then(data => {
//         // Sort the data by the "createdDate" field in ascending order
//         data.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));
  
//         // Group the data by "programName"
//         const groupedData = groupByProgramName(data);
  
//         // Render the tables for each program
//         const container = document.querySelector('.container');
  
//         for (const programName in groupedData) {
//           const programData = groupedData[programName];
//           const programTable = createProgramTable(programName, programData);
//           container.appendChild(programTable);
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   });
  
//   // Helper function to group data by "programName"
//   function groupByProgramName(data) {
//     return data.reduce((result, entry) => {
//       if (!result[entry.programName]) {
//         result[entry.programName] = [];
//       }
//       result[entry.programName].push(entry);
//       return result;
//     }, {});
//   }
  
//   // Helper function to create a table for a specific program
//   function createProgramTable(programName, programData) {
//     const table = document.createElement('table');
//     const tableHead = document.createElement('thead');
//     const tableBody = document.createElement('tbody');
  
//     const tableHeadRow = document.createElement('tr');
//     tableHeadRow.innerHTML = `
//       <th>Registration ID</th>
//       <th>Name</th>
//       <th>Email</th>
//       <th>Created Date</th>
//     `;
//     tableHead.appendChild(tableHeadRow);
  
//     programData.forEach(entry => {
//       const tableBodyRow = document.createElement('tr');
//       tableBodyRow.innerHTML = `
//         <td>${entry.registrationId}</td>
//         <td>${entry.name}</td>
//         <td>${entry.email}</td>
//         <td>${formatDate(entry.createdDate)}</td>
//       `;
//       tableBody.appendChild(tableBodyRow);
//     });
  
//     table.appendChild(tableHead);
//     table.appendChild(tableBody);
  
//     // Apply CSS class to style the program table
//     table.classList.add('program-table');
  
//     // Create a heading for the program table
//     const heading = document.createElement('h2');
//     heading.textContent = programName;
  
//     // Create a container div for the table and heading
//     const container = document.createElement('div');
//     container.appendChild(heading);
//     container.appendChild(table);
  
//     return container;
//   }
  
//   // Helper function to format the date
//   function formatDate(dateString) {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   }
  

document.addEventListener('DOMContentLoaded', function() {
  // Fetch the data from the API server
  fetch(`${basedUrl}/reg-data`)
    .then(response => response.json())
    .then(data => {
      // Sort the data by the "createdDate" field in ascending order
      data.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));

      // Group the data by "programName"
      const groupedData = groupByProgramName(data);

      // Render the tables for each program
      const container = document.querySelector('.container');

      for (const programName in groupedData) {
        const programData = groupedData[programName];
        const programTable = createProgramTable(programName, programData);
        container.appendChild(programTable);
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

  // Create a container div for the table and heading
  const container = document.createElement('div');
  container.appendChild(heading);
  container.appendChild(table);

  return container;
}

// Helper function to format the date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
