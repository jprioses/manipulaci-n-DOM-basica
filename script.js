const h1 = document.querySelector('h1');
//const p = document.querySelector('p');
//const parrafito = document.querySelector('parrafito');
//const pid = document.querySelector('#pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('form', sumarInputs)

btn.addEventListener('click', sumarInputs);
function sumarInputs()
{
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado " + sumaInputs; 
};



/*const img = document.createElement('img');
pid.innerText = '';
img.setAttribute('src','https://img.nanxiongnandi.com/202206/AcramanCrater_1920x1080.jpg');
pid.appendChild(img);*/
