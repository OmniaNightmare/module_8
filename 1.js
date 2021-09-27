let a = +prompt('Напишите');

if(isNaN(a) || ""){
    console.log('Упс, кажется, вы ошиблись');
}else{
    let b;
    b = a;
    console.log('Число');
    if(b % 2 == 0){
        console.log('Число четное');
    }else{
        console.log('Число нечетное');
    }
}
console.log(typeof(a));




