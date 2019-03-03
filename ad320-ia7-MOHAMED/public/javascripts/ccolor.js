window.onload = function() {
 var doc = document.getElementById("d1");
doc.addEventListener('click', function() {
 if(doc.style.backgroundColor === "yellow") {
 doc.style.backgroundColor = "green";
} else {
 doc.style.backgroundColor = "yellow";
}
});
  }
  