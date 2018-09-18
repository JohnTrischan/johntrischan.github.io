
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

   // var x = document.getElementById("sport");
    
   // document.getElementById("sport").innerHTML = x;


   var radios = document.getElementsByName('sport');
   document.addEventListener("click", function() {
       console.log("In Radio Function")
for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
  // do whatever you want with the checked radio
  //alert(radios[i].value);
  //var selection = radios[i].value
  document.getElementById('radios[i].value')
  console.log(selection)
  selection.innerHTML = radios[i].value
  // only one radio can be logically checked, don't check the rest
 }
}
})

    
    
   

