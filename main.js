function factory(add, deleted, update) {
  return {
    add: add,
    deleted: deleted,
    update: update,
  };
}

var button = $("#button");

button.click(function () {
  var inputt = $("input").val();
  console.log(inputt);
  $("body").append("<p>" + inputt + "</p>");
});
