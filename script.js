let weight=Number(document.querySelector('#weight').innerHTML)

let age=Number(document.querySelector('#age').innerHTML)

let bmiResult=()=>{
    let height=Number(rangeValue.innerText/100)
    let result=weight/(height**2)
    let resultShow=document.querySelector('#resultShow')
    resultShow.innerHTML=result
}
document.querySelector('#calculate').addEventListener('click',()=>{
   bmiResult()


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
