

let a = 0;
 


function addTask() {
    let task = document.getElementById("assignment").value;
    const addButton = document.getElementById("add-button");
    const pendingTask = document.getElementById('pending-tasks');
    let newTask = document.createElement('div'); 
    let newInput = document.createElement('input');
    let removeButton = document.createElement('button');
    let completedTask = document.getElementById("completed-tasks")
    newTask.id = 'div' + a; 

    if(task == ""){
        alert('You did not enter a task in the input field. Please enter a task.')
    }else{
        pendingTask.append(newTask);
        newTask.append(newInput);
        newTask.append(task);
        newTask.append(removeButton);
        newTask.className = "tasks";
        newInput.type = 'checkbox';
        newInput.className = 'tasks-input';
        removeButton.innerText = 'Remove'; 
        removeButton.className = 'tasks-button'; 
    }

    removeButton.addEventListener('click', event => {
        newTask.remove();
        // document.getElementById(event.target.id).remove();
    }) 

    newInput.addEventListener('change', stage => {
        newTask.id = 'div' + a;

        completedTask.append(newTask);
        newTask.append(newInput);
        // newTask.append(task);
        newTask.append(removeButton); 

        newTask.className = "tasks";
        newInput.type = 'checkbox';
        newInput.className = 'tasks-input';
        removeButton.innerText = 'Remove'; 
        removeButton.className = 'tasks-button'; 
        if(newInput.checked){
            return
        }else{
            pendingTask.append(newTask);
            newTask.append(newInput);
            // newTask.append(task);
            newTask.append(removeButton);
            newTask.className = "tasks";
            newInput.type = 'checkbox';
            newInput.className = 'tasks-input';
            removeButton.innerText = 'Remove'; 
            removeButton.className = 'tasks-button'; 
        };
    })
    
    document.getElementById("assignment").value = "";
    a +=1;
  
}


