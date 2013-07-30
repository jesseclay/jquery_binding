$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    $(document).on('click', '.add', addTodo);

    $(document).on('click', '.delete', removeTodo);

    $(document).on('click', '.complete', completeTodo);
  }

  function addTodo(text) {
    var inputBox = $('.toolbox input')
    var text = inputBox.val();
    todo = buildTodo(text);
    $('.todo_list').append(todo);
    inputBox.val('');
  }

  function removeTodo() {
    // $(this).parent().parent().parent().remove(); #refactored below
    $(this).parentsUntil('.todo_list').remove();
  }

  function completeTodo() {
    var title = $(this).parent().parent().siblings()[0]
    $(title).css('text-decoration', 'line-through');
    $(this).parent().remove();
  }

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }

  bindEvents();
});
