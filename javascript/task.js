function task(check,box){
    let a=document.getElementById(check);
    let b=document.getElementById(box);
    if(b.checked==true){
      a.style.textDecoration="line-through";
    }else{
        a.style.textDecoration="none";

    }

}
