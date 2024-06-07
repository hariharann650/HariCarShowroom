
var nothing = document.querySelector('.input1');
var svgElement = document.querySelector('#svg1');
var svgElement1 = document.querySelector('#cancelid');
var nothing2 = document.querySelectorAll('.list1');
var noo = '';

svgElement.addEventListener('click', nothing3);
svgElement1.addEventListener('click', newone);

function nothing3() {
  nothing.style.display = 'block';
  svgElement.style.display = 'none';
  svgElement1.style.display = 'block';


  nothing2.forEach(function(element) {
    element.style.display = 'none';
    noo = 1;
  });
  if (noo === 1) {
    svgElement.classList.add('newClass');
  }
};

  function newone() {
    console.log("hari");
    nothing.style.display = 'none';
    svgElement.style.display = 'inline';
    svgElement1.style.display = 'none';
  
    nothing2.forEach(function(element) {
      element.style.display = 'inline-block';
      console.log("nogl;");
      noo = 0;
    });
    // Remove the class 'newClass' from svgElement
    if(noo = 0){
      svgElement.classList.remove('newClass');

    }
  }
  
  
  function updateVideoSource() {
    var video = document.getElementById('responsiveVideo');
    var source = document.getElementById('videoSource');

    if (window.innerWidth < 550) {
        source.src = "images/mobile.mp4.crdownload";
    } 
    else {
        source.src = "images/video.mp4";
    }

    video.load();

}

window.addEventListener('resize', updateVideoSource);
window.addEventListener('load', updateVideoSource);

