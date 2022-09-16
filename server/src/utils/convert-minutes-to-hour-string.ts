
//1080 -> ["18:00"]
export function convertMinutesToHourString(minutesAmount: number){
    const hours = Math.floor(minutesAmount / 60) //pegando os minutos, pra saber quantas horas e arredondando pra baixo

    const minutes = minutesAmount % 60 //Pegando o resto da divisão pra saber os minutos que sobraram

    return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`
}