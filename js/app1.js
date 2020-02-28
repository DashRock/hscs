 /* document.querySelector('.hsc-more').addEventListener('onload', () => {
    document.querySelector('.hsc-more').style.display = 'block';
    document.querySelector('.slideshow-wrapper').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.slideshow').style.animation = 'slideshow 24s infinite';
});


document.getElementById("skills4Life").addEventListener("click", skills);
document.getElementById("proDev").addEventListener("click", proDevWrk);
document.getElementById("holyFireBtn").addEventListener("click", holyFire);

function skills() {

    document.getElementById('skillsForLife').style.display = 'grid';
     document.getElementById('proDevWrkshp').style.display = 'none';
   document.getElementById('holyFireNews').style.display = 'none';
}

function proDevWrk() {

    document.getElementById('proDevWrkshp').style.display = 'grid';
    document.getElementById('skillsForLife').style.display = 'none';
       document.getElementById('holyFireNews').style.display = 'none';
  
}

function holyFire() {

    document.getElementById('skillsForLife').style.display = 'none';
     document.getElementById('proDevWrkshp').style.display = 'none';
      document.getElementById('holyFireNews').style.display = 'grid';
}
*/
document.getElementById("ietCall").addEventListener("click", function(){
   document.getElementById('ietInfo').style.display = "grid";
   document.getElementById('retprogs').style.display = "none";
   document.getElementById('holyFireInfo').style.display = "none";
});

document.getElementById("hfCall").addEventListener("click", function(){
   document.getElementById('ietInfo').style.display = "none";
   document.getElementById('retprogs').style.display = "none";
   document.getElementById('holyFireInfo').style.display = "grid";
});

document.getElementById("programsCall").addEventListener("click", function(){
   document.getElementById('retprogs').style.display = "grid";
   document.getElementById('ietInfo').style.display = "none";
   document.getElementById('holyFireInfo').style.display = "none";
});

document.getElementById("retp-btn-2").addEventListener("click", function(){
   document.getElementById('addictions').style.display = "none";
   document.getElementById('depression').style.display = "none";
   document.getElementById('groups').style.display = "none";
   document.getElementById('skills4Life').style.display = "none";
   document.getElementById('innerChild').style.display = "none";
   document.getElementById('couples').style.display = "grid";
});

document.getElementById("retp-btn-1").addEventListener("click", function(){
   document.getElementById('couples').style.display = "none";
   document.getElementById('depression').style.display = "none";
   document.getElementById('groups').style.display = "none";
   document.getElementById('skills4Life').style.display = "none";
   document.getElementById('innerChild').style.display = "none";
   document.getElementById('addictions').style.display = "grid";
});

document.getElementById("retp-btn-3").addEventListener("click", function(){
   document.getElementById('couples').style.display = "none";
   document.getElementById('addictions').style.display = "none";
   document.getElementById('groups').style.display = "none";
   document.getElementById('skills4Life').style.display = "none";
   document.getElementById('innerChild').style.display = "none";
   document.getElementById('depression').style.display = "grid";

});

document.getElementById("retp-btn-4").addEventListener("click", function(){
   document.getElementById('couples').style.display = "none";
   document.getElementById('addictions').style.display = "none";
   document.getElementById('depression').style.display = "none";
   document.getElementById('skills4Life').style.display = "none";
   document.getElementById('innerChild').style.display = "none";
   document.getElementById('groups').style.display = "grid";
});

document.getElementById("retp-btn-5").addEventListener("click", function(){
   document.getElementById('couples').style.display = "none";
   document.getElementById('addictions').style.display = "none";
   document.getElementById('depression').style.display = "none";
   document.getElementById('groups').style.display = "none";
   document.getElementById('innerChild').style.display = "none";
   document.getElementById('skills4Life').style.display = "grid";
});

document.getElementById("retp-btn-6").addEventListener("click", function(){
   document.getElementById('couples').style.display = "none";
   document.getElementById('addictions').style.display = "none";
   document.getElementById('depression').style.display = "none";
   document.getElementById('groups').style.display = "none";
   document.getElementById('skills4Life').style.display = "none";
   document.getElementById('innerChild').style.display = "grid";
});

let slideIndex = 0;


function hscsGallery() {
    var i;
    var x = document.getElementsByClassName("hscsGallery");
 //var captionText = document.getElementById("holHeal");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    x[slideIndex-1].style.border = "2px inset brown";
    setTimeout(hscsGallery, 5000);

 // captionText.innerHTML = x[slideIndex-1].alt;
}

hscsGallery();

