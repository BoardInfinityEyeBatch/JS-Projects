function fgreet() {
  var greet;
  var time = new Date().getHours();
  if (time > 6 && time <= 12) {
    greet = "Good morning";
  } else if (time > 12 && time <= 18) {
    greet = "Good afternoon";
  } else if (time > 18 && time < 21) {
    greet = "Good evening";
  } else {
    greet = " Good night";
  }
  document.querySelector(".output").innerHTML = greet;
}
