const number = [16,9,2002,52,32]
let largest = number[0]
for(const num of number){
 if(num > largest){
    largest = num
 }
}
console.log(largest)