
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const inputFeature = document.querySelector('#inputFeature');


inputFeature.keypress(function(e){
  // только такие символы
  var regx = /^[a-zA-Zа-яА-ЯёЁ0-9]$/;
  if (!e.key.match(regx))
         e.preventDefault();
 });


