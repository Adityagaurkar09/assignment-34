const number = [2,5,10,13,25,40]
let sum = 0;
for(i=0; i<number.length; i++){
    if(number[i]%2==1){
        sum+=number[i]
    }
}
console.log(sum)