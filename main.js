function factory(add, deleted, update, completed) {
  return {
    add: add,
    deleted: deleted,
    update: update,
    completed: completed,
  };
}

$(document).ready(function () {
  var button = $("#button");

  var todo = factory(
    function () {
      var inputt = $("input").val();

      var newdiv = $("<div></div>").addClass("task new");

      var checkbox = $("<input type='checkbox' />").addClass("checkbox");

      var littlediv = $("<div></div>").addClass("content");

      var string = $("<p></p>").addClass("text").text(inputt);

      littlediv.append(string);
      newdiv.append(checkbox).append(littlediv);

      var actions = $("<div></div>").addClass("actions");

      var edit = $("<button></button>").addClass("edit").text("Edit");
      var delet = $("<button></button>").addClass("delete").text("Delete");

      actions.append(edit).append(delet);
      newdiv.append(actions);

      $("body").append(newdiv);
      $("input").val("");
      todo.update(edit[0], string[0]);
      todo.deleted(delet[0], newdiv[0]);
      todo.completed(checkbox[0], string[0]);
    },

    function (delet, taskDiv) {
      delet.addEventListener("click", function () {
        $(taskDiv).remove();
      });
    },

    function (edit, string) {
      edit.addEventListener("click", function () {
        if (edit.textContent === "Edit") {
          edit.textContent = "Save";
          string.contentEditable = "true";
          string.focus();
        } else {
          edit.textContent = "Edit";
          string.contentEditable = "false";
        }
      });
    },

    function (checkbox, string) {
      checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
          string.style.textDecoration = "line-through";
        } else {
          string.style.textDecoration = "none";
        }
      });
    }
  );

  button.click(todo.add);
});
