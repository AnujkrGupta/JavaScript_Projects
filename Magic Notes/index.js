console.log("Magic Notes")
ShowNotes();

// if user add the note , add to local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";

    //  console.log(notesObj)
    ShowNotes();
})

// function to show elements from local storage
function ShowNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        html += `<div class=" noteCard card my-2 mx-2 " style="width: 21rem;">
                <div class="card-body">
                 <h5 class="card-title">Note + ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <a id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</a>
        </div>
    </div>
        `

    });

let notesElm = document.getElementById("notes");
if (notesElm.length != 0) {
    notesElm.innerHTML = html;
} else {
    notesElm.innerHTML = "Nothing to show. Please add a note."
}
};

// function for deleting a note
function deleteNode(index){
    // console.log("I am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index , 1 );
    localStorage.setItem("notes", JSON.stringify(notesObj));
    ShowNotes();

}
//function for search functionality
let search = document.getElementById("searchTxt")
search.addEventListener("input",function(){
    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })

})
    
