let myMap = new Map();
myMap.set('name', 'Сергей');
myMap.set('age', '23')

myMap.forEach((value, key) => {
	console.log(`Ключ - ${key}, Значение - ${value}`);
  });

