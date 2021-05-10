let todos = [
  {
    id: 1,
    task: "Do your homework",
    isDone: false,
  },
  {
    id: 2,
    task: "Clean your room",
    isDone: true,
  },
  {
    id: 3,
    task: "Sleep",
    isDone: false,
  },
];

// Events
$("#frmTodo").submit(function (event) {
  event.preventDefault();
  let todo = {
    id: 0,
    task: $("#inputTask").val().trim(),
    isDone: false,
  };
  todos.push(todo);
  this.reset();
  listTodos();
});

// Functions

function listTodos() {
    $("ul#todos").html("");
  $.each(todos, function (index, todo) {
    let li = $("<li/>");
    let chkbox = $("<input/>").attr("type", "checkbox");
    if (todo.isDone) {
      chkbox.prop("checked", "true");
      li.addClass("done");
    } else {
      li.addClass("undone");
    }
    li.append(chkbox);
    li.append(" " + todo.task);
    $("ul#todos").append(li);
  });
}
listTodos();
