let arr =[2,4,3,32]

function mul(n){
    return n*2;
}

const map1=arr.map((x)=>x*2);

console.log(map1);


function filterLogic(n){
    if(n%2==0){
        return true
    }else{
        return false;
    }
}

const result = arr.filter(filterLogic)
console.log(result)