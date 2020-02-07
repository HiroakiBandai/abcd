var x = Number();
var array = new Array();

function testIns() {
  alert("dfrgfdsasdfgh");
}

function firstIns() {
  // alert("ins")
  array[x] = Number(document.getElementById("inputnumber").value);
  x++;
  document.getElementById("inputnumber").value = "";
  var e = "";

  for (var i = 0; i < array.length; i++) {
    e += array[i] + " ";

  }
  document.getElementById("outputIns").innerHTML = e;
  console.log(typeof (e));
}



function insertionsort() {

  var a = document.getElementById("outputIns").innerHTML;
  a = a.split(' ')
  // Split arrange character strings
  debugger
  for (var i = 1; i < a.length; i++) {
    //Temporarily save the value to be inserted in a variable
    var tmp = a[i];


    // Judge in order from the back to the front where to insert in the "aligned part
    for (var j = i - 1; j >= 0; j--) {

      // If the value to be inserted is small, shift the checked value one position backward
      if (a[j] > tmp) {
        a[j + 1] = a[j];
      } else {
        //  If small , stop shifting
        break;
      }
    }

    // 　Insert "Value to be inserted" at the end of the shifting process
    a[j + 1] = tmp;
  }
  //Display data after sorting  
  document.getElementById("resultIns").innerHTML = a.join(' ');
  console.log(typeof (a));
}