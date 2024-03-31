import { maruti, tata, bmw, landrover, volkswagen, mahindra, mg, jaguar, mercedesBenz, toyota, volvo, skoda, kia, porsche} from "./carModels.js";

function getCarInfo(uniqueId) {
  let carData = { newone: [], carName: '', carCount: 0 };

  switch (uniqueId) {
    case 10:
      carData.newone = bmw;
      carData.carName = 'BMW';
      break;
    case 11:
      carData.newone = tata;
      carData.carName = 'TATA';
      break;
    case 12:
      carData.newone = landrover;
      carData.carName = 'LANDROVER';
      break;
    case 13:
      carData.newone = maruti;
      carData.carName = 'MARUTI SUZUKI';
      break;
    case 14:
      carData.newone = volkswagen;
      carData.carName = 'VOLKSWAGEN';
      break;
    case 15:
      carData.newone = mahindra;
      carData.carName = 'MAHINDRA';
      break;
    case 16:
      carData.newone = mg;
      carData.carName = 'MORRIS GARRAGE';
      break;
    case 17:
      carData.newone = jaguar;
      carData.carName = 'JAGUAR';
      break;
    case 18:
      carData.newone = mercedesBenz;
      carData.carName = 'MERCEDES-BENZ';
      break;
    case 19:
      carData.newone = toyota;
      carData.carName = 'TOYOTA';
      break;
    case 20:
      carData.newone = volvo;
      carData.carName = 'VOLVO';
      break;
    case 21:
      carData.newone = skoda;
      carData.carName = 'SKODA';
      break;
    case 22:
      carData.newone = kia;
      carData.carName = 'KIA';
      break;
    case 23:
      carData.newone = porsche;
      carData.carName = 'PORSCHE';
      break;
    default:
      console.log("wrong");
      break;
  }

  carData.carCount = carData.newone.length;
  return carData;
}

var uniqueId = localStorage.getItem('uniqueId');
console.log('Unique ID from another.js:', uniqueId);

var { newone, carName, carCount } = getCarInfo(Number(uniqueId));

var nothing = `<div class="class1">
  <p>${carName} CAR MODELS</p>
</div>
<div class="count">
  <p><span>${carCount}</span> Vehicles Found</p>
</div>
<div class="modelname">
  <p></p>
</div>
<div class="modelcars">
</div>`;

document.querySelector('.maindiv').innerHTML = nothing;

var newline = newone.map(car => `<div class="cardiv" data-aahin-name="${car.name}" data-hari-name="${car.id}">
  <div class="carimg">
    <img src="${car.imageSrc}" alt="${car.name}">
  </div>
  <div class="textcar">
    <p class="carname">${car.name}</p><br>
    <p class="carmodel">${car.model}</p><br>
    <p class="carmilage">${car.kmpl}</p><br>
    <p class="carprice">&#8377;${car.price}&#42;</p>
  </div>
</div>`).join('');

document.querySelector('.modelcars').innerHTML = newline;


document.querySelectorAll('.cardiv').forEach((button) => {
  button.addEventListener('click', () => {
    var datadetails = button.dataset.aahinName;
    var datadetailsmodel = button.dataset.hariName;
     console.log(datadetailsmodel);
      console.log(datadetails);
      let van ='';
      van = 2;
      localStorage.setItem('van',van);
      localStorage.setItem('datadetails',JSON.stringify(datadetails));
      localStorage.setItem('datadetailsmodel',JSON.stringify(datadetailsmodel));
      window.location.href = 'newcar.html';
  });
});
