//For BidBoxes show and hide
$("document").ready(function(){
 $("#label1").click(function(){
     $("#biddetail1").show();
 });
 $("#cross1").click(function(){
   $("#biddetail1").hide();
 });
 $("document").ready(function(){
    $("#label2").click(function(){
        $("#biddetail2").show();
    });
    $("#cross2").click(function(){
      $("#biddetail2").hide();
    });
   });
   $("document").ready(function(){
    $("#label3").click(function(){
        $("#biddetail3").show();
    });
    $("#cross3").click(function(){
      $("#biddetail3").hide();
    });
   });
   $("document").ready(function(){
    $("#label4").click(function(){
        $("#biddetail4").show();
    });
    $("#cross4").click(function(){
      $("#biddetail4").hide();
    });
   });
         
});

//For BidBoxes Current Bid Value
//Also remove and add class
function myFunction() {
  var num2;
  var num = 1570000;
  var num1 = prompt("Please enter the value:");
  if(num1>=num+5000){
    num2 = num1;
    document.getElementById("br1").innerHTML = "*Your bid is currently the highest bid*";
    var element = document.getElementById("p1");
  element.classList.remove("old");
  element.classList.add("updated");
  document.getElementById("rb1").disabled = true;
  document.getElementById("rb1").style.backgroundColor="lightgrey";
  document.getElementById("rb1").style.color="black";
  }
  else{
    alert("Raise bid minimum by Rs 5000")
    num2 = num;
  }
  document.getElementById("p1").innerHTML = "Rs" +" " + num2;
  document.getElementById("span1").innerHTML = "Rs" +" " + num2;
}

function myFunction2() {
  var num2;
  var num = 565000;
  var num1 = prompt("Please enter the value:");
  if(num1>=num+5000){
    num2 = num1;
    document.getElementById("br2").innerHTML = "*Your bid is currently the highest bid*";
    var element = document.getElementById("p2");
  element.classList.remove("old");
  element.classList.add("updated");
  document.getElementById("rb2").disabled = true;
  document.getElementById("rb2").style.backgroundColor="lightgrey";
  document.getElementById("rb2").style.color="black";
  }
  else{
    alert("Raise bid minimum by Rs 5000")
    num2 = num;
  }
  document.getElementById("p2").innerHTML = "Rs" +" " + num2;
  document.getElementById("span2").innerHTML = "Rs" +" " + num2;
}

function myFunction3() {
  var num2;
  var num = 525000;
  var num1 = prompt("Please enter the value:");
  if(num1>=num+5000){
    num2 = num1;
    document.getElementById("br3").innerHTML = "*Your bid is currently the highest bid*";
    var element = document.getElementById("p3");
  element.classList.remove("old");
  element.classList.add("updated");
  document.getElementById("rb3").disabled = true;
  document.getElementById("rb3").style.backgroundColor="lightgrey";
  document.getElementById("rb3").style.color="black";
  }
  else{
    alert("Raise bid minimum by Rs 5000")
    num2 = num;
  }
  document.getElementById("p3").innerHTML = "Rs" +" " + num2;
  document.getElementById("span3").innerHTML = "Rs" +" " + num2;
}

function myFunction4() {
  var num2;
  var num = 1267000;
  var num1 = prompt("Please enter the value:");
  if(num1>=num+5000){
    num2 = num1;
    document.getElementById("br4").innerHTML = "*Your bid is currently the highest bid*";
    var element = document.getElementById("p4");
  element.classList.remove("old");
  element.classList.add("updated");
  document.getElementById("rb4").disabled = true;
  document.getElementById("rb4").style.backgroundColor="lightgrey";
  document.getElementById("rb4").style.color="black";
  }
  else{
    alert("Raise bid minimum by Rs 5000")
    num2 = num;
  }
  document.getElementById("p4").innerHTML = "Rs" +" " + num2;
  document.getElementById("span4").innerHTML = "Rs" +" " + num2;
}