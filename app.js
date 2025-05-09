var firebaseConfig = {
    apiKey: "AIzaSyAD3TMphA5tU6wpk434YnbYkt_GxPeSLd4",
    authDomain: "todo-app-c57c1.firebaseapp.com",
    projectId: "todo-app-c57c1",
    storageBucket: "todo-app-c57c1.firebasestorage.app",
    messagingSenderId: "128748227953",
    appId: "1:128748227953:web:7e6e64090d2fec544f7ad0"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);








function addtodo(){
    try{
        var inputField = document.getElementById("input");
        if(inputField.value){
            var ulElement = document.getElementById("items")   
            var liElement = document.createElement("li");
        

            // Create delete button by DOM;

            var dltBtn = document.createElement("button");
            var dltText = document.createTextNode("Delete");
            dltBtn.setAttribute("onclick" , "deleteSingleTodo(this)")
            dltBtn.setAttribute("class" , "dltBtn")
            dltBtn.appendChild(dltText);
             

            // Create Edit Button by DOM;

            var editBtn = document.createElement("button");
            var editText = document.createTextNode("Edit");
            editBtn.setAttribute("onclick" , "editTodo(this)")
            editBtn.setAttribute("class" , "editBtn")
            editBtn.appendChild(editText)


            var liText = document.createTextNode(inputField.value)
                                               
            liElement.appendChild(liText)
            ulElement.appendChild(liElement)
            liElement.appendChild(dltBtn)
            liElement.appendChild(editBtn)
            inputField.value = "";
        } 
        else{
            alert("required input field")
        }

    } catch(error){
        console.log(error)
    }
}


function deleteALLtodo(){
    var ulElement = document.getElementById("items");
    ulElement.innerHTML = ""
}

function deleteSingleTodo(e){
    e.parentNode.remove();
}

function  editTodo(e){
    var userInput = prompt("Enter a correct value");
    e.parentNode.firstChild.nodeValue = userInput
}