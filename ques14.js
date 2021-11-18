var number = 30;
var list1=[];
var n = [10, 11, 12, 13, 14, 17, 18, 19];
for ( i of n){
    for (j of n){
        if (i+j===number){
            list1.push([i,j])


        }
    }
}
console.log(list1)