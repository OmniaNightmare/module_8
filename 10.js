let x = +prompt('Введите число от 1 до 1000: ');

if(x <= 0 || x > 1000 || x =='' ||isNaN(x)){
	console.log('Вы ввели неверные данные');
}else if(x == 1 || x == 2){
	console.log('Простое число');
}else if(x % 3 == 0 || x % 2 == 0){
	console.log('Сложное число');
}else{
	console.log('Простое число');
}
