var readlineSync=require("readline-sync");
var user=readlineSync.question("enter anything  ")
var list2=[];
var i=0;
while (i<user.length){
    list2.push(user[i])
    i=i+1
}
s=list2
console.log(s)
var i=s.length;
var list1=[];
while (i>0){
    m=s[i-1]
    i=i-1
    list1.push(m)

}
console.log(list1)
store=list1
if (JSON.stringify(s)===JSON.stringify(store)){
    console.log("it is palindrom")
}
else{
    console.log("it is not palindrom")
}

