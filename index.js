

document.getElementById("gallery").addEventListener("click", gall);

function gall(){
 document.getElementById("change").innerHTML= " <div class='polaroid'> <img id='im' src='images/sunny.png' alt='5 Terre' style='width:100%'><div class='container'><p>Happy clients</p></div></div> <br>";
 document.getElementById("myBtn").style.color = 'white';
}




document.getElementById("Contact").addEventListener("click", contact);
function contact(){
 document.getElementById("change").innerHTML= "<h2>Contact us:</h2> <br><a class='fa' href='tel:+918219635007'> Call</a> <br> <a class='fa' href='https://chat.whatsapp.com/JV5IIMc6nimFCXcu15klYU'>Whatsapp Group</a>";
 document.getElementById("myBtn").style.color = 'black';
}






let i = 1;
document.getElementById("myBtn").addEventListener("click", next);
function next(){
  
  let p = i++;
  console.log(p)

  document.getElementById("im").src="images/image"+p+".jpg"
  if(p>6){
    i=1;
  }
  
  
}
