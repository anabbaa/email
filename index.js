

const validemail3 =(str)=>{
    let at;
    let dot;
     str.split("").map((item,index)=> item === "@" ? at = index: null);

     str.split("").map((item, index)=> item === "." ? dot = index: null);
    console.log(dot);
    if (at > 0 && dot > at ){
        return "its valid email"
    }
    else {
        return "please enter valid email";
    }
}
console.log(validemail3("ahmes@gmail.com"));