

let programName = ''

// load program name
loadProgramType() ;


function storeData(data) {
    // const data = "Hello, World! now";
     localStorage.setItem("myData", data);
  }

function loadProgramType() {
    if (localStorage.getItem("myData")) {
        programName =  localStorage.getItem("myData")
        
    }
  

   
    // alert(programName)
  
    // if (localStorage.getItem(programName) !=null) {
    //     programName =  localStorage.getItem(programName)   
    // }

    const dataDiv = document.getElementById("title");
    dataDiv.textContent = programName + " Registration";

  


}

function myFunction() {
    alert("Button clicked!");
  }