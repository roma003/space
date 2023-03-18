window.onscroll=function showHeader(){
  var header=document.querySelector('.navbar');
  if(window.pageYOffset>760){
    header.classList.add("header_fixed")  ;
  }
  else{
    header.classList.remove("header_fixed")  ;

  }

}
window.addEventListener('scroll', e=>{
  document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
})
window.addEventListener('mousemove' ,(e)=>{
  document.body.style.cursor = "url(pack505.XCAJD.png), pointer"
})
window.addEventListener('mouseenter' ,(e)=>{
  document.body.style.cursor = "url(pack505.XCAJD.png , pointer)"
})
/**img */



/*const carusel=document.querySelector(".carusel");

const dragging = (e) => {
  carusel.scrollLeft=e.pageX;
}

carusel.addEventListener('mousemove' , dragging);*/

let startId=false , prevPageX,prevScrollLeft;
const arrow=document.querySelectorAll(".scroll i");



window.addEventListener('mousedown' , (e)=>{
  
  startId=true;
  prevPageX=e.pageX;
  prevScrollLeft=document.querySelector(".carusel").scrollLeft
  

})




window.addEventListener('mousemove' , (e)=>{
  if(!startId) return;
  e.preventDefault();
  let position=e.pageX-prevPageX;

  document.querySelector(".carusel").scrollLeft=prevScrollLeft-position;
  
  
 
  

})
window.addEventListener('mouseup' , (e)=>{
  startId=false;
  
  
 
  

})



/********** window.onscroll=function showHeader(){
  var header=document.querySelector('.navbar');
  if(window.pageYOffset>760){
    header.classList.add("header_fixed")  ;
  }
  else{
    header.classList.remove("header_fixed")  ;

  }

}*/

function initialize(){
    


  var mapOptions={center: new google.maps.LatLng( 43.238949, 76.889709), zoom:12, mapTypeId:google.maps.MapTypeId.ROADMAP};

  var map=new google.maps.Map(document.getElementById('map-canvas'),mapOptions);


  var marker = new google.maps.Marker({
      map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position:{ lat:  43.238949, lng: 76.889709},
      
      icon:'iconMarker.png',
      anchorPosition: (10, 10),
    
    });



  marker.addListener("click", toggleBounce);

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}

