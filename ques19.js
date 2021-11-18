var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100];
var c=0;
var c1=0;
var c2=0;
for (i of kitna_paisa_hai){
    if (i>=10000000){
        c=c+1
    }
    else if (i>=100000){
        c1=c1+1
    }
    else if (i<100000){
        c2=c2+1
    }
}
console.log("carorpati",c,"\nlakhpati=",c1,"\n dilwale=",c2)
