import { toyota, benz, bmw, tata, landRover,marutiSuzuki,volkswagen,mahindra,morrisGarage ,
  jaguar,volvo,skoda,kia,porschee} from './newmodels.js';


  var  datadetailsmodel='';
  var  datadetails='';
  var datadetails3 = JSON.parse(localStorage.getItem('datadetails'));
  var datadetailsmodel3 = JSON.parse(localStorage.getItem('datadetailsmodel'));
  
  var datadetails2 = JSON.parse(localStorage.getItem('datadetails2'));
  var datadetailsmodel2 = JSON.parse(localStorage.getItem('datadetailsmodel2'));
  // var van = JSON.parse(localStorage.getItem('van'));   
  let van =JSON.parse( localStorage.getItem('van'));

// var datadetailsmodel = JSON.parse(localStorage.getItem('totalCar'));   
// console.log(van);   

console.log(van);    
// van = 0;

if(van == 1){  
  datadetailsmodel = datadetailsmodel2;   
  datadetails = datadetails2;   
  console.log(datadetails);
  console.log(datadetailsmodel);
}   
else if(van == 2) {    
  datadetails = datadetails3;  
  datadetailsmodel = datadetailsmodel3; 
  console.log(datadetails);
  console.log(datadetailsmodel);
}    

// else{
//   datadetails !=datadetails2;
//   datadetailsmodel != datadetailsmodel2;
// }
var totalCar;
// van = B;
// localStorage.setItem('van',JSON.stringify(van));
// var van = JSON.parse(localStorage.getItem('van'));  
// console.log(datadetails2);
console.log(datadetailsmodel);
console.log(van);
switch (datadetailsmodel) {
  case ("toyota"):
    totalCar = toyota;
    break;
  case ("mercedesBenz"):
    totalCar = benz;
    break;
  case ("bmw"):
    totalCar = bmw;
    break;
  case ("tata"):
    totalCar = tata;
    break;
  case ("Landrover"):
    totalCar = landRover;
    break;
  case ("maruti"):
    totalCar = marutiSuzuki;
    break;
  case ("volkswagen"):
    totalCar = volkswagen;
    break;
  case ("mahindra"):
    totalCar = mahindra;
    break;
  case ("mg"):
    totalCar = morrisGarage;
    break;
  case ("jaguar"):
    totalCar = jaguar;
    break;
  case ("volvo"):
    totalCar = volvo;
    break;
  case ("skoda"):
    totalCar = skoda;
    break;
  case ("kia"):
    totalCar = kia;
    break;
  case ("porsche"):
    totalCar = porschee;
    break;
}
console.log(datadetails);

