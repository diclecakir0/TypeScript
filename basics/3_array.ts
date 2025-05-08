/*
	dizi(array) tanımlarken diğer tanımlamalardan farklı olarak dizinin içerisindeki elemanları tipini söyleriz, 
	ardından bu elemanları tutan bir dizi olduğunu söylemek için sonuna [] koyarız.
*/

// students dizisi, içinde string tarzında değerler tutan bir dizi
const students : string[] = ["Dicle", "Hazbiye", "Çakır"]; 

// bütün dizi methodları da dizinin tipini dikkate almak zorundadır

// students.push(true) --> hatalı
// students.push(23) --> hatalı

const ages: number[] = [23, 25, 54];

// ages.push("Dicle") --> hata verir, çünkü string tarzında değeri number dizisine koyamazsın

const licenses: boolean[] = [true, false, true];

//normalde dizilerin tek tip eleman barındırmasını bekleriz fakat bazı durumlarda birden fazla veri tipi oluşması gerekebilir bunu da union type (birleşik veri tipi) kullanarak çözebiliriz.

const newUsers: (string | number)[] = ["Dicle", "Çakır", 25];

const usernamae: string|number = "Dicle";