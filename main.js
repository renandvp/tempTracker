const num = new TempTracker();

document.getElementById("insert").onclick = function(){
    numb = document.getElementById("temp").value;
    numb = num.insert(numb);
    if(numb){
        document.getElementById("temp").value = '';
        document.getElementById("console").innerHTML = ' ';
        document.getElementById("console").innerHTML = 'The temperature ' + numb + ' was inserted!';
    }
} 

document.getElementById("max").onclick = function(){
    document.getElementById("console").innerHTML = ' ';
    document.getElementById("console").innerHTML = 'The highest temperature recorded is: ' + num.getMax();
} 

document.getElementById("min").onclick = function(){
    document.getElementById("console").innerHTML = ' ';
    document.getElementById("console").innerHTML = 'The lowest temperature recorded is: ' + num.getMin();
} 

document.getElementById("avg").onclick = function(){
    document.getElementById("console").innerHTML = ' ';
    document.getElementById("console").innerHTML = 'The average temperature is: ' + num.getAvg();
} 