var x = Number();
var array = new Array();
function insertion() {
  array[x] = Number(document.getElementById("num").value);
  x++;
  document.getElementById("num").value = "";
  var e = "";

  for (var i = 0; i < array.length; i++) {
    e += array[i] + " ";
  }
  document.getElementById("a").innerHTML = e;
}
// lopp legth
let bubbleSort = inputArr => {
  inputArr = array;

  let len = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);

  document.getElementById("b").innerHTML = inputArr;

  return inputArr;
};
function refreshPage() {
  window.location.reload();
}
// document.getElementById("push").addEventListener("click", showHide);
// Function that will do the action
function showHide() {
  //  Two images
  var imageA = document.getElementById("first");
  var imageB = document.getElementById("second");
  //This is for showing or hiding imageB based on imageA's appearance
  if (imageA.style.display == "block" && imageB.style.display == "none") {
    imageA.style.display = "none";
    imageB.style.display = "block";
    document.getElementById("output").innerHTML =
      "This is the bubble sorting method";
  } else {
    imageA.style.display = "block";
    imageB.style.display = "none";
    document.getElementById("output").innerHTML =
      "This is bubble sorting Flow-Chart";
  }
}