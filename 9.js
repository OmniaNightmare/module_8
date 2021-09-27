const arr = [4,5,6,'PARAPA',12,6,8,14,'FEFE', null, 32 ];
let z=0;
let k=0;
let str=0;
let nll=0;

let statisitc = () =>{
for (let i=0; i < arr.length; i++){
	if (arr[i] % 2 == 0){
		z=z+1;
		}else{
		k=k+1;
		}
	if(typeof(arr[i]) == 'string'){
	str=str+1;
	}
	if(arr[i] == null){
		nll=nll+1;
		}
}
console.log('Количество строчных элементов в массиве '+str)
console.log('Количество null элементов в массиве '+nll)
console.log('Количество четных элементов в массиве '+z)
console.log('Количество нечетных элементов в массиве '+k)
}

statisitc();
