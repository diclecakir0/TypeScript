
// Fpnksiyonlarda tür tanımlaması,fonksiyonun parametrelerinin ve döndüreceği (return) verilerin türünü tanımlamaktan ibarettir.
function toplamaFonksiyonu(a: number, b: number): string {
  return "Toplama Sonucu:" + (a + b);
}

console.log(toplamaFonksiyonu(5, 10));

// Optional (isteğe bağlı) parametreler, yani girilmesi veya girilmemesi önemli olmayan parametrelerdir.
const useTemp = (location: string, degree: number, type: "C" |"F"): string => {
	  return `Merhabalar, ${location} konumunda hava sıcaklığı ${degree} ${type} derecedir.`;
}

console.log(useTemp("İstanbul", 25, "C"));


// Default (varsayılan) parametreler

// parametreye değer verilmediğinde otomatik olarak alacağı değeri belirtmiş oluruz, bu sayede her parametreyi vermek zorunda kalmayız.
// Eğer parametree değer girilirse o değeri kullanılır, girilmezse varsayılan değeri kullanılır.

const selamla = (name: string="kullanıcı"): void => {
	console.log(`Merhaba ${name}, sisteme hoşgeldiniz.`);
}

selamla("Furkan");



// Interface/type kullanarak birden fazla benzer fonksiyonu (parametreleri ve return değerleri aynı olan)
// kod tekrarına düşmeden belirleyip kullanabiliriz.

interface Hesaplama{
	(x: number, y:number): number;
}

const toplama : Hesaplama = (a, b) => a + b;

const cikarma: Hesaplama = (a, b) => a - b;

const carpma: Hesaplama = (a, b) => a * b;

const bolme: Hesaplama = (a, b) => a / b;


// Rest (geri kalan hepsi) parametreleri, parametre sayısı belli olmayan (esnek olan) fonksiyonlar oluştururken işe yarar.
// rest parametresini (sayısı belli olmayan parametre) ... operatörünü kullanırız.

const hepsiniTopla = (...numbers: number[]): number => {

	return numbers.reduce((toplam,suankiDeger) => (
		toplam + suankiDeger
	), 0)
} 

console.log(hepsiniTopla(1,2,3));

// Jenerik (generic) fonksiyonlar
// fonksiyonun döndüreceği eleman türünün bizzat fonksiyon çağrılırken, kullanıcı tarafından belirlendiği fonksiyon türüdür.
// Fonksiyonun parametreler kısmının öncesine < > işaretleri arasında jenerik tip belirlenebilir. 

	const geriDöndür = <T>(değer:T):T => {
		return değer;
	}
    console.log(geriDöndür<string>("Merhaba")); // Merhaba


	//-------------------


	const ilkElemaniGetir = <T>(dizi:T[]):T => {
		return dizi[0];
	}
	console.log(ilkElemaniGetir([1,2,3])); // 1

	
	//-------------------
	// Kullanıcının girdiği verinin türüne göre, geri döndürülecek verinin türünü anlayabilen fonksiyon.

	const geriDöndür2 = (değer:any):any => {
	return değer;
	}

	console.log(geriDöndür2("Merhaba")); // Merhaba
