let arraySinRepiticion = [0,2,4,5];
let i = 0;
let j = 0;

while(arraySinRepiticion[i]!=null){
    while(arraySinRepiticion[j]!= null){
        console.log(arraySinRepiticion[i].toString() + arraySinRepiticion[j].toString());

        j++;

    }

    i++;
    j = i+1;

}