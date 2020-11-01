function tombolkunjungi() {
  document.getElementById("tombol").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.inibutton')) {
    var cobadropdown = document.getElementsByClassName("kebawah");
    var klik;
    for (klik = 0; klik < cobadropdown.length; klik++) {
      var buka = cobadropdown[klik];
      if (buka.classList.contains('show')) {
        buka.classList.remove('show'); }}
}
}