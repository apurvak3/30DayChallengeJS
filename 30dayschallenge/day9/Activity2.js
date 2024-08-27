//Creating and appending element
/**
 * task3:create a new div element with some text content and append it to the body
 * task4:create a new li element and add it to an existing ul list.
 */
function addDiv() {
    // Create a new div element
    var newDiv = document.createElement("div");

    // Add text content to the new div
    newDiv.textContent = "This is a new div element.";

    // Append the new div to the body
    document.body.appendChild(newDiv);
}
var newListItem = document.createElement("li");
        
// Set the content of the new li element
newListItem.textContent = "Item 3";

// Append the new li element to the existing ul list
var ulList = document.getElementById("myList");
ulList.appendChild(newListItem);