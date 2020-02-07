var x=Number();
var array=new Array();
function firstt(){
    array[x]=Number(document.getElementById("nuumm").value);
    x++;
    document.getElementById("nuumm").value="";
    var e="";
   
      for(var i=0; i<array.length; i++){
          e +=array[i]+" ";
         
      }
      document.getElementById("aa1").innerHTML=e;}

function second (array){
  //Check if array can be split
  if (array.length <2) return array;
  //Get middle index
  var middle = Math.floor(array.length/2);
  //Split array in 2 sides
  var leftside = array.slice(0,middle);
  var rightside = array.slice(middle, array.length);
  //Use recursion to continue splitting
  console.log('split:', leftside,rightside);
  return merge( second(leftside), second(rightside));
}
function merge(left, right){
//Create new array
var result =[];
// Check if either list array and right array is empty
while(left.length && right.length){
  // Find lower value
  if (left[0]<= right[0]){
    //Add left value
    result.push(left.shift());
  }else{
    //Add right value
    result.push(right.shift());
  }
}
//Merge left array
while(left.length) result.push(left.shift());
//Merge right array
while(right.length) result.push(right.shift());
//Return result array
console.log("result:", result);
document.getElementById("b1").innerHTML=result;
return result;

}