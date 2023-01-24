let arrayConcatenar = [0,2,4,5];
let i = 0;
let j = 0;

while(arrayConcatenar[i]!=null){
    while(arrayConcatenar[j]!=null){
        console.log(arrayConcatenar[i].toString() + arrayConcatenar[j].toString());

        j++;

    }

    i++;
    j = 0;
}