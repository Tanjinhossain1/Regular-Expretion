
const chekValid = (id, styles) =>{
    document.getElementById(id).style.display = styles;
}
const goNext =() =>{
    const input = document.getElementById('input');
    const url = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.value.match(url)){
        chekValid('valid', 'block')
        chekValid('not-valid', 'none')
    }else{
       chekValid('not-valid', 'block')
       chekValid('valid', 'none')
    }
}