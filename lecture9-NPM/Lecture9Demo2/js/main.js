/*
    Todolist

    We're going to make a todolist that counts how many todos we've completed.
    We'll do this using objects in the todos array shown below.

    HTML FOR The todo

    <li class="list-group-item">
        <input class="form-check-input todo-status"
            data-todo-id="INDEX HERE"
            type="checkbox"
            value="todo-INDEX HERE"
            COMPLETE HERE>
        DESCRIPTION HERE
    </li>

*/

let todos = [
    {
        description: 'Todo 1',
        complete: false,

    },
    {
        description: 'Todo 2',
        complete: true,
    }
];

//function calculateCount

const calculateCount=()=>{

    let numComplete=todos.reduce((accumulator,element)=>{
        if (element.complete)
          return  accumulator+1;
        else
          return accumulator
    },0)

   let completedTaskPercent = `${(numComplete/todos.length)*100}%`;
  document.querySelector("#todo-complete-count").innerHTML=completedTaskPercent;
}

const renderTodos=()=>{
    calculateCount();
    let str="";

    todos.forEach((element,index)=>{
        let checkText="";

        //We verify if the value of complete is true and set the
        //checkText to checked
        if (element.complete)
          checkText="checked";

         str+=`<li class="list-group-item">
         <input class="form-check-input todo-status"
             data-todo-id="${index}"
             type="checkbox"
             value="todo-${index}"
             ${checkText}>
             ${element.description}
     </li>`;

    })

    document.querySelector(".todo-list").innerHTML=str;

}

renderTodos();
//Event Listener for the submit event
document.querySelector("#add-todo-form").addEventListener("submit",(event)=>{

    event.preventDefault();

    let newObject= {description: `${event.target.elements["todo-description"].value}`,
                    complete: false}
    todos.push(newObject);
    event.target.elements["todo-description"].value="";
    renderTodos();


})

let parentElement=document.querySelector(".todo-list");
parentElement.addEventListener("change",(event)=>{
        if (event.target.checked)
            todos[event.target.getAttribute("data-todo-id")].complete=true;
        else
            todos[event.target.getAttribute("data-todo-id")].complete=false;
        
            calculateCount();
        
})
    