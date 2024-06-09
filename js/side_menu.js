function openNav() {
  document.getElementById("sortable-list").style.width = "200px";
  document.getElementById("sortable-list").style.display = "block";
  document.getElementById("open_btn").style.display = "none";
  document.getElementById("close_btn").style.display = "block";
}

function closeNav() {
  document.getElementById("sortable-list").style.width = "0";
  document.getElementById("mySidenav").style.marginLeft= "0";
  document.getElementById("close_btn").style.display = "none";
  document.getElementById("open_btn").style.display = "block";
}


