const num = new TempTracker();

document.getElementById("insert").onclick = function(){
    console.log(document.getElementById("temp").value);
    num.insert(document.getElementById("temp").value);
} 

document.getElementById("max").onclick = function(){
    console.log(num.getMax());
    num.getMax();
} 

document.getElementById("min").onclick = function(){
    console.log(num.getMin());
    num.getMin();
} 

document.getElementById("avg").onclick = function(){
    console.log(num.getAvg());
    num.getAvg();
} 