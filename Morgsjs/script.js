function openHack() {
    document.getElementById("hackContainer").style.display = "table";
    window.dispatchEvent(new Event('resize'));
}

function closeHack() {
    document.getElementById("hackContainer").style.display = "none";
}


var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var close = document.getElementById("close").addEventListener("click", function(){
    modal.style.display = "none";

})

btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


window.onload = function() {
  currentYear();
};

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};