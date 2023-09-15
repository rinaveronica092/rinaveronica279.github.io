const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

//add task when enter is clicked
inputBox.addEventListener("keydown",function(e){
    if(e.code==="Enter"){addTask(e);}
});
function addTask()
{
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        //create html element :li
        let li = document.createElement("li");
        //give text to li, li contains the task that user entered
        li.innerHTML= inputBox.value;
        //append this list element li to listcontainer
        //li displayed under list container
        listContainer.appendChild(li);

        //add cross icon(within the span tag0)
        let span= document.createElement("span");
        span.innerHTML="\u00d7"; //cross icon code
        //display span
        li.appendChild(span);
    }
    inputBox.value="";
    //after adding any task, save data called and data updated
    saveData();
}   

//CLICK FUNC    
listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); //clicking on circle, checked or unchecked
        saveData();
    }
    else if(e.target.tagName === "SPAN") //clicking on cross
    {
        e.target.parentElement.remove();//removes li
        saveData();
    }
}, false);

//to keep tasks onscreen even after refreshing browser
function saveData()
{
    //stored
    localStorage.setItem("data",listContainer.innerHTML);
    //can be displayed using localStorage.getItem(data)
}
//display data whenever we open the website
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
