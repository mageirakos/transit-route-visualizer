let button = document.querySelector('button');
let theList = document.querySelector(".the-list");
let theInput = document.querySelector('input')

theInput.setAttribute('placeholder', 'Νέα εργασία');

button.addEventListener("click", function() {
    console.log("Το κουμπί πατήθηκε");
    //Create elements
    const newLi = document.createElement("LI");
    const newSpan = document.createElement("SPAN");
    const newButton = document.createElement("BUTTON");
    newButton.textContent = "Αφαίρεση";
    newSpan.textContent = theInput.value;
    //Add content to newLi
    newLi.appendChild(newSpan);
    newLi.appendChild(newButton);
    //atack li to theList
    theList.appendChild(newLi);
    //remove content in input
    theInput.value = '';
    //craete button function
    newButton.addEventListener("click", function() {
        this.parentElement.remove()
    });
    console.log(theList.length);
});

// theList.addEventListener("click", function(event){
//     if(event.target.nodeName !== 'LI'){
//         return;
//     }
//     else{
//         if (this.style.textDecoration == ""){
//             this.style.textDecoration = "line-through"; 
//         }
//         else{
//             this.style.textDecoration = ""; 
//         }
//     }  
// });