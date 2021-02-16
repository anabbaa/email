const validemail =(str)=>{

let at;
let dot;
for (i=0; i <str.length; i++){
if (str[i] === "@")
{
    at = i;
}

if (str[i] === "."){
    dot = i;
}}

if (at > 0 && dot >  at){
    return   `${str} is valid`;
}
else {
      return  `please enter valid ${str}`;
}
}

console.log(validemail("ahmed@gmail.com"));

const validemail2 =(str)=>{
    
let at = str.indexOf("@");
let dot = str.lastIndexOf(".");

    
    if (at > 0 && dot >  at){
        return   `${str} is valid`;
    }
    else {
          return  `please enter valid ${str}`;
    }
}
    
    console.log(validemail2("ahmed@gmail.com"));
