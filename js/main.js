let adviceNum = document.getElementById('adviceNum')
let advice = document.getElementById('advice')

document.querySelector('.dice').addEventListener('click', showAdvice)

async function showAdvice(){
    const url = 'https://api.adviceslip.com/advice'

    try{
        const response = await fetch(url)
        const data = await response.json()

        adviceNum.innerText = `Advice #${data.slip.id}`
        advice.innerText = `"${data.slip.advice}"`
    } catch(err){
        console.log(err)
    }
}

showAdvice()