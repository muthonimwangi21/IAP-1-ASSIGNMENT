  // Query for elements and store them in variables
  const submitButton = document.getElementById('submitButton');
  const newTaskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Disable submit button by default
  submitButton.disabled = true;

  // Listen for input on the new task input field
  newTaskInput.addEventListener('input', function() {
    // Enable submit button if there's text in the input field, disable otherwise
    submitButton.disabled = !this.value.trim();
  });

  // Listen for submission of the form
  document.getElementById('taskForm').addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Get the task the user just submitted
    const taskText = newTaskInput.value.trim();
    
    // Create a list item for the new task
    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = taskText;
    
    // Add new task item to the unordered list
    taskList.appendChild(newTaskItem);
    
    // Clear input field
    newTaskInput.value = '';
    
    // Disable submit button after submission
    submitButton.disabled = true;
  });

  // Prevent default submission of the form
  document.getElementById('taskForm').addEventListener('submit', function() {
    return false;
  });