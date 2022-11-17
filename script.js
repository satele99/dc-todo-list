

let a = 0;
 


function addTask() {
    let task = document.getElementById("assignment").value;
    const addButton = document.getElementById("add-button");
    const pendingTask = document.getElementById('pending-tasks');
    let newTask = document.createElement('div'); 
    let newInput = document.createElement('input');
    let removeButton = document.createElement('button');
    newTask.id = 'div' + a;
    
    pendingTask.append(newTask);
    newTask.append(newInput);
    newTask.append(task);
    newTask.append(removeButton); 

    newTask.className = "tasks";
    newInput.type = 'checkbox';
    newInput.className = 'tasks-input';
    removeButton.innerText = 'Remove'; 
    removeButton.className = 'tasks-button'; 

    removeButton.id = a;

    removeButton.addEventListener('click', event => {
        document.getElementById('div'+event.target.id).remove();
        // document.getElementById(event.target.id).remove();
    }) 

    newInput.addEventListener('click', stage => {
        let completedTask = document.getElementById("completed-tasks")
        let task = document.getElementById("assignment").value;
        const addButton = document.getElementById("add-button");
        let newTask = document.createElement('div'); 
        let newInput = document.createElement('input');
        let removeButton = document.createElement('button');
        newTask.id = 'div' + a;
        
        completedTask.append(newTask);
        newTask.append(newInput);
        newTask.append(task);
        newTask.append(removeButton); 

        newTask.className = "tasks";
        newInput.type = 'checkbox';
        newInput.className = 'tasks-input';
        removeButton.innerText = 'Remove'; 
        removeButton.className = 'tasks-button';

    })


    a +=1;
    

    
    

}


