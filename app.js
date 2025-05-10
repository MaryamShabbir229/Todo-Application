var firebaseConfig = {
   apiKey: "AIzaSyAD3TMphA5tU6wpk434YnbYkt_GxPeSLd4",
  authDomain: "todo-app-c57c1.firebaseapp.com",
  databaseURL: "https://todo-app-c57c1-default-rtdb.firebaseio.com",
  projectId: "todo-app-c57c1",
  storageBucket: "todo-app-c57c1.firebasestorage.app",
  messagingSenderId: "128748227953",
  appId: "1:128748227953:web:7e6e64090d2fec544f7ad0"
};

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);



firebase
  .database()
  .ref("todos")
  .on("child_added", function (data) {
    console.log(data.val());
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


            var liText = document.createTextNode(data.val().todo_value)
                                               
            liElement.appendChild(liText)
            ulElement.appendChild(liElement)
            liElement.appendChild(dltBtn)
            liElement.appendChild(editBtn)
            inputField.value = "";
       
  
    })



function addTodo(){
    try{
        var inputField = document.getElementById("input");
         var id = firebase.database().ref("todos").push().key;

         var obj = {
            todo_value : inputField.value,
            id : id,
         }

         firebase.database().ref(`todos/${id}`).set(obj)

        inputField.value = "";

   

    }      
    catch(error){
        console.log(error)
    }

}


function deleteALLtodo(){
    var ulElement = document.getElementById("items");
    ulElement.innerHTML = "";

     firebase.database().ref("todos").remove();
}

function deleteSingleTodo(e){
    e.parentNode.remove();

    firebase.database().ref(`todos/${e.id}`).remove();
}

function  editTodo(e){
    var userInput = prompt("Enter a correct value");
    e.parentNode.firstChild.nodeValue = userInput;

      var obj = {
    todo_value: userInput,
    id: e.id,
  };

  firebase.database().ref(`todos/${e.id}`).set(obj);
}