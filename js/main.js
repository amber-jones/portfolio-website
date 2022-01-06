
// hamburger menu //

var hamburger= document.getElementById('hamburger');
var nav= document.getElementById('nav');
var navUL= document.getElementById('nav-list');
var close= document.getElementById('close');
var logo= document.getElementById('logo');

hamburger.addEventListener('click', function(){
    nav.style.backgroundColor='rgba(248, 248, 248, 0.9)';
    nav.style.height="100%";
    navUL.style.display='inline-block';
    close.style.display='inline-block';
    hamburger.style.display='none';
    logo.style.display='none';
    

});

close.addEventListener('click',function(){
    navUL.style.display='none';
    hamburger.style.display='inline-block';
    close.style.display='none';
    logo.style.display='block';
    nav.style.backgroundColor='transparent';
    nav.style.height="0";
});

gsap.config({
  nullTargetWarn: false,
});

// hero image

gsap.from("#hero-img_title",{
//  opacity:0,
 transformOrigin:"center center",
 duration:1.5,
 ease:Sine.easeInOut ,

});

// Hero ScrollTrigger{

 
gsap.registerPlugin(ScrollTrigger);

    

    var animation = gsap.timeline({defaults:{opacity:1}
    });
    

    function init(){

    
      
      animation.to("#hero-img_title", {
        xPercent: 180,
        ease: "none", 
       
        scrollTrigger: {
          trigger: ".container-one",
          pin: true,
          scrub: 1,
          start:"center center",
          end: "1000",
        }
    
      })
    
      
    
      animation.from(".hero-text", {
        xPercent: -250,
        ease: "none", 
        autoAlpha:0,
        scrollTrigger: {
          trigger: ".landing-page",
          scrub: 1,
          start:"top top",
          end: "1000",
          
        }, 
    })

  }

  window.addEventListener("load",function(event){
    init();
  });
  




//Form SUBMIT//

// HELP FROM A FORUM //

var submitBtn = document.getElementById("submit");
var note = document.getElementById("note");


function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    // If first entry with this name
    if (typeof query_string[key] === "undefined") {
      query_string[key] = decodeURIComponent(value);
      // If second entry with this name
    } else if (typeof query_string[key] === "string") {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
      // If third or later entry with this name
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }
  return query_string;
}

var query = window.location.search.substring(1);
var qs = parse_query_string(query);
console.log(qs.success);

if (qs.success == "true"){
  note.innerHTML ="Thanks for the message, I'll get back to you as soon as possible!";
  note.style.color="#5f20c8";
  note.style.textTransform="uppercase";
  note.style.fontSize="1.5rem";

};



// text-reveal //


var tl = gsap.timeline();



tl.from(".text .reveal", 1.8, {
  y: 200,
  ease: "power4.out",
  skewY: 7,
  delay:0.5,
  stagger: {
    amount: 0.3
  }
});





// portfolio //



gsap.from("#project-approach",{
  opacity:0,
  transformOrigin:"center center",
  duration:1.5,
  ease:Sine.easeInOut ,
  delay:1
 });



 gsap.from(".container",{
  opacity:0,
  transformOrigin:"center center",
  duration:1.5,
  ease:Sine.easeInOut ,
  delay:1.5
 });

 gsap.from(".project-heading",{
  opacity:0,
  transformOrigin:"center center",
  duration:1.5,
  ease:Sine.easeInOut ,
  delay:0.5
 });






 