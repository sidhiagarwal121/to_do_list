let username=document.getElementById('username');
let addUserbtn=document.getElementById('addUser');
let userArray=[];
let objstr=localStorage.getItem('users');
let rec_display=document.getElementById('records')
let edit_id=null;
if(objstr!=null)
{
    userArray=JSON.parse(objstr);
}
addUserbtn.onclick=()=>{
    let userName=username.value;
    if(edit_id!=null)
    {
        userArray.splice(edit_id,1,{"name":userName});
        edit_id=null
    }
    else{
        userArray.push({"name":userName});
    }
    SaveInfo(userArray)
    username.value=" ";
    display(userArray)
    addUserbtn.innerText="add user"
}
function SaveInfo(userArray)
{
    let str=JSON.stringify(userArray)
    localStorage.setItem("users",str)
}
function display(userArray)
{
      let statement=""
        userArray.forEach((users,i) => {
        statement+=`<tr>
        <th scope="row">${i+1}</th>
        <td>${users.name}</td>
        <td><img src="./edit.png" alt="" height="35px" width="35px" style="cursor: pointer;" onclick="editInfo(${i})"> <img src="./trash.jpg" alt="" height="40px" width="40px" style="cursor: pointer; margin-left: 18px;" onclick='DeleteInfo(${i})'></td>
      </tr>`
    });
    rec_display.innerHTML=statement;
    

}
function DeleteInfo(id)
{
    userArray.splice(id,1);
    SaveInfo(userArray);
    display(userArray)
}
function editInfo(id)
{
    edit_id=id;
    username.value=userArray[id].name;
    addUserbtn.innerText="save changes"
}