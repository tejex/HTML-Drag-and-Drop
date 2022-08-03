const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');



//NEW ELEMENT CODE
let draggedItem = null;
const BtnAdd = document.querySelector(".btn-add");
BtnAdd.addEventListener("click", addNew);

function addNew() {
  let newDiv = document.createElement("div");

  newDiv.classList.add('draggable');
  newDiv.setAttribute('draggable', true);
  newDiv.style.display = "block";
  document.body.firstElementChild.lastElementChild.firstElementChild.appendChild(newDiv);

  newDiv.onclick = addEventListener('dragstart', function() {
    setTimeout(function() {
      newDiv.style.display = 'block';
    }, 0)
  })
  newDiv.onclick = addEventListener('dragend', function() {
    setTimeout(function() {
      newDiv.style.display = 'block';
      //newDiv = null;
    }, 0)
  })


for (let j = 0; j < lists.length; j++) {
  const list = lists[j];
  list.addEventListener('dragover', function(e) {
    e.preventDefault();
    console.log("over");
  });
  list.addEventListener('dragenter', function(e) {
    e.preventDefault();
    this.style.backgroundColor = 'rgba(0,0,0,0.2)';
    console.log("enter");
  });
  list.addEventListener('dragleave', function(e) {
    this.style.backgroundColor = '#96ceb4';
    console.log("leave");
  })
  list.addEventListener('drop', function(e) {
    this.append(newDiv);
    this.style.backgroundColor = '#96ceb4';
    console.log("drop");
  });
}
}


//DRAG FUNCTION CODE
function play() {
  for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i];
    item.addEventListener('dragstart', function() {
      draggedItem = item;
      setTimeout(function() {
        item.style.display = 'none';
      }, 0)
    })
    item.addEventListener('dragend', function() {
      setTimeout(function() {
        draggedItem.style.display = 'block';
        draggedItem = null;
      }, 0)
    })
    for (let j = 0; j < lists.length; j++) {
      const list = lists[j];

      list.addEventListener('dragover', function(e) {
        e.preventDefault();
      });
      list.addEventListener('dragenter', function(e) {
        e.preventDefault();
        this.style.backgroundColor = 'rgba(0,0,0,0.2)';
      });
      list.addEventListener('dragleave', function(e) {
        this.style.backgroundColor = '#96ceb4';
      })
      list.addEventListener('drop', function(e) {
        this.append(draggedItem);
        this.style.backgroundColor = '#96ceb4';
      });
    }
  }
}
play();
// play();


// document.getElementsByClassName('list-item').addEventListener("click",play,false);












<div className="todos">
 {
   todos.map(todo =>
    <div
     key={todo.taskID}
     draggable
     onDrag={(event) => this.onDrag(event, todo)}
    >
     {todo.task}
    </div>)
