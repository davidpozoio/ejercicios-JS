let arrayIndice = [1,3,4,5];
let num = 9;
let i = 0;
let j = 0;

while(arrayIndice[i]!=null){
   
    j = i+1;

    while(arrayIndice[j]!= null){

        if(arrayIndice[i]+arrayIndice[j] === num){
            console.log("indices: "+ i.toString() + " " + j.toString());

            break;
        }

        j++;
    }

    i++;
    
}