var weight = [35,38,42,45,43,34,36,41,48,32];
var sum = 0;
var result = 0;
function setup() {
  createCanvas(400,400);
for (var i = 0; i<weight.length; i++){
sum = sum + weight[i];


}

 result = sum/weight.length;


console.log(sum);
console.log(result);

}


function draw() 
{
  background(30);
}

 

