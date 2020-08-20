const foods = {
	Peru: {
		name: [
			'Ceviche',
			'Pollo a la Brasa',
			'Lomo Saltado',
			'Aji de Gallina',
			'Arroz Chaufa',
		],

		image: [
			'https://cdn.tasteatlas.com/Images/Dishes/385f61bf908247b5ac663e6dc3beb95b.jpg?mw=1300',
			'https://cdn.tasteatlas.com/Images/Dishes/f785d68dec86440f84fe510a351b5830.jpg?mw=1300',
			'https://cdn.tasteatlas.com/Images/Dishes/9bdbd996c9354b65b855a9d0f6f0fdfa.jpg?mw=1300',
			'https://cdn.tasteatlas.com/images/dishes/b4748c90658d4d749553075bc0ff18ef.jpg?mw=1300',
			'https://cdn.tasteatlas.com/images/dishes/a6a2596c26dc476596e4aa787c88eb66.jpg?mw=1300',
		],

		url: [
			'https://www.tasteatlas.com/ceviche',
			'https://www.tasteatlas.com/pollo-a-la-brasa',
			'https://www.tasteatlas.com/lomo-saltado',
			'https://www.tasteatlas.com/aji-de-gallina',
			'https://www.tasteatlas.com/arroz-chaufa',
		],
	},
	Spain: {
		name: ['Paella', 'Bocadillos', 'Croquetas', 'Tortilla de Patata', 'Fabada'],
		image: [
			'https://cdn.tasteatlas.com/images/dishes/0b456cded8e245acb83036114c806091.jpg?mw=1300',
			'https://cdn.tasteatlas.com/images/dishes/f5e5c1c03f314ac88ea280c6102d7d09.jpg?mw=1300',
			'https://cdn.tasteatlas.com/images/dishes/b033d24deb024cffb94fdaaa837c9496.jpg?mw=1300',
			'https://cdn.tasteatlas.com/Images/Dishes/9f97f71d4af84228bf7290556613ecec.jpg?mw=1300',
			'https://cdn.tasteatlas.com/images/dishes/73c0cb1f55be4fe088c7d148453cae5c.jpg?mw=1300',
		],
		url: [
			'https://www.tasteatlas.com/paella',
			'https://www.tasteatlas.com/bocadillos',
			'https://www.tasteatlas.com/croquetas',
			'https://www.tasteatlas.com/tortilla-de-patata',
			'https://www.tasteatlas.com/fabada',
		],
	},
	Indonesia: {
		name: ['Satay', 'Soto', 'Karedok', 'Nasi goreng', 'tempeh'],
		image: [
			'https://cdn.tasteatlas.com/images/dishes/49e0e32425aa469b91d926707db3b849.jpg?mw=1300',
			'https://cdn.tasteatlas.com/Images/Dishes/2137ce39b6824bd9acccdc7d804ea2b9.jpg?mw=1300',
			'https://cdn.tasteatlas.com/Images/Dishes/9f7a9966c86a4a19a9391936c970ca4b.jpg?mw=1300',
			'https://cdn.tasteatlas.com/Images/Dishes/6e2f4b8dc63344a0ada44466d738dc86.jpg?mw=1300',
			'https://cdn.tasteatlas.com/Images/Dishes/6e969aaded6c43b9ba8dd76764f802e1.jpg?mw=1300',
		],
		url: [],
	},
};


function popPage(id){
	//select country from id
let country = foods[id]
  //update background photos
  let num = 1
  let i = 1
  for(let img of country.image){
	  let panel = document.querySelector(`.panel${num}`);
	  panel.style.backgroundImage = `url("${img}")`
	  num++
  }
  //update DOM with recipe info
  for(let name of country.name){
	let btn = document.querySelector('.dropbtn');  
	let panel = document.querySelector(`.panel${i}`);
	let p = panel.querySelector('p');
	let a = panel.querySelector('a');
	p.textContent = name
	btn.textContent = `Country Selection: ${id}`;
	  name.toLowerCase()
	  name.replace(' ', '-')
	  a.href = `https://www.tasteatlas.com/${name}`;
	  i++;
  }
}

// background panel transformation

const panels = document.querySelectorAll(".panel");

function toggleOpen() {
	this.classList.toggle("open");
}
function toggleActive(e) {
	console.log("Hello");
	if (e.propertyName.includes("flex")) {
		this.classList.toggle("open-active");
	}
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>panel.addEventListener("transitionend", toggleActive));

