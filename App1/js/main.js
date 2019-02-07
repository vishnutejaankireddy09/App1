// Your code here!
function myFunction(a, b) {
    var a = 5;
    var b = 5;
    return a + b; 
}

function arrays(){
    var pens;
    pens = ["red", "orange", "green", "blue", "purple"];
    console.log(pens);
    console.log(pens[0]);
    for (i = 0; i <= pens.length; i++){
        alert(pens[i]);
    }
    alert("Length of array is: " +pens.length);
}