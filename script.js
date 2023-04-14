let weight=Number(document.querySelector('#weight').innerHTML)

let age=Number(document.querySelector('#age').innerHTML)

let bmiResult=()=>{
    let height=Number(rangeValue.innerText/100)
    let result=weight/(height**2)
    if(result<18.5&&result>12){
        document.querySelector('.sitution').style.backgroundColor='yellow'
        document.querySelector('.sitution').innerHTML='Underweight'
    }
    else if(result>=18.5&&result<25){
        document.querySelector('.sitution').style.backgroundColor='green'
        document.querySelector('.sitution').innerHTML='Healthy'
    }
    else if(result>=25&&result<30){
        document.querySelector('.sitution').style.backgroundColor='red'
        document.querySelector('.sitution').innerHTML='Overweight'
    }
    else if(result>=30){
        document.querySelector('.sitution').style.backgroundColor='darkRed'
        document.querySelector('.sitution').innerHTML='Obesity'
    }
    else{
        document.querySelector('.sitution').style.backgroundColor='black'
        document.querySelector('.sitution').style.color='white'
        document.querySelector('.sitution').innerHTML='Wrong Input'
    }
    

    let resultShow=document.querySelector('#resultShow')
    resultShow.innerHTML=result
}
document.querySelector('#calculate').addEventListener('click',()=>{
   bmiResult()
   document.querySelector('#result').classList.remove('hidden')
   document.querySelector('.sitution').classList.remove('hidden')

})
document.querySelector('#increase').addEventListener('click',()=>{
    weight+=1
    document.querySelector('#weight').innerHTML=weight
})
document.querySelector('#decrease').addEventListener('click',()=>{
    weight-=1
    document.querySelector('#weight').innerHTML=weight
})
document.querySelector('#plus').addEventListener('click',()=>{
    age+=1
    document.querySelector('#age').innerHTML=age
})
document.querySelector('#mines').addEventListener('click',()=>{
    age-=1
    document.querySelector('#age').innerHTML=age
})
