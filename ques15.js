var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var i=0;
var c=0;
for (i of elements){
    if (i%2!=0){
        c=c+1
    }
}
console.log(c)
