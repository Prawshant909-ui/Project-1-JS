
let btn = document.getElementById("btn");
let input = document.getElementById("input");
let create = document.getElementById("list");
let erase = document.getElementById("del");

btn.addEventListener("click", () => {
  let li = document.createElement("li");

  let check = document.createElement("input");
  check.type = 'checkbox';

  let span = document.createElement("span");
  span.textContent = input.value;

  let make = document.createElement("button");
  make.textContent = "X";
  make.style.color = "white";
  make.style.border = "none";
  make.style.borderRadius = "8px";
 make.style.marginLeft = "10px";
   make.style.padding = "5px 10px";
   make.style.cursor = "pointer";
   make.style.fontSize = "15px";
   make.style.textTransform = "uppercase";
   make.style.transition = "background-color 0.3s ease";
   make.style.outline = "none";


   make.addEventListener("mouseover", function() {
    make.style.backgroundColor = "red";
"";
});

make.addEventListener("mouseout", function() {
    make.style.backgroundColor = "#1a237e";
});



  if(input.value ===""){
    document.getElementById("btn");
    return alert("Task required!!!");
  }

  make.onclick = function () {
    li.remove();
  };

  li.appendChild(check);
  li.appendChild(span);
  li.appendChild(make);
  create.appendChild(li);

  check.addEventListener("click", () => {
    if (check.checked) {
      span.style.textDecoration = "line-through";
      span.style.color = "red";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "black";
    }
  });

  input.value = "";
});


