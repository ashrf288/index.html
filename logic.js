// this is my first jaca script file 


var name =  prompt("what is you name ? ");

alert("hello " + name);

var pizzaSlice =  prompt("how many slices of pizza you want from (1-6) ? ");




order();

function order (){
  // if user inputed a num more than 6
while(pizzaSlice > 6){
  alert ('plz enter a reasonable number');
  pizzaSlice =  prompt("how many slices of pizza you want ? ");
  
} 
// if user inputed a num less than zero
while(pizzaSlice <= 0){
  alert ('plz enter a reasonable number');
  pizzaSlice =  prompt("how many slices of pizza you want ? ");
  
}
// if user inputed a num between 1-6 
while (pizzaSlice <= 6){
for (var i =0; pizzaSlice >i;i++){
  if(pizzaSlice==0){
  
    break;
  }

   document.write("<h2>" + 'slice number' + ' ' + (i+1)+' here you go'+"</h2>");
    document.write('<img src="https://img.huffingtonpost.com/asset/57c98304170000192ac7736c.jpg"/>');
}
 break;

}

}

 





