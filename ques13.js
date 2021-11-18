var marks = [[78, 76, 94, 86, 88], [91, 71, 98, 65, 76], [95, 45, 78, 52, 49]];
var s=0;
for( i of marks ){
    for (j of i)
    s=s+j
}
console.log(s)
