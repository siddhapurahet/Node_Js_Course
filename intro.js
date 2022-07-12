/*
--> To know current version
    node --version
--> to ru n particular file
    node appname

----------GLOBALS----------
--> __dirname - path to current directory.
--> __filename - file name.
--> require - function to use modules.
--> module - info about current module.
--> process - info about env where the program is being executed.    
*/

const num = 7;
if(num < 10){ 
    console.log("less than 10");
}
else if(num >= 10 || num <= 20){
    console.log("Between 10 and 20");
}
else{
    console.log("More then 20");
}

setInterval(() => {
    console.log("Het")
}, 1000)

const intro = (name) => {
    console.log(`My name is ${name}`);
}

intro('King');
intro("Queen");