/*js Add,Edit And Delete Rows From Table
 Dynamically Using JavaScript*/
//总结：js 是个好东西
function edit_row(no) {
  //目标：想让 td 变成 input

  let number = document.getElementById("number_row"+no);
  let type = document.getElementById("type_row"+no);
  let state = document.getElementById("state_row"+no);

  number.innerHTML = "<input type='text' id='num-input"+no+"' value='"+number.innerHTML+"'/>";
  type.innerHTML = "<input type='text' id='type-input"+no+"' value='"+type.innerHTML+"'/>";
  state.innerHTML = "<input type='text' id='state-input"+no+"' value='"+state.innerHTML+"'/>";
  document.getElementById("edit_button"+no).style.display = "none";

}

function save_row(no)
{
  //目标 保存input 的值到 原来的td  标签
  //注意 根据id 来“认”
  let numInput = document.getElementById("num-input"+no).value;
  let typeInput = document.getElementById("type-input"+no).value;
  let stateInput = document.getElementById("state-input"+no).value;
  document.getElementById("number_row"+no).innerHTML = numInput;
  document.getElementById("type_row"+no).innerHTML = typeInput;
  document.getElementById("state_row"+no).innerHTML = stateInput;
}

function delete_row(no)
{
  document.getElementById("data_table").deleteRow(no);
}


function add_row() {
  let new_num = document.getElementById("new_number").value;
  alert(new_num);
  let new_type = document.getElementById("new_type").value;
  let new_state = document.getElementById("new_state").value;
  //"曲线救国"：把新添的一行插入倒数第二行

  //避免两次获取
  let table = document.getElementById("data_table");
  let totalLength = table.rows.length-1;
  //插入
  //注意：   "+totalLength+" 中 totalLength应该是一个直接给的数值，此处不会计算表达式的值，只有直接给的数值它才知道是 Number 类数值
  let new_row  = table.insertRow(totalLength).outerHTML="<tr id='row"+totalLength+"'><td id='number_row"+totalLength+"'>"+new_num+"</td><td id='type_row"+totalLength+"'>"+new_type+"</td><td id='state_row"+totalLength+"'>"+new_state+"</td><td><input type='button' id='edit_button"+totalLength+"' value='Edit' class='edit' onclick='edit_row("+totalLength+")'> <input type='button' id='save_button"+totalLength+"' value='Save' class='save' onclick='save_row("+totalLength+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+totalLength+")'></td></tr>";

  document.getElementById("new_number").value = "";
  document.getElementById("new_type").value = "";
  document.getElementById("new_state").value = "";
}