
const evenNumfinder=(even)=>{
    if(even%2===0){
        return even;
    }
    else{
        return false;
    }

}
console.log(evenNumfinder(39));

const oddNumfinder=(odd)=>{
    if(odd%2!==0){
        return odd;
    }
    else{
        return false;
    }

}
console.log(oddNumfinder(39));

