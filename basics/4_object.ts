
const updatedUser : {
	id:number,
	name: string,
	surname: string,
	pob: string
} = {
	id:1,
	name:"Dicle",
	surname:"Çakır",
	pob:"Mardin"
} 

type NewObjectType = {
	id: number | string,
	isAdmin: boolean,
	username: string,
	name: string,
	age: number,
	// tür belirlerken ismin sonuna soru işareti koyduğumuzda bu değerin optional(isteğe bağlı) olduğunu belirleriz
	// dolayısıyla ilerleyen zamanda değişken objesi tanımlarken videos değeri koyulsa da koyulmasa da sorun olmuyor.
	videos?: (number|string)[],
}
 
const newAdmin : NewObjectType ={
	id: 2,
	isAdmin: true,
	username: "dicle",
	name: "Dicle",
	age: 23,
	videos: [1,2,3,4]
}

type UserValues = {
	id: 1 | 2,
	username: string,
	// geliştirici olarak bize uygulamanın sadece ankara istanbul izmir ve antalyada geçerli olduğu bildirildi,
	// bu durumda genel olarak bütün stringleri kabul etmek bize sorun açar
	city: "Ankara" | "İstanbul" | "İzmir" | "Antalya",
}

const newUser:UserValues = {
	id:1,
	username:"dicle",
	city:"Ankara"
}