var hariCar = '';
totalCar.filter((value, index) => {
  if (totalCar[index].model === datadetails) {
    hariCar = totalCar[index];
  }
})
// var hence = document.querySelector('#iframehide')
// if (hariCar.iframeInterior == '') {
//   hence.classList.remove("iframehide")
// }
var hellfireData =

 ` <div class="maindiv1">
  <img class="mainimg" src="${hariCar.img}" alt="">
</div>
<div class="subshadow">
<h1>${hariCar.model}</h1>
</div>
    <div class="shadow">
  <div class="desk">
   <br>
    <p class="carmodel">${hariCar.price}</p><br>
  </div>
  <button class="test">Book a Test Drive</button>
  <button class="test1">Configure& Price</button>
  

  <div class="maintable">
    <div class="table ">
      <p class="para">${hariCar.pricecount}</p>
      <p class="para1">Starting from</p>
    </div>
    <div class="table1 ">
      <p class="para">${hariCar.mileage}</p>
      <p class="para1">Fuel consumption, combined</p>
    </div>
    <div class="table2 ">
      <p class="para">${hariCar.variant}</p>
      <p class="para1">Engine and Fuel Type</p>
    </div>
  </div>
</div>
</div>

  <div class="spec">
    <h1>KEY SPECS & FEATURES OF ${hariCar.model.toUpperCase()}</h1>
    <div class="buttondiv">

      <button class="button1 mt-4">KEY SPECIFICATIONS</button>
      <button class="button2 mt-4">TOP FEATURES</button>

      <div class="maindiv2">
        <div class="subdiv">
        <table>
          <tr class="gaping">
            <th><svg fill="#00000" width="60px" height="60px" viewBox="0 -14.14 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="enable-background:new 0 0 122.88 94.59" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style> <g> <path class="st0" d="M43.58,92.2L31.9,80.53h-8.04c-2.81,0-5.11-2.3-5.11-5.11v-8.7h-4.87V76.9c0,2.17-1.78,3.95-3.95,3.95H3.95 C1.78,80.85,0,79.07,0,76.9V42.4c0-2.17,1.78-3.95,3.95-3.95h5.98c2.17,0,3.95,1.78,3.95,3.95v10.18h4.87v-9.36 c0-2.81,2.3-5.11,5.11-5.11h8.54l12.07-12.83c1.4-1.22,3.26-1.65,5.43-1.56h49.73c1.72,0.19,3.03,0.85,3.83,2.09 c0.8,1.22,0.67,1.91,0.67,3.28v23.49H109V42.4c0-2.17,1.78-3.95,3.95-3.95h5.98c2.17,0,3.95,1.78,3.95,3.95v34.5 c0,2.17-1.78,3.95-3.95,3.95h-5.98c-2.17,0-3.95-1.78-3.95-3.95V66.72h-4.87v0.92c0,2.73,0.08,4.38-1.66,6.64 c-0.33,0.43-0.7,0.84-1.11,1.22L83.53,92.96c-0.89,0.99-2.24,1.53-4.02,1.63h-30.4C46.84,94.49,44.99,93.71,43.58,92.2L43.58,92.2z M63.71,61.78l-12.64-1.19l10.48-22.96h14.33l-8.13,13.17l14.62,1.62L55.53,84.64L63.71,61.78L63.71,61.78z M51.98,0h34.5 c2.17,0,3.95,1.78,3.95,3.95v5.98c0,2.17-1.78,3.95-3.95,3.95H76.3v5.03H62.16v-5.03H51.98c-2.17,0-3.95-1.78-3.95-3.95V3.95 C48.03,1.78,49.81,0,51.98,0L51.98,0z"></path></g></g></svg>&nbsp; Engine</th>
            
            <td>${hariCar.engineCc}</td>
            
          </tr>
          <tr class="gaping">
            <th><svg " fill="#000000" width="60px" height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.493,22.862a1,1,0,0,0,1.244-.186l11-12A1,1,0,0,0,19,9H13.133l.859-6.876a1,1,0,0,0-1.8-.712l-8,11A1,1,0,0,0,5,14H9.612l-2.56,7.684A1,1,0,0,0,7.493,22.862ZM6.964,12l4.562-6.273-.518,4.149A1,1,0,0,0,12,11h4.727l-6.295,6.867,1.516-4.551A1,1,0,0,0,11,12Z"></path></g></svg> Power</th>
           
            <td>${hariCar.power}</td>
          </tr>
        </table>
      </div>
        <div class="subdiv">
        <table>
          <tr class="gaping">
            <th><svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 30 30">
              <path d="M 19.664062 0 C 19.423063 0 19.217828 0.17120313 19.173828 0.40820312 L 18.953125 1.5839844 C 18.896125 1.8889844 18.654609 2.1166875 18.349609 2.1796875 C 18.065609 2.2386875 17.785672 2.3123906 17.513672 2.4003906 C 17.218672 2.4963906 16.897313 2.4205469 16.695312 2.1855469 L 15.919922 1.2792969 C 15.762922 1.0962969 15.498062 1.0528281 15.289062 1.1738281 L 14.710938 1.5078125 C 14.502937 1.6278125 14.408281 1.8804219 14.488281 2.1074219 L 14.884766 3.234375 C 14.987766 3.526375 14.893109 
              3.8437813 14.662109 4.0507812 C 14.447109 4.2437812 14.243781 4.4471094 14.050781 4.6621094 C 13.843781 4.8931094 13.526375 4.9897187 13.234375 4.8867188 L 12.105469 4.4882812 C 11.878469 4.4082812 11.627813 4.5019375 11.507812 4.7109375 L 11.171875 5.2910156 C 11.051875 5.4990156 11.097297 5.764875 11.279297 5.921875 L 11.376953 6.0058594 C 12.559953 6.0258594 13.572016 6.8720625 13.791016 8.0390625 L 13.851562 8.3574219 L 14.060547 8.1113281 C 14.519547 7.5773281 15.162172 7.2869531 15.826172 7.2519531 C 16.722172 5.8969531 18.255 5 20 5 C 22.761 5 25 7.239 25 10 C 25 11.745 24.103047 
              13.277875 22.748047 14.171875 C 22.713047 14.835875 22.422672 15.4795 21.888672 15.9375 L 21.642578 16.146484 L 21.960938 16.207031 C 23.127938 16.426031 23.974141 17.438094 23.994141 18.621094 L 24.078125 18.71875 C 24.235125 18.90175 24.499984 18.947172 24.708984 18.826172 L 25.289062 18.490234 C 25.497062 18.370234 25.591719 18.119578 25.511719 17.892578 L 25.113281 16.763672 C 25.010281 16.471672 25.106891 16.154266 25.337891 15.947266 C 25.552891 15.754266 25.756219 15.550938 25.949219 15.335938 C 26.156219 15.104938 26.473625 15.010281 26.765625 15.113281 L 27.892578 15.509766 C 28.119578 15.589766 28.372187 15.496109 28.492188 15.287109 L 28.826172 14.707031 C 28.946172 14.499031 28.902703 14.235125 28.720703 14.078125 L 27.814453 13.300781 C 27.579453 13.098781 27.503609
               12.777422 27.599609 12.482422 C 27.687609 12.210422 27.761312 11.932438 27.820312 11.648438 C 27.883312 11.344437 28.111016 11.102922 28.416016 11.044922 L 29.591797 10.822266 C 29.828797 10.781266 30 10.576938 30 10.335938 L 30 9.6640625 C 30 9.4230625 29.828797 9.2178281 29.591797 9.1738281 L 28.416016 8.953125 C 28.111016 8.896125 27.883312 8.6546094 27.820312 8.3496094 C 27.761312 8.0656094 27.687609 7.7856719 27.599609 7.5136719 C 27.503609 7.2186719 27.579453 6.8973125 27.814453 6.6953125 L 28.720703 5.9199219 C 28.903703 5.7629219 28.947172 5.4980625 28.826172 5.2890625 L 28.492188 4.7109375 C 28.372187 4.5029375 28.119578 4.4082812 27.892578 4.4882812 L 26.765625 4.8847656 C 26.473625 4.9877656 26.156219 4.8931094 25.949219 4.6621094 C 25.756219 4.4471094 25.552891 4.2437813 25.337891 4.0507812 C 25.106891 3.8437813 25.010281 3.526375 25.113281 3.234375 L 25.511719 2.1054688 C 25.591719 1.8784687 25.498063 1.6278125 25.289062
                1.5078125 L 24.708984 1.171875 C 24.500984 1.051875 24.235125 1.0972969 24.078125 1.2792969 L 23.302734 2.1855469 C 23.100734 2.4205469 22.779375 2.4963906 22.484375 2.4003906 C 22.212375 2.3123906 21.932437 2.2386875 21.648438 2.1796875 C 21.344438 2.1166875 21.102922 1.8870312 21.044922 1.5820312 L 20.824219 0.40625 C 20.782219 0.17025 20.576938 0 20.335938 0 L 19.664062 0 z M 10.664062 8 C 10.423063 8 10.217828 8.17025 10.173828 8.40625 L 9.9882812 9.3945312 C 9.9112813 9.8055313 9.5838281 10.108406 9.1738281 10.191406 C 8.8328281 10.260406 8.497875 10.348078 8.171875 10.455078 C 7.775875 10.585078 7.3413125 10.487875 7.0703125 10.171875 L 6.4199219 9.4121094 C 6.2629219 9.2301094 5.9970625 9.1866406 5.7890625 9.3066406 L 5.2109375 9.640625 C 5.0019375 9.760625 4.9082812 10.013234 4.9882812 10.240234 L 5.3242188 11.191406 C 5.4622188 11.585406 5.3305312 12.009109 5.0195312 12.287109 C 4.7625312 12.517109 4.5180625 12.760578 4.2890625
                 13.017578 C 4.0110625 13.328578 3.5873594 13.460266 3.1933594 13.322266 L 2.2402344 12.988281 C 2.0132344 12.908281 1.7625781 13.002937 1.6425781 13.210938 L 1.3066406 13.789062 C 1.1856406 13.998062 1.2310625 14.262922 1.4140625 14.419922 L 2.1738281 15.070312 C 2.4898281 15.341313 2.5870312 15.775875 2.4570312 16.171875 C 2.3500312 16.497875 2.2623594 16.832828 2.1933594 17.173828 C 2.1103594 17.583828 1.8074844 17.911281 1.3964844 17.988281 L 0.40820312 18.173828 C 0.17120313 18.217828 0 18.423063 0 18.664062 L 0 19.335938 C 0 19.576937 0.17025 19.782172 0.40625 19.826172 L 1.3945312 20.011719 C 1.8055312 20.088719 2.1084062 20.416172 2.1914062 20.826172 C 2.2604063 21.168172 2.3480781 21.502125 2.4550781 21.828125 C 2.5850781 22.224125 2.487875 22.658687 2.171875 22.929688 L 1.4121094 23.580078 C 1.2301094 23.737078 1.1866406 24.002938 1.3066406 24.210938 L 1.640625 24.789062 C 1.760625 24.998062 2.0132344 25.091719 2.2402344 25.011719
                  L 3.1914062 24.675781 C 3.5854063 24.537781 4.0091094 24.669469 4.2871094 24.980469 C 4.5171094 25.237469 4.7605781 25.481938 5.0175781 25.710938 C 5.3285781 25.988937 5.4602656 26.412641 5.3222656 26.806641 L 4.9882812 27.759766 C 4.9082812 27.986766 5.0029375 28.237422 5.2109375 28.357422 L 5.7890625 28.693359 C 5.9980625 28.814359 6.2629219 28.768937 6.4199219 28.585938 L 7.0703125 27.826172 C 7.3413125 27.510172 7.775875 27.412969 8.171875 27.542969 C 8.497875 27.649969 8.8328281 27.737641 9.1738281 27.806641 C 9.5838281 27.889641 9.9112813 28.192516 9.9882812 28.603516 L 10.173828 29.591797 C 10.217828 29.828797 10.423063 30 10.664062 30 L 11.335938 30 C 11.576938 30 11.782219 29.82875 11.824219 29.59375 L 12.009766 28.605469 C 12.086766 28.194469 12.414219 27.891594 12.824219 27.808594 C 13.166219 27.739594 13.500172 27.651922 13.826172 27.544922 C 14.222172 27.414922 14.656734 27.512125 14.927734 27.828125 L 15.578125 28.587891 C 
                  15.735125 28.769891 15.999031 28.815313 16.207031 28.695312 L 16.787109 28.359375 C 16.996109 28.239375 17.089766 27.988719 17.009766 27.761719 L 16.675781 26.808594 C 16.537781 26.414594 16.669469 25.990891 16.980469 25.712891 C 17.237469 25.482891 17.481938 25.239422 17.710938 24.982422 C 17.988937 24.671422 18.413641 24.539734 18.806641 24.677734 L 19.759766 25.011719 C 19.986766 25.091719 20.237422 24.997062 20.357422 24.789062 L 20.693359 24.210938 C 20.814359 24.001937 20.768937 23.737078 20.585938 23.580078 L 19.826172 22.929688 C 19.510172 22.658688 19.412969 22.224125 19.542969 21.828125 C 19.649969 21.502125 19.737641 21.167172 19.806641 20.826172 C 19.889641 20.416172 20.192516 20.088719 20.603516 20.011719 L 21.591797 19.826172 C 21.828797 19.782172 22 19.576937 22 19.335938 L 22 18.664062 C 22 18.423063 21.82875 18.218781 21.59375 18.175781 L 20.605469 17.990234 C 20.194469 17.913234 19.891594 17.583828 19.808594 17.173828 C 19.739594 16.832828 19.651922 16.497875 19.544922 16.171875 C 19.414922 15.775875 19.512125 15.343266 19.828125 15.072266 L 20.587891 14.421875 C 20.769891 14.264875 20.815313 13.999016 20.695312 13.791016 L 20.359375 13.210938 C 20.239375 13.001937 19.988719 12.908281 19.761719 12.988281 L 18.808594 13.324219 C 18.414594 13.462219 17.990891 13.330531 17.712891 13.019531 C 17.482891 12.762531 17.239422 12.518062 16.982422 12.289062 C 16.671422 12.011063 16.539734 11.587359 16.677734 11.193359 L 17.011719 10.240234 C 17.091719 10.013234 16.997062 9.7625781 16.789062 9.6425781 L 16.210938 9.3066406 C 16.001938 9.1856406 15.737078 9.2310625 15.580078 9.4140625 L 14.929688 10.173828 C 14.658687 10.489828 14.224125 10.587031 13.828125 10.457031 C 13.502125 10.350031 13.167172 10.262359 12.826172 10.193359 C 12.416172 10.110359 12.088719 9.8074844 12.011719 9.3964844 L 11.826172 8.4082031 C 11.782172 8.1712031 11.576937 8 11.335938 8 L 10.664062 8 z M 20 9 C 19.448 9 19 9.448 19 10 C 19 10.552 19.448 11 20 11 C 20.552 11 21 10.552 21 10 C 21 9.448 20.552 9 20 9 z M 11 13 C 14.314 13 17 15.686 17 19 C 17 22.314 14.314 25 11 25 C 7.686 25 5 22.314 5 19 C 5 15.686 7.686 13 11 13 z M 11 17 C 9.895 17 9 17.895 9 19 C 9 20.105 9.895 21 11 21 C 12.105 21 13 20.105 13 19 C 13 17.895 12.105 17 11 17 z"></path>
              </svg>&nbsp; Torque</th>
          
            <td>${hariCar.torque}</td>
          </tr>
          <tr class="gaping">
            <th><svg fill="#000000" height="60px" width="60px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 353.926 353.926" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M210.286,344.926c0,4.971-4.029,9-9,9h-48.65c-4.971,0-9-4.029-9-9s4.029-9,9-9h48.65 C206.257,335.926,210.286,339.955,210.286,344.926z M289.677,258.958v25.928c0,19.259-15.67,34.928-34.931,34.928H99.177 c-19.259,0-34.928-15.668-34.928-34.928v-25.928c0-4.971,4.029-9,9-9h2.394c-0.021-0.258-0.033-0.52-0.033-0.784v-24.118 c-0.013-0.535,0.023-1.066,0.105-1.588c0.204-1.329,0.699-2.561,1.418-3.631c0.705-1.055,1.639-1.969,2.767-2.659 c0.457-0.281,0.94-0.522,1.446-0.719c3.564-1.483,7.107-3.016,10.605-4.586V101.909c0-17.877,11.375-33.581,27.599-39.623 c-0.019-0.492-0.028-0.984-0.028-1.48V38.578C119.521,17.306,136.827,0,158.098,0h37.725C217.095,0,234.4,17.306,234.4,38.578 v22.229c0,0.495-0.01,0.988-0.028,1.478c6.395,2.378,12.129,6.28,16.702,11.351c0.16-0.3,0.318-0.599,0.478-0.899 c2.318-4.396,7.761-6.081,12.16-3.76c4.396,2.319,6.079,7.764,3.76,12.16c-16.845,31.926-41.307,61.508-72.707,87.923 c-25.063,21.083-53.512,39.294-84.813,54.313v26.586h134.02V141.64c0-4.971,4.029-9,9-9s9,4.029,9,9v108.318h18.706 C285.647,249.958,289.677,253.987,289.677,258.958z M137.521,60.807c0,1.842,0.243,3.629,0.699,5.33 c0.073,0.22,0.138,0.444,0.193,0.672c2.574,8.428,10.424,14.576,19.684,14.576h37.725c9.259,0,17.109-6.146,19.685-14.573 c0.057-0.231,0.122-0.458,0.195-0.68c0.455-1.699,0.698-3.484,0.698-5.325V38.578C216.4,27.231,207.169,18,195.822,18h-37.725 c-11.346,0-20.576,9.231-20.576,20.578V60.807z M109.951,203.272c56.184-28.521,102.335-68.15,131.162-112.739 c-2.612-4.871-6.75-8.658-11.666-10.83c-6.622,11.738-19.213,19.681-33.625,19.681h-37.725c-14.411,0-27.002-7.944-33.624-19.682 c-8.604,3.8-14.522,12.438-14.522,22.207V203.272z M271.677,267.958h-18.57c-0.046,0-0.091,0.001-0.136,0.001h-152.02 c-0.045,0-0.09,0-0.136-0.001H82.249v16.928c0,9.334,7.594,16.928,16.928,16.928h155.569c9.336,0,16.931-7.594,16.931-16.928 V267.958z"></path> </g></svg> Seating Capacity</th>
            
            <td>4</td>
          </tr>
        </table>
      </div>
        <div class="subdiv">
        <table>
          <tr class="gaping">
            <th><svg  width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 12H19.5C20.3284 12 21 12.6716 21 13.5V16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="3" r="2" stroke="#000000" stroke-width="1.5"></circle> <circle cx="3" cy="3" r="2" stroke="#000000" stroke-width="1.5"></circle> <circle cx="12" cy="21" r="2" stroke="#000000" stroke-width="1.5"></circle> <circle cx="21" cy="21" r="2" stroke="#000000" stroke-width="1.5"></circle> <circle cx="3" cy="21" r="2" stroke="#000000" stroke-width="1.5"></circle> <path d="M3 8V12V14.25V16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 7.5V12V16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>&nbsp; Drive Type</th>
            
            <td>${hariCar.Drivetype}</td>
          </tr>
          <tr class="gaping">
            <th><svg width="60px" height="60px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="2.592"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.a{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><path class="a" d="M8.59,13.9V43.5h18.9v-23H8.59"></path><path class="a" d="M6.19,43.5h23.6"></path><path class="a" d="M8.59,10.2V4.5h7.3"></path><path class="a" d="M19.19,4.5h8.3V20.6"></path><path class="a" d="M27.49,20.5c.5-.9,1.4-2,2.6-2,1.4,0,2.9.7,2.9,3.6,0,1.1,0,8.5.3,9.9s1.1,3.9,4.2,3.9c3.3,0,4.5-4.1,4.3-6.1a105.25,105.25,0,0,0-1.9-10.9c-.7-3.4-3.6-6.9-3.9-8.7a9.47,9.47,0,0,0-3-4.6,9.07,9.07,0,0,0-1.8-1"></path></g></svg>&nbsp; Mileage</th>
            
            <td>${hariCar.mileage}</td>
          </tr>
        </table>
      </div>
        <div class="subdiv">
        <table>
          <tr class="gaping">
            <th><svg  width="60px" height="60px" viewBox="0 0 1024 1024" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M908.008473 139.713707L529.299213 3.059374a51.005609 51.005609 0 0 0-17.397182-3.059374c-5.950311 0-11.855934 1.03125-17.534682 3.090312L117.015902 139.744645c-20.394681 7.397498-34.704989 26.774679-34.70499 48.472173v323.781463c0 72.287165 23.299368 144.584643 67.763417 214.87806 34.082802 53.875921 81.520288 106.71028 140.256832 157.045577 98.209345 84.156849 195.655565 132.70121 199.749627 134.725896a51.957797 51.957797 0 0 0 22.96593 5.352186c7.717185 0 15.485933-1.732499 22.608431-5.197498 4.094061-1.993749 101.495594-49.78186 199.797752-133.605272 58.794982-50.132485 105.520905-102.966844 139.627769-157.031827 44.446861-70.444666 66.601542-143.171831 66.601543-216.167122V188.216818c0.003437-21.731868-13.230933-41.133112-33.67374-48.503111zM164.810887 511.757656V226.768368c0-10.848747 6.648123-20.539056 16.847183-24.237805l320.759902-116.692777c2.859999-1.034687 6.142811-1.797812 9.580309-1.797812v427.961745h349.631456c0.020625 0 0.044687 0.464062 0.044688 0.759687-0.06875 93.255909-47.038736 185.679943-139.58652 275.670228-72.273415 70.279666-154.384953 120.436213-196.621503 144.096519-3.915311 2.196562-10.027184 3.231249-13.464683 3.231249V511.867656l-347.190832-0.11z"></path></g></svg>&nbsp; Global NCAP Safety Rating
            </th>

            <td>${hariCar.NCAPsafetyrating}</td>
          </tr>

        </table>
      </div>
      </div>

    </div>
  </div>
<div class="compount overflow-hidden mt-5">
<h1 class="ps-5 pb-5 comfort">COMFORT HIGHLIGHTS OF THE CAR</h1>
<div class="row ps-4">
<div class="col-4 h-auto widthing">
  <div class="card">
    <img class="card-img" src="./images/seperate/img1.jpg" alt="">
    <h3 class="card-title p-3 h-75">Best Comfort Seat Available</h3>
    <div class="card-body p-0">
      <p class="card-text  p-2  cardh1">
        The vehicle's 6-seat design offers passengers in the 2nd row more comfort and also facilitates access to the 3rd row of seats.
      </p>

    </div>
  </div>
</div>
<div class="col-4 widthing">
  <div class="card">
    <div class="card-body p-0">
      <img class="card-img" src="./images/seperate/img2.jpg" alt="">
      <h3 class="card-title p-3 texting fs-4 fw-medium">Automatic Air Conditioning With Control</h3>
      <p class="card-text p-2 cardh1">
        The Automatic air conditioning with 5-zone control allows the individual setting of the feel-good temperature in all three rows of.
      </p>

    </div>
  </div>
</div>
<div class="col-4 widthing">
  <div class="card">
    <div class="card-body p-0">
      <img class="card-img" src="./images/seperate/img3.jpg" alt="not loaded yet">
      <h3 class="card-title p-3">Best Surround Sound System</h3>
      <p class="card-text p-2 texting cardh1">
        The Automatic air conditioning with 5-zone control allows the in
        dividual setting of the temperature in all three rows of seats.
      </p>

    </div>
  </div>
</div>

</div>
</div>
<div class="rotate pt-4 ">
<h1 class="pb-4 interiormain">${hariCar.model} 360 view</h1>
<h2 class="pb-4 text-md-center interior">${hariCar.model} Interior view</h2>
<div class="mainone">

  <iframe class="videosource iframehide" id="iframehide" src="${hariCar.iframeInterior}" frameborder="0">
  </iframe>
  <div class="overlay">
      <span>Click to Interact</span>
  </div>
</div>
</div>
<div class="rotate pt-4 ">
<h2 class="pb-4 text-md-center pt-5 pb-4 interior">${hariCar.model} Exterior view</h2>
<div class="mainone">

  <iframe class="videosource pointer-event" src="${hariCar.iframeExterior}" frameborder="0">
  </iframe>
  <div class="overlay">
      <span>Click to Interact</span>
  </div>
</div>
</div>
</div>`;
document.querySelector('.contentmain').innerHTML = hellfireData;

van =0;
// // localStorage.setItem('van',van);
localStorage.getItem(van);
console.log(van);


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
