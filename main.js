let newTasks = JSON.parse(tasks);
console.log(newTasks)
// converted string to object

// looped tasks and displayed them
newTasks.forEach(task => {
    document.getElementById("result").innerHTML += `
    <div class="card">

    <div class="container-card bg-green-box">
<img src="${task.image}" class="card-img-top" alt="${task.taskName}">
    <p class="card-title">${task.taskName}</p>
    <p class="card-description">${task.description}</p>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16" id="bookmark">
  <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
    <span id="priority">Priority:</span>
    <button class="btn btn-success myButton" id="changeColor"> <span>${task.importance}</span></button>
  </div>
</div>
    `   
});

// for the color change 
    function changecolor(i) {
        const buttons = document.querySelectorAll(".myButton");
        if 
        (newTasks[i].importance >= 2 && newTasks[i].importance <= 3) {
            buttons[i].classList.remove( "btn-success");
            buttons[i].classList.add("btn-warning");
        } else if (newTasks[i].importance >= 4 && newTasks[i].importance <= 5) {
            buttons[i].classList.remove("btn-primary", "btn-success", "btn-warning");
            buttons[i].classList.add("btn-danger");
        }
    }
    


let buttons = document.querySelectorAll(".myButton");

buttons.forEach((button,i) => {
    button.addEventListener("click", function () {
        increaseClick(i);
        
    })
    
});

// min and max number clicks 5, added the change color function 
function increaseClick(i) {
    if (newTasks[i].importance < 5){
    newTasks[i].importance++; }
    document.querySelectorAll(".myButton span")[i].innerHTML = newTasks[i].importance;
    changecolor(i)
    
}
    // sort button (buttoni is the class of the sort button in html), added color changer as well at the end
    document.getElementById("buttoni").addEventListener("click", function() {
    let newVar = newTasks.sort((a, b) => b.importance - a.importance);
    document.getElementById("result").innerHTML = "";
    newTasks.forEach(task => {
        document.getElementById("result").innerHTML += `
        <div class="card">
        <div class="piccontainer">
      <img src="${task.image}" class="card-img-top" alt="${task.taskName}">
      </div>
      <div class="card-body">
        <h5 class="card-title">${task.taskName}</h5>
        <p class="card-text">${task.description}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
        <span>Priority:</span>
        <button class="btn btn-success myButton" id="changeColor"><span>${task.importance}</span></button>
      </div>
    </div>
        `   
  
    });
    buttons = document.querySelectorAll(".myButton");
    buttons.forEach((button, i) => {
        changecolor(i);
    });
});
