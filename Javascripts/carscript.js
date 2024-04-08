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

document.querySelector('.maindiv1').innerHTML = nothing;

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

let abouting =`<div class="line">
  </div>
  <div class="about">
    <div class="aboutcontent">
      <ul>About</ul>
      <ul>Careers With Us</ul>
      <ul>Terms & Conditions</ul>
      <ul>Policy Privacy</ul>
      <ul>Investors</ul>
      <ul>FAQ's</ul>
    </div>
    <div class="contact">
      <ul>Contacts</ul>
      <ul> <a class="about-link" href="https://www.facebook.com/share/ACs5XfB2Dar7pXvZ/?mibextid=qi2Omg" target="_blank"> Facebook &nbsp; &nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="126.445 2.281 589 589" id="facebook">
          <circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"></circle>
          <path fill="#fff"
            d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z">
          </path>
        </svg>
      </a>
      </ul>
      <ul> <a class="about-link" href="https://www.instagram.com/hari_haran_650?utm_source=qr&igsh=NnF0NXVwODAwM3hk" target="_blank"> Instagram&nbsp;&nbsp;&nbsp;
        <svg width="35" height="35" viewBox="0 0 3364.7 3364.7" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><radialGradient id="0" cx="217.76" cy="3290.99" r="4271.92" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"></stop><stop offset=".78" stop-color="#d82d7e"></stop></radialGradient><radialGradient id="1" cx="2330.61" cy="3182.95" r="3759.33" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop><stop offset="1" stop-color="#8c3aaa"></stop></radialGradient>
        </defs><path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#0)"></path><path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-
        95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#1)"></path><path d="M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-22
        4,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57" fill="#ffffff"></path></g></svg>
      </a>
      </ul>
      <ul> <a class="about-link" href="https://x.com/Harihar49281746?t=V0VffdFFcedqDFQB_2SQVg&s=09" target="_blank">Twitter &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 512 512" id="twitter">
          <g clip-path="url(#clip0_84_15697)">
            <rect width="512" height="512" fill="#000" rx="60"></rect>
            <path fill="#fff"
              d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z">
            </path>
          </g>
          <defs>
            <clipPath id="clip0_84_15697">
              <rect width="512" height="512" fill="#fff"></rect>
            </clipPath>
          </defs>
        </svg>
      </a>
      </ul>
      <ul> <a class="about-link" href="https://www.linkedin.com/in/hariharan-725101187/" target="_blank"> Linked In &nbsp; &nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 28.87 28.87" id="linkedin">
          <g data-name="Layer 2">
            <g data-name="Layer 1">
              <rect width="28.87" height="28.87" fill="#0b86ca" rx="6.48" ry="6.48"></rect>
              <path fill="#fff"
                d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z">
              </path>
            </g>
          </g>
        </svg>
      </a>
      </ul>
      <ul> <a class="about-link" href="https://wa.me/918072114401" target="_blank">Whatsapp&nbsp;&nbsp; &nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-whatsapp" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>
      </ul>
    </div>
    <div class="other">
      <ul>Others</ul>
      <ul>Health Insurance</ul>
      <ul>Team Insurance</ul>
      <ul>Life Insurance</ul>
      <ul>Personal Loan</ul>
      <ul>Emergency Response</ul>
      <ul>Crack-ED</ul>
    </div>
    <div class="exper">
      <ul>Experience On</ul>
      <img src="./images/appstore.png" alt="">
      <img src="./images/playstore.webp" alt="">
    </div>

  </div>
  <div class="lastline"></div>
  <div class="lasttext">
    © 2023 Hari CarShowroom, All Rights Reserved.
  </div>`;
document.querySelector  ('.about-main-div').innerHTML = abouting;
