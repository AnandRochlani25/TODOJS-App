document.querySelector("#createList").addEventListener("click",createList);
document.querySelector("#closeList").addEventListener("click",hideListForm);
document.querySelector("#addList").addEventListener("click",createCard);

let cards=[];
function createList(){
   
  document.querySelector(".modal").style.display = "block";
    console.log("List Created");
}

function hideListForm(){
    document.querySelector(".modal").style.display = "none";
    console.log("Hide List Form Executed");
}
//<i id="createList" class="fa-solid fa-plus"></i>
//data-toggle="modal" data-target="#form"
function createCard(){
    console.log("CARRRRRRRRD");
    document.querySelector(".modal").style.display = "none";
    let userInput=document.querySelector("#listName").value;
    console.log("Card is being created");
    let card=document.createElement("div");
    card.id=cards.length;
    card.className="box";
    let header=document.createElement("header");
    let title=document.createElement("h4");
    header.appendChild(title);
   
     title.innerText=userInput;
    let item=document.createElement("ol");
    
    let plusIcon=document.createElement("i");
    plusIcon.className="fa-solid fa-plus plus_icon";
    plusIcon.id="AddItem"+cards.length;
    plusIcon.setAttribute('data-target', "#taskForm");
    plusIcon.setAttribute('data-toggle', "modal");
    plusIcon.addEventListener("click",()=>createSubTask(item));
    let del=document.createElement("i");
    del.className="fa-solid fa-trash";
    del.id=cards.length;

    del.addEventListener("click",()=>deleteCard(card));
    let footer=document.createElement("footer");
    //footer.setAttribute("class","footer");
    footer.append(del,plusIcon);
    card.append(header,item,footer);
   
        
    cards.push(card); 
    display(cards);
    header.addEventListener("click",()=>{
        document.querySelector("#popup").innerHTML="";
        document.querySelector('#modal1').style.display="block";
        document.querySelector('#popup').appendChild(card);
        
    })
}
function createSubTask(item){
    console.log("Subtask");
    document.querySelector("#taskForm").style.display="block";
    document.querySelector("#addTask").addEventListener("click",function eventHandler() {
        ///this will execute only once
        console.log("Add Item");
        addItemToCard(item);
        this.removeEventListener('click', eventHandler)}, {once : true});
   console.log(document.querySelector("#addTask"));
}
function addItemToCard(item){
   
    console.log("Item Added");
    //item.innerHTML="";
    document.querySelector("#taskForm").style.display="none";
    let subTask=document.createElement("li");
    subTask.innerText=document.querySelector("#taskName").value;
    console.log(item);
    item.appendChild(subTask);

}
function deleteCard(item){
    document.querySelector("#popup").innerHTML="";
    document.querySelector("#modal1").style.display="none";
    cards=cards.filter(card=>card!==item);
    display(cards);
}

function display(cards){
    console.log(cards);
    let lists=document.querySelector("#lists");
    lists.innerHTML="";
    console.log("display");
    for(let i=0;i<cards.length;i++){
        lists.appendChild(cards[i]);
    }
    console.log(lists);
}

document.querySelector("#back").addEventListener("click",()=>{
    document.querySelector("#modal1").style.display="none";
    display(cards);
})