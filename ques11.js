var user=["n","i","t","i","n"];
var i=user.length;
var list1=[];
while (i>0){
    m=user[i-1]
    i=i-1
    list1.push(m)

}
store=list1
if (JSON.stringify(user)==JSON.stringify(store)){
    console.log("it is palindrom")
}
else{
    console.log("it is not palindrom")
}











