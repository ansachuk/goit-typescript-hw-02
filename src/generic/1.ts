/*
Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

const getPromise = (): Promise<Array<string | number>> =>
	new Promise(resolve => {
		// resolve(["Text", 50]);
		resolve(["Text", 50]);
	});

getPromise().then(data => {
	console.log(data);
});

export {};
