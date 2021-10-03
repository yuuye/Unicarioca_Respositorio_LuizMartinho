import Veiculo from "./Veiculo.js";
import Piloto from './Piloto.js';
import api from './api.js';


class Corrida {

    largada(pilotos, carro, relatorio) {
        this.pilotos = pilotos.nome
        this.carro = carro.modelo

        return carro.acelerando0a100(pilotos, relatorio)

    }

    podio(relatorio) {


        if (relatorio.length == Veiculo.totalVeiculosCorrida) {
            for (let i = 0; i < Veiculo.totalVeiculosCorrida; i++) {
                console.log(`${relatorio[i]} é o ${i + 1}° colocado`)
            }
        }
    }

    recorde() {


    }
}
export default Corrida




