import Veiculo from './Veiculo.js';
import api from './api.js';
import Corrida from './Corrida.js';
import Piloto from './Piloto.js';


let ferrari = new Veiculo('carro', 'ferrari', 2021, 'vermelha', 400);
let corsa = new Veiculo('carro', 'corsa', 2000, 'cinza', 100);
let carros = [];
carros.push(ferrari);
carros.push(corsa);

let pedro = new Piloto('Pedro', 2, 30);
let arnaldo = new Piloto('Arnaldo', 4, 15);
let pilotos = [];
pilotos.push(pedro);
pilotos.push(arnaldo);

// console.log(arnaldo.xp())
//console.log(pedro.xp())
//let ferrari = new Veiculo('carro', 'ferrari', 2021, 'vermelha', 400)
//carrango.setCarros(carrango)
//ferrari.setCarros(ferrari)

let relatorio = function (obj) {

  api['api/v1/chegada'](obj.piloto).then((respostaDistancia) => {

    start.podio(respostaDistancia);

    if (respostaDistancia.length == Veiculo.totalVeiculosCorrida) {
      api['api/v1/recorde']().then((resposta) => {
        console.log(`O recorde é de ${resposta}`)
      }).catch(erro => console.log(erro));
    }

    api['api/v1/diferencaTempo'](obj.feedback).then((tempo) => {
      if (tempo.length == 2) {
        console.log(`${obj.piloto} seu tempo é ${tempo[1] - tempo[0]} a mais que o 1° colocado`)
      }
    }).catch(erro => console.log(erro));


  }).catch(erro => console.log(erro));

  console.log(obj.piloto + ' com motor de ' + obj.potenciaMotor + 'cv demorou ' + obj.feedback + ' segundos de 0 a 100 km')


}

let start = new Corrida
pilotos.forEach(function (piloto, index) {
  console.log(start.largada(piloto, carros[index], relatorio));
})


//console.log(start.podio(relatorio))
//ferrari.acelerando0a100(arnaldo, relatorio)
//carrango.acelerando0a100(pedro, relatorio)
// carrango.acelerando0a100(relatorio)



