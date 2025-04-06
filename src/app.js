
import "./style.css";


window.onload = function() {
  //write your code here
  document.querySelector('#excuse').innerHTML = generadorExcusas();
}

let generadorExcusas =()=>{

let quien = ['mi perro ','mi novia ','un rey mago ','el Papa '];
let accion = ['se cago en mi  ','me robo mi ','se sento en mi ', 'lucho con mi'];
let cosaRota = ['tarea ','ordenador ','oso ','vecino '];
let donde = ['en la luna.','en mi bañera.','en el Vaticano', 'en un barco.']

let indexQuien =  Math.floor(Math.random()*quien.length);   
let indexAccion =  Math.floor(Math.random()*accion.length);
let indexCosaRota =  Math.floor(Math.random()*cosaRota.length);
let indexDonde =  Math.floor(Math.random()*donde.length);

return quien[indexQuien]+accion[indexAccion]+cosaRota[indexCosaRota]+donde[indexDonde];

};
