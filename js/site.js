//Get the string value from the page
function getValue(){
    
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);

}

// Reverse the string array
// Logic function
function reverseString(userString){

    let revString = [];
    
    //reverse a string using a for loop
    for (let index = userString.length -1 ; index >= 0; index--) {
        revString += userString[index]; 
    }

    return revString;

}
//Display the reverse string array
// View Function
function displayString(revString){
        
    // write to the page 
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    // turn on the alert box
    document.getElementById("alert").classList.remove("invisible");

}