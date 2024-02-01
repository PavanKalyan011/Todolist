var tasks =[];
function addTask(){
    var title=document.getElementById("titleInput").value;
    var description=document.getElementById("descriptionInput").value;
    var date=document.getElementById("dateInput").value;
    var tasklist=document.getElementById("taskList");
}
function daysOfWeek(){
    var Sun=document.getElementById("1");
    var Mon=document.getElementById("2");
    var Tue=document.getElementById("3");
    var Wed=document.getElementById("4");
    var Thu=document.getElementById("5");
    var Fri=document.getElementById("6");
    var Sat=document.getElementById("7");
    return display();


}
var task={
    title:titleInput,
    description:descriptionInput,
    date:dateInput
}
tasks.push(task);

function display()
    {
    tasks.forEach(function(task){
       title=document.createElement("h3");
      title.textContent=task.title;
      description=document.createElement('p');
      description.textContent=task.description;
})
}
function deleteTask()
{
 var title="";
 var description="";
}