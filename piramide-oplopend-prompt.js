var arrayNumber = prompt("Voer een getal in:");

function arrayPiramide() {
  var totalRows = arrayNumber;
  var arrayNumbers = ["",];
  for (var i = 0; i <= totalRows; i++) {
      arrayNumbers.push(i);
      document.write((arrayNumbers)+ "<br>");
  }
  document.querySelector(".p").innerHTML = "Array " + arrayNumbers;  
}
arrayPiramide();


