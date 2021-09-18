var names = ["Kohana", "Kavita", "Sumit", "Aryan", "Deepti"];

var images = [
  "DA5A0436.jpg" , "Mamma.jpg" , "pappa.jpg" , "Aryan Bhaiya.jpg" , "masi.jpg"
];
var i = 0;
function nextslide() {
  document.getElementById("reason").innerHTML = reasons[i];
  document.getElementById("album").src = images[i];
  i++;
  
}
