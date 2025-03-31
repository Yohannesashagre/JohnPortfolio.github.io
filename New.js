btn.addEventListener('click',function alertPop() {
  //alert("hello");
  const  inputCheck = document.querySelector("input").value;
  let atoZ = "You";
  // let atoZ = /[a-z]+/;
  let popUpAlert = document.getElementById("alertPop");
  
  if(inputCheck != atoZ){
    //alert("hello");
    popUpAlert.style.display = "flex";
    
  }else{
   // alert("opps")
  }
});
