const countkavalue=document.querySelector('#counter');

const increment=()=>{
    //since countkavalue is in string we convert into int using parseint
    let value= parseInt(countkavalue.innerHTML);
    //updating the value
    value=value+1;
    //set the value onto ui
    countkavalue.innerHTML=value;
};

const decrement=()=>{
    //since countkavalue is in string we convert into int using parseint
    let value= parseInt(countkavalue.innerHTML);
    //updating the value
    value=value-1;
    //set the value onto ui
    countkavalue.innerHTML=value;
};