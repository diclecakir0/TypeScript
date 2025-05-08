
// normal dizilerde(arraylerde), eleman sıalaması ya da sayısı önemli değildir ve belirtilemez.

// tupleda ise bunlar önemlidir, belirleme sırasında konulan nesnelerden fazlası ya da azı, ya da aynı sıralamayı korumayan nesneler eklenmez.

// içinde değer olmasa bile hata vermez, veya konulan değerlerin sayısı ve sıralaması önem arz etmez.
const colors: string[] = ["red", "green", "blue"];

// iki elemanlı tuple belirledik, ikisi de string ve 2 eleman olmak zorunda
const colorTuple: [string, string] = ["red", "green"];

// biri string biri sayı olan tuple belirledik, sıralama değişirse hata verir
const newColors: [string, number] = ["red", 1];


type ColorPalette = "red" | "green" | "blue" | "yellow" | "purple" | "orange";

const newColor2: [ColorPalette, number] = ["blue", 1]