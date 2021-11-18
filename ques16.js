var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var i=0;
var s=0;
var s1=0;
for (i of elements){
    if (i%2 ==0){
        s=s+i
    }
    else{
        s1=s1+i
    }

}
console.log("even sum = " ,s,"\noddsum = ",s1)