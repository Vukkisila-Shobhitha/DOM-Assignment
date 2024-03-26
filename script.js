function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
  
    console.log( firstName); 
    console.log( middleName );
        console.log( lastName );
            console.log( email );
                console.log( address);
  
    return false; // Prevent default form submission
  }
