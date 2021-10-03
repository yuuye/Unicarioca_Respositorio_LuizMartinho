let posicao = []
let tempos = []
let servidorOnline = true;
const chegada = (piloto) => {
  return new Promise((resolve, reject) => {
    if (!servidorOnline) reject('servidor Offline')
    posicao.push(piloto)
    resolve(posicao)


  })
}

const recorde = () => {
  return new Promise((resolve, reject) => {
    if (!servidorOnline) reject('servidor Offline')
    resolve(posicao[0])
  })
}

const diferencaTempo = (feedback) => {
  return new Promise((resolve, reject) => {
    if (!servidorOnline) reject('servidor offilne')
    tempos.push(feedback)
    resolve(tempos)
  })
}

export default {
  'api/v1/chegada': chegada,
  'api/v1/recorde': recorde,
  'api/v1/diferencaTempo': diferencaTempo
}