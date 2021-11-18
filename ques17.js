var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var i=0;
var s=0;
var s1=0;
var c1=c=0;
for (i of elements){
    if (i%2 ==0){
        s=s+i
        c1=c1+1
    }
    else{
        s1=s1+i
        c=c+1
    }
}
av_odd=s/c
av_even=s1/c1
console.log("average_odd = " ,av_odd,"\n average_even = ",av_even)