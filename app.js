// Copy Functionality
document.addEventListener("click", function (event) {

    if (event.target.nodeName != "P") { // Ensure only git text are copied
        return;
    }

    else { // Copy to event target text to clipboard
        navigator.clipboard.writeText(event.target.innerText); 
    }
    
});