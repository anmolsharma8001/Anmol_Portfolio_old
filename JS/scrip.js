window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >500 || document.documentElement.scrollTop >500) {
    document.getElementById("gotop").style.opacity="100%";
    document.getElementById("gotop").style.transform="translateY(0%)";
    document.getElementById("socialmediaside").style.transform="translateX(-100%)";
    document.getElementById("socialmediaside").style.transition="1s";
   document.getElementById("animationarrow").style.display="none";
    document.getElementById("logo").style.fontSize = "40px";
    //document.getElementById("header").style.fontSize = "25px";
    //document.getElementById("menu").style.marginTop="10px";
    

  } else {
    document.getElementById("gotop").style.opacity="0%";
    document.getElementById("gotop").style.transform="translateY(100%)";
    document.getElementById("socialmediaside").style.transform="translateX(0%)";
    document.getElementById("logo").style.fontSize = "48px";
    document.getElementById("animationarrow").style.display="inline";
    document.getElementById("socialmediaside").style.transform="translateX(0%)";
    //document.getElementById("menu").style.marginTop="19px";
   
   
  }
}

function mobileversion(){
 
  
    if(document.getElementById("menu").style.transform="translateX(-100%)")
    {
      document.getElementById("menu").style.transform="translateX(0%)";
      document.getElementById("mobilevermenu").style.display="none";
      document.getElementById("mobilevercloser").style.display="block";
      document.getElementById("menu").style.transition="0.4s";
      mobileveruptodown();
      
    }
  
}
function menucloser(){
  if(document.getElementById("menu").style.transform="translateX(0%)")
    {
      document.getElementById("menu").style.transform="translateX(-100%)";
      document.getElementById("mobilevercloser").style.display="none";
      document.getElementById("mobilevermenu").style.display="block";
      document.getElementById("menu").style.opacity="0%";
      document.getElementById("menu").style.transition="0.4s";
      document.getElementById("menu").style.height="0px";
   
    }
   /* window.location.reload(1);*/
}
function mobileveruptodown(){
  document.getElementById("menu").style.height="230px";
  document.getElementById("menu").style.opacity="100%";
  document.getElementById("menu").style.borderBottomLeftRadius="10px";
  document.getElementById("menu").style.borderBottomRightRadius="10px";
  
}