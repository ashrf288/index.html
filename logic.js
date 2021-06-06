// // this is my first jaca script file 


let name =  prompt("what is you name ? ");
alert(`cool name ${name}  `)
console.log(name);


let age= prompt (`hi ${name}, so how old are you ?`);
alert(`${age} years  ,  nice  ${name}  your old enough :)`)
  console.log(age);

let pizzaSlice =  prompt(`how many slices of pizza you want ${name} ? from (1-6) `);

order();
alert(`${pizzaSlice} slices, wow seems like your very hungry !`);
console.log (pizzaSlice);

let notes= prompt(`${name} do you have any notes  with the order 
(if not simply type none) ?`);
console.log(notes);

alert(`so your name is ${name} , and your ${age} years old
and you want ${pizzaSlice} slices,  and your notes are : ${notes}?`);



function order (){
  // if user inputed a num more than 6


while(pizzaSlice > 6){
  alert ('plz enter a reasonable number');
  pizzaSlice =  prompt("how many slices of pizza you want ? ");
  

} 
// if user inputed a num less than 0
}

while(pizzaSlice <= 0){
  alert ('plz enter a reasonable number');
  pizzaSlice =  prompt("how many slices of pizza you want ? ");
  
}

// if user inputed a num between 1-6 

while (pizzaSlice <= 6){
  
for (let i =0; pizzaSlice >i;i++){

   document.write("<h2>" + 'slice number' + ' ' + (i+1)+' here you go'+"</h2>");
    document.write('<img src="https://img.huffingtonpost.com/asset/57c98304170000192ac7736c.jpg"/>');  

   
}

document.write(` <h3>hope  you enjoy your meal  ${name} </h3>`);
 break;


}


