var minbtn =document.getElementsByClassName("min-btn");
var plusbtn =document.getElementsByClassName("plus-btn");
var Del =document.getElementsByClassName("Delete");
var qty =document.getElementsByClassName("quantity");
var Total= document.getElementById("Total");
var prix1= document.getElementById("prix1");
var prix2 = document.getElementById("prix2");
console.log (Total.innerHTML,prix1.innerHTML)

var prix1 = document.getElementById("prix1");

minbtn[0].addEventListener("click" , function () {
    if (+qty[0].innerHTML > 0 ) {
        document.getElementsByClassName("quantity")[0].innerHTML =
        +qty[0].innerHTML - 1 ;
        Total.innerHTML = +Total.innerHTML - +prix1.innerHTML;
       } else {
            alert("paie attention spv ")
        }
}); 

plusbtn[0].addEventListener("click" , function (){
    qty[0].innerHTML= +qty[0] .innerHTML + 1;
    Total.innerHTML = +Total.innerHTML + +prix1.innerHTML ;
    
});

var prix2 = document.getElementById("prix2");

minbtn[1].addEventListener("click" , function () {
    if (+qty[1].innerHTML > 0) {
        document.getElementsByClassName("quantity")[1].innerHTML =
        +qty[1].innerHTML - 1 ;
        Total.innerHTML = +Total.innerHTML - +prix2.innerHTML;
    }  else {
        alert("paie attention svp")
    } 
    }); 
    plusbtn[1].addEventListener("click" ,function() {
        qty[1].innerHTML = +qty[1].innerHTML + 1;
        Total.innerHTML = +Total.innerHTML + +prix2.innerHTML;
    });

    Del[0].addEventListener("click", function () {
        Del[0].parentElement.style.display = "none";
        Total.innerHTML = +Total.innerHTML - +qty[0].innerHTML * +prix1.innerHTML;
      });


    Del[1].addEventListener("click", function () {
        Del[1].parentElement.style.display = "none" ;
        Total.innerHTML = +Total.innerHTML - +qty[1].innerHTML * +prix2.innerHTML;

    });