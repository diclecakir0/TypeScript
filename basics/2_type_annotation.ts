/*
	Type Annotation(Tür Belirleme):

	JavaScript'te değişkenlerin türünü belirlemek için hiçbir özellik bulunmamamaktadır dolayısıyla:

	Örnek: String olarak belirlenmiş bir deişkene sonrasında numder ataması yapılabiliyor, bu da ileride daha büyük sorunlara yol açabiliyor.

	TypeScript'te ise değişkenlerin türünü tanımlayabiliyoruz, bunu yapmak için değişkenin isminin sonuna : koyup type'ın adını belirtiyoruz.

*/

var surename: string = 'Dicle';

 
/*
	JS VERİ TÜRLERİ

	-String
	-Number
	-Boolean
	-Array
	-Object
	-Functions
	-Null
	-Undefined
	-NaN
*/

 let name2: string = 'Dicle';

 let ehliyetVarMi: boolean = true;

 let newStudent: object = {
	 name: 'Dicle',
	 age: 23,
	 ehliyet: true
 }

 let value: null = null;

 let value2: undefined = undefined;

 