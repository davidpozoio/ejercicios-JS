let arrayImpar = [1,2,3,4,5,6,7,7];
let contImpar = 0;
let i = 0;

while(arrayImpar[i]!= null){
    if(arrayImpar[i] % 2 == 1){
        contImpar++;
    }
    
    i++;
}

console.log("numero de impares: "+contImpar);
