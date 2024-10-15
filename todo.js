
let todoList =[{
    item: '',
    dueDate : '',
    dueTime: '',
}];
displayToDo()
function generatingTodo() {
let inputToDo= document.querySelector('.todo1') ;
let inputTime= document.querySelector('.time1') ;
let inputDate= document.querySelector('.date1');
let inputToDOValue=inputToDo.value
let inputTimeValue=inputTime.value
let inputDateValue=inputDate.value
todoList.push({item : inputToDOValue , dueDate : inputDateValue , dueTime : inputTimeValue});
//console.log(todoList)
inputToDo.value='';
inputTime.value='';
inputDate.value='';

}
displayToDo();
function displayToDo() {
        let display = document.querySelector('.todoContainer')
        let divHtml='';
        for (let i=1 ; i<todoList.length;i++){
           
            let{item ,dueDate, dueTime } = todoList[i];

            divHtml += ` 
            <span>${item}</span> 
            <span>${dueDate}</span> 
            <span>${dueTime}</span> 

            <button onclick = "todoList.splice(${i} , 1 ) ,displayToDo()" class="delete">Delete </button>`
            
        }
        display.innerHTML=divHtml
}
