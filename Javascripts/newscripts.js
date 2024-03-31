import { latestcar, suv  , luxury, hatchback,sedan,mpv} from "./carModels.js";
 var noing = JSON.parse(localStorage.getItem('apple'));
//  var effer = JSON.parse(localStorage.getItem('effer'));
// noing = aahin();
// var orange = localStorage.getItem('dhinesh');
// // var orange1 = eval('(' +orange + ')');
// var orange1 = new Function('return ' + orange)();
// console.log(orange1);
// orange1();

console.log(noing);

function handleButtonClick(event) {
  var uniqueId = event.currentTarget.getAttribute('data-unique-id');
  localStorage.setItem('uniqueId', uniqueId);
  window.location.href = 'cars.html';
}

document.querySelector('.maruti_button').addEventListener('click', handleButtonClick);
document.querySelector('.tata_button').addEventListener('click', handleButtonClick);
document.querySelector('.landrover_button').addEventListener('click', handleButtonClick);
document.querySelector('.bmw_button').addEventListener('click', handleButtonClick);
document.querySelector('.volkswagen_button').addEventListener('click', handleButtonClick);
document.querySelector('.mahindra_button').addEventListener('click', handleButtonClick);
document.querySelector('.mg_button').addEventListener('click', handleButtonClick);
document.querySelector('.jaguar_button').addEventListener('click', handleButtonClick);
document.querySelector('.Mercedes-Benz_button').addEventListener('click', handleButtonClick);
document.querySelector('.toyota_button').addEventListener('click', handleButtonClick);
document.querySelector('.volvo_button').addEventListener('click', handleButtonClick);
document.querySelector('.skoda_button').addEventListener('click', handleButtonClick);
document.querySelector('.kia_button').addEventListener('click', handleButtonClick);
document.querySelector('.porsche_button').addEventListener('click', handleButtonClick);


var latest = latestcar.map(cars =>`<div class="carousel-item active item1 ak1" >
<div class="card newcard">
  <div class="img-wrapper"><img src="${cars.img}" class="d-block w-100" alt="..."> </div>
  <div class="card-body">
    <p class="card-title title1">${cars.name}</p>
    <p class="card-text title2">${cars.price}</p>
    <button class="checkbutton" data-sentence="${cars.name}" data-sentence2="${cars.id}">Check Offers</button>
  </div>
</div>
</div>`).join('');
document.querySelector('.inner1').innerHTML = latest;
//  console.log(latest);


document.querySelectorAll('.checkbutton').forEach(button =>{
  button.addEventListener('click',()=>{

    var datadetails2 = button.dataset.sentence;
    var datadetailsmodel2 = button.dataset.sentence2;
    var van = '';
    van = 1;
    // var nothing = '';
    // console.log(nothing);
    // if(nothing == 0 ){
    //   van =1;
    // }else{
    //   van =2;
    // }

    localStorage.setItem('datadetails2',JSON.stringify(datadetails2));
    localStorage.setItem('datadetailsmodel2',JSON.stringify(datadetailsmodel2));
    localStorage.setItem('van',van);
    
    window.location.href = 'newcar.html';
    // return van;
  });
});

    // var totalCar;
    // if(totalCar = )
    // localStorage.setItem('datadetails',JSON.stringify());
    // window.location.href ='newcar.html';
    var selectbtn = document.querySelectorAll('.subing');
    //  var latestcar1;  
    
    var apple1 = [suv,hatchback,luxury,sedan,mpv];
    var apple = apple1[0];
    apple = noing;
