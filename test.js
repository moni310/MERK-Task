
const a = ["m",2,"r",6,"z","e","f",4,5,"g"]
// output = [2,4,5,"m","r","z","e","f","g"]
const newArr =[];
const newArr1=[];
for (let i=0;i<a.length;i++){
    console.log(typeof(a[i]),"m--")
    if(typeof(a[i]) =='number'){
        newArr.push(a[i])
    }
    else{
       newArr1.push(a[i])
    }
}
const data =[...newArr,...newArr1]
console.log(data);