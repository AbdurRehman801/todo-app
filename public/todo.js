function addtask() {
    var input = document.getElementById('input_field').value;
    if (input == "") {
      window.alert("You must enter a value in the New Task field.");
    } else {
      var noteList = document.getElementById('todo_list');
      noteList.innerHTML += "<li>" + input + "<button id='delete'  onclick='removeTask()' >delete</button></li>";
      
  
    }
  }
  
  function removeTask() {
    event.currentTarget.parentElement.remove();
    
  }
  
  
