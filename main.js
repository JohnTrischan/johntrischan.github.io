
   var n = new Date();
   var y = n.getFullYear();
   var m = n.getMonth() + 1;
   var d = n.getDate();
   document.getElementById("date").innerHTML = m + "/" + d + "/" + y;


    var t = new Date();
    var h = t.getHours();
    var m = t.getMinutes();
    if (h > 12 && m > 10) {
        document.getElementById("time").innerHTML = (h-12) + ":" + m + " pm";
    } else if (h > 12 && m < 10){
        document.getElementById("time").innerHTML = (h-12) + ":" + "0" + m + " pm";
    } else if (h <= 12 && m > 10){
        document.getElementById("time").innerHTML = h + ":" + m + " am";
    } else if (h <= 12 && m < 10){
        document.getElementById("time").innerHTML = h + ":" + "0" + m + " am";
    } else ("Something is horribly wrong")

    var x = document.getElementById("sport");
    
   // document.getElementById("sport").innerHTML = x;

    
    
   

