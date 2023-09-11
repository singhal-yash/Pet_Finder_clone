function show_hidePoweredBy(){
    var target=document.getElementById("powered-by-container-left-2");
    var dropDown=document.getElementById("powered-by-container-dropdown");
    if(target.classList.contains("hide"))
    {
        target.classList="show";
        dropDown.style.transform = 'rotate(180deg)';
    }
    else{
        target.classList="hide";
        dropDown.style.transform = 'rotate(0deg)';
    }
}
$(document).ready(function(){
    $("#popup-container").hide();
    $("#overlay-suboption").hide();
    $(".c-drop").hover(function(){
        var dropdownMenu = $(this).children(".c-drop-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
    $("#art-card-1").hover(()=>{
        $("#art-card-readmore-1").css("background", " var(--highlight-color)");
        $("#art-card-readmore-1").css("color", "white");
    },()=>{
        $("#art-card-readmore-1").css("background", "white");
        $("#art-card-readmore-1").css("color", "rgb(56, 56, 56)");
    })
    $("#art-card-2").hover(()=>{
        $("#art-card-readmore-2").css("background", " var(--highlight-color)");
        $("#art-card-readmore-2").css("color", "white");
    },()=>{
        $("#art-card-readmore-2").css("background", "white");
        $("#art-card-readmore-2").css("color", "rgb(56, 56, 56)");
    })
    adjustAspectRatioPnCard();
}); 
window.addEventListener('resize',()=>{
    adjustAspectRatioPnCard();
})
function adjustAspectRatioPnCard(){
    var width=document.getElementsByClassName("pn-card-container")[0].offsetWidth;
    var height=Math.round(width*(3.2/2.75))+"px";
    
    $("#pn1-1").height(height);
    $("#pn1-2").height(height);
    $("#pn1-3").height(height);
    $("#pn1-4").height(height);
    
    $("#pn2-1").height(height);
    $("#pn2-2").height(height);
    $("#pn2-3").height(height);
    $("#pn2-4").height(height);
}


$(".c-drop").array.forEach(dmenu => {
    dmenu.css("background-color", "white")
});
show_hidePoweredBy();

//handle slide
// var slideNo=0;
// var slides=[document.getElementById("sl1"),document.getElementById("sl2"),document.getElementById("sl3")];
// var totalSlides=slides.length;
// function slideLeft(){
//     slideNo--;
//     showParticularSlide(slideNo);
// }
// function slideRight(){
//     slideNo++;
//     showParticularSlide(slideNo);
// }
// function showParticularSlide(no){
//     no=no%totalSlides;
//     if(no<0) no+=totalSlides;
//     console.log(no+" "+totalSlides);
//     var i=0;
//     slides.forEach((slide)=>{
//         if(i==no){
//             slide.classList="slide-card show-slide"
//         }else{
//             slide.classList="slide-card hide-slide";
//         }
//         i++;
//     })
// }
var myCarousel = document.querySelector('#carouselExampleIndicators');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
  wrap: false
})

//handle fullscreen menu

function showFullscreenMenu(){
    $("#popup-container").show();
}
function hideMainPopup(){
    $("#popup-container").hide();
    hideSubPopup();
}
function hideSubPopup(){
    $("#overlay-suboption").hide();
}
var subPopupArr=['<div class="p-m-opt-container" >'+
        '<p>All Adopt or Get Involved</p>'+
        '</div>'+
        '<div class="p-m-opt-container">'+
        '<p>About Petfinder</p>'+
        '</div>'+
        '<div class="p-m-opt-container" >'+
        ' <p>Adopting Pets</p>'+
        '</div>'+
        '<div class="p-m-opt-container" >'+
        '<p>Animal Shelters & Rescues</p>'+
        '</div>'+
        '<div class="p-m-opt-container" >'+
        '<p>Petfinder Foundation</p>'+
        '</div>',
      
      '<div class="p-m-opt-container" >'+
      '<p>All About Dogs & Puppies</p>'+
      '</div>'+
      '<div class="p-m-opt-container">'+
      '<p>Dog Breeds</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      '<p>Feeding Your Dog</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      '<p>Dog Behavior</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      '<p>Dog Health & Wellness</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      '<p>Dog Training</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      '<p>Other Dog Information</p>'+
      '</div>',


      '<div class="p-m-opt-container" >'+
      '<p>All About Cats & Kittens</p>'+
      '</div>'+
      '<div class="p-m-opt-container">'+
      '<p>Cat Adoption</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      '<p>Cat Breeds</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      '<p>Feeding Your Cat</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      ' <p>Cat Behavior</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      '<p>Cat Health & Wellness</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      '<p>Cat Training</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      ' <p>Other Cat Information</p>'+
      '</div>',

      '<div class="p-m-opt-container" >'+
      '<p>All About Other Types of Pets</p>'+
      '</div>'+
      '<div class="p-m-opt-container">'+
      ' <p>Birds</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      ' <p>Exotic Pets</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      ' <p>Guinea Pigs</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      ' <p>Horses</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      '<p>Rabbits</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      '<p>Reptiles</p>'+
      '</div>'+
      '<div class="p-m-opt-container" >'+
      ' <p>Small & Furry Pets</p>'+
      '</div>'
    ];
function showSuboption(no){
    $("#overlay-suboption").show();
    $("#overlay-suboption").html(subPopupArr[no]);

}

