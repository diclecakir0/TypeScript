
/*
	Any bir veri tipinin belli olmadığı zaman kullanılabilir.
	Kullanımı TypeScript kurallarına aykırıdır.
	Sadece geçici ve acil kodlama durumlarında kullanılabilir.
*/

let bilinmeyenDeger: any;

bilinmeyenDeger = 5;
bilinmeyenDeger = "Merhaba";
bilinmeyenDeger = true;
bilinmeyenDeger = [1, 2, 3];
bilinmeyenDeger = { isim: "Ali" };
bilinmeyenDeger = null;
bilinmeyenDeger = undefined;

