// Parameter Closure

// const calculate=()=>{
//     let balance=1000

// const inner=(value)=>{

//     balance+=value
//     // console.log('adding',adding);
//     console.log('balance',balance);
    
// }
// return inner

// }

// const addingData=calculate()
// addingData(1000)
// addingData(5000)
// addingData(1000)


const calculate=()=>{
    let balance=10000

    const inner=(value)=>{
        balance-=value
        console.log('balance',balance);   
    }
    return inner   
}

const subtractingData=calculate()
subtractingData(1000)
subtractingData(1000)
subtractingData(1000)


const addtoCart=()=>{
    let cart=
    const inner=(value)=>{
        balance-=value
        console.log('balance',balance);   
    }
    return inner   
}

const subtractingData=calculate()
subtractingData()
subtractingData(1000)
subtractingData(1000)
