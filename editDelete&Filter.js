var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem)); 

  // Create del button element
  var deleteBtn = document.createElement('button');
   //Create edit button element
   var editBtn = document.createElement('button');
   editBtn.style.backgroundColor='rgb(74, 93, 80)"'

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Add classes to edit button
  editBtn.className="btn -btn-sm float-right edit"

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  //Append text node
  editBtn.appendChild(document.createTextNode('edit'));

  // Append button to li
  li.appendChild(deleteBtn);
  //Append button to li
  li.appendChild(editBtn)

  // Append li to list
  itemList.appendChild(li);

// adding desription to items:::

var desription= document.getElementById('description').value;
li.appendChild(document.createTextNode(desription));


}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  
  // Get list
  var items = itemList.getElementsByTagName('li');
  console.log(items)
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    console.log(itemName + "first")
     var des = item.lastChild.textContent;
     console.log(des + "second")
    
    if(itemName.toLowerCase().indexOf(text)!=-1  || des.toLowerCase().indexOf(text)!= -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
