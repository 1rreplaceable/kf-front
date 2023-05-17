/**
 * 
 */
//사용자가 입력한 내용
const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');

// 이벤트 처리
document.addEventListener("DomContentLoaded", getLocal);
addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", manageTodo);

function addTodo(e) {
	e.preventDefault(); // 기본 동작 취소

	// 입력값을 가져와 새로운 소스를 추가한다.
	const newDiv = document.createElement('div');
	newDiv.classList.add('todo');

	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-content');
	newDiv.appendChild(newTodo); // 맨 마지막에 새로운 태그르 추가함

	// 로컬스토리지에 추가한다.
	saveToLocal(todoInput.value);

	// 완료
	const completeButton = document.createElement('button');
	completeButton.innerText = "완료";
	completeButton.classList.add('complete-button');
	newDiv.appendChild(completeButton);

	// 삭제
	const deleteButton = document.createElement('button');
	deleteButton.innerText = "삭제";
	deleteButton.classList.add('delete-button');
	newDiv.appendChild(deleteButton);


	// ul에 자식으로 추가
	todoList.appendChild(newDiv);

	todoInput.value = "";

}

function saveToLocal(todo) {
	let todos;

	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}

	// 위의 데이터를 하나의 배열에 저장 그래서 값을 가져와서 추가하는 항목은
	// 실제 변경된 배열에 추가한다.
	todos.push(todo);

	localStorage.setItem('todos', JSON.stringify(todos));
}
function getLocal() {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo) {  // todos 요소마다 반복
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todo; // 로컬 스토리지의 값 표시
    newTodo.classList.add('todo-content');
    newDiv.appendChild(newTodo);  

    const completeButton = document.createElement('button');
    completeButton.innerText = '완료';
    completeButton.classList.add('complete-button'); 
    newDiv.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '삭제';
    deleteButton.classList.add('delete-button');
    newDiv.appendChild(deleteButton);

    todoList.appendChild(newDiv);   // ul 요소의 자식 요소로 추가

    todoInput.value = "";   // 입력 창 초기화
  });
}

function manageTodo(e) {
  const whichButton = e.target.classList[0];
    // 클릭한 부분의 class명 가져오기 
  if(whichButton === 'complete-button') {
    const todo = e.target.parentElement;
    todo.children[0].classList.toggle('completed');
      // 내용 부분에 .completed 클래스 토글
  } else if(whichButton === 'delete-button') {
    const todo = e.target.parentElement;
    removeLocal(todo);
    todo.remove();
  }
}
function removeLocal(todo) {
	let todos;

	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	const index = todos.indexOf(todo.children[0].innerText);

	todos.splice(index, 1);

	localStorage.setItem('todos', JSON.stringify(todos));
}