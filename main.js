var counter1=0
function counter(){
  counter1++
  return counter1
}
document.addEventListener('DOMContentLoaded', function() {
    var tasks = [];
    // Add a new task to the list
    function addtask(task) {
      var taskl = document.getElementById('a');
      var taskI = document.createElement('li');
      taskI.classList.add('task');
      var taskTitle = document.createElement('h3');
      taskTitle.innerText = task.title;
      var taskcont = document.createElement('p');
      taskcont.innerText = task.content;
      taskI.appendChild(taskTitle);
      taskI.appendChild(taskcont);
      taskl.appendChild(taskI);
      alert("task added "+counter())
    }
  
    // submission
    var form = document.querySelector('form');
    form.addEventListener('submit', function(evnt) {
      evnt.preventDefault();
  
      // values of the title and content 
      var title = document.getElementById('titl').value;
      var content = document.getElementById('cnt').value;
  
      // Create a new task object
      var task = {
        title: title,
        content: content
      };
  
      // Add the new task to the list and the tasks array
      addtask(task);
      tasks.push(task);
  
      // Clear the input fields
      document.getElementById('titl').value = '';
      document.getElementById('cnt').value = '';
    });
  });
  
