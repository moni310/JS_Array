var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var i=0;
var b=0;
while (i<numbers.length){
    if (numbers[i]>b){
        b=numbers[i]
    }
    i++
}
var store=b;
var j=0;
var m=0;
while (j<numbers.length){
    if (b>numbers[j] && numbers[j]>m){
        m=numbers[j]
    }
    j++
}
console.log(m)