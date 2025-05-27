function soma(n1:number,n2:number):number{
    return n1+n2+4
}

function calculaMedia(notas:number[]):number{
    const total = notas.reduce((acc,nota)=>{return acc+nota},0)
    return Number((total/notas.length).toFixed(2))
}
console.log( calculaMedia([10,5,7]))