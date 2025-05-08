/*
		Typescript, JavaScript'in önemli açıklarını düzeltmek için Microsoft tarafından geliştirilen
		bir programlama dilidir.

		1) JavaScript'te tanımlanan bir değişkene(loose type) her türde değer ataması yapılabilir.
		2) Jaascript'te otomatik tanımlama özelliği yoktur.
		3) Javascript'te kodu çalıştırmadan hataları görmek mümkün değildir.
		4) TypeScript, JavaScript'in alt dalı olduğu için, JavaScript çalışan her yerde TypeScript de 		çalışır.

		TypeScript kodu doğrudan çalışamaz, önce JavaScript'e derlenmesi gerekir.

		1) tsc => TypeScript Compiler
		Yazdığınız .ts kodunu .js'ye çevirir ve dosya olarak saklar ama yürütmez. ardından bunu .js yürütmeye yarayan node komutuyla çalıştırabilirsiniz.

		2) ts-node => TypeScript Node Execution

		Yazdığınız .ts kodunu hafızada geçici olarak .js'ye çevirir ve yürütür.
		Dolayısıyla depolamada .js kodu oluşmasa bile yürütülmesi için yine .js'ye geçici olarak çevirilr.
*/

const student = {
	id: 1,
	name: 'Dicle',
	grade: 90,
}

console.log(student.grade); // 90