selectbtn.forEach(button => {
  button.addEventListener('click',()=>{
    
    var vishnu = button.dataset.yourName;
    console.log(vishnu);

    switch (vishnu) {
      case '1' :{
        apple = apple1[0];
        console.log(apple);
        aahin();
        okie();
        break;
      }
      case '2' :{
        apple = apple1[1];
        console.log(apple);
        aahin();
        okie();
        break;
      }
      case '3' :{
      apple = apple1[2];
      console.log(apple);
      aahin();
      okie();
      break;
      }
      case '4' :{
      apple = apple1[3];
      console.log(apple);
      aahin();
      okie();
      break;
      }
      case '5' :{
      apple = apple1[4];
      console.log(apple);
      aahin();
      okie();
      break;
      }
       default:{
         console.log("nothing");
       }
      }
      dinesh();

      function dinesh(){
     selectbtn.forEach(elem => {
        elem.style.backgroundColor = "";
        elem.style.color = "";   
      })
      
      console.log(apple);

      button.style.backgroundColor = "#f75d34";
      button.style.color = "#ffff";   
      
      localStorage.setItem('apple',JSON.stringify(apple));
      // localStorage.setItem('effer',JSON.stringify(effer));
      // var dhinesh = dinesh.toString();
      // localStorage.setItem('dhinesh',dhinesh);
      // console.log(dhinesh);
    }
    })
  })
        
      // let  appling = apple

      console.log(apple);
      function aahin(){
        var latest1 = apple.map(cars =>`<div class="carousel-item active item1 ak2" >
        <div class="card newcard">
          <div class="img-wrapper"><img src="${cars.img}" class="d-block w-100" alt="..."> </div>
          <div class="card-body">
            <p class="card-title title1">${cars.name}</p>
            <p class="card-text title2">${cars.price}</p>
            <button class="checkbutton newbtn" data-sentence="${cars.name}" data-sentence2="${cars.id}">Check Offers</button>
          </div>
        </div>
        </div>`).join('');
        document.querySelector('.inner2').innerHTML = latest1;
        // localStorage.setItem('aahin',JSON.stringify(aahin));
      }
      aahin();
function okie(){
 document.querySelectorAll('.newbtn').forEach(button => {
  button.addEventListener('click',()=>{

    var datadetails2 = button.dataset.sentence;
    var datadetailsmodel2 = button.dataset.sentence2;
    console.log(datadetails2);
    // let van = '';
    var van = 1;
    // var nothing = '';

    // if(nothing == 0 ){
    //   van =1;
    // }else{
    //   van =2;
    // }
    
    localStorage.setItem('van',JSON.stringify(van));
    localStorage.setItem('datadetails2',JSON.stringify(datadetails2));
    localStorage.setItem('datadetailsmodel2',JSON.stringify(datadetailsmodel2));
    // localStorage.setItem('van',van);
    // localStorage.setItem('aahin()',aahin);
    window.location.href = 'newcar.html';

  });
});
  
}
okie();


var multipleCardCarousel = document.querySelector(".carouselfirstone");


if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });

  var carouselInner = document.querySelector(".carouselfirstone .inner1");
  var carouselWidth = carouselInner.scrollWidth;
  var cardWidth = document.querySelector(".carouselfirstone .ak1").offsetWidth;
  var scrollPosition = 0;

  document.querySelector(".carouselfirstone .next").addEventListener("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      console.log("the schorl");
      carouselInner.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  });
  
  document.querySelector(".carouselfirstone .prev").addEventListener("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      console.log("the prev");
      carouselInner.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  });
} else {
  multipleCardCarousel.classList.add("slide");
}


var multipleCardCarousel = document.querySelector(".carouselfirstone2");

if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel1 = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });

  var carouselInner = document.querySelector(".carouselfirstone2 .inner2");
  var carouselWidth = carouselInner.scrollWidth;
  var cardWidth = document.querySelector(".carouselfirstone2 .ak2").offsetWidth;
  var scrollPosition = 0;

  document.querySelector(".carouselfirstone2 .next").addEventListener("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      carouselInner.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  });

  document.querySelector(".carouselfirstone2 .prev").addEventListener("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      carouselInner.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  });
} else {
  multipleCardCarousel.classList.add("slide");
}
// console.log(latest1);
// localStorage.setItem('latest1',JSON.stringify(latest1))