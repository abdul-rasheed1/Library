


function Book(title,author,page){
	this.title = title;
	this.author = author;
	this.page = page;
}


const libArr = [];


function addBookToLib(){
	const tytl = document.querySelector("#title").value;
	const auth = document.querySelector("#auth").value;
	const pag = document.querySelector("#pag").value;
	const book = new Book(tytl,auth,pag);
	libArr.push(book);
	//console.log(libArr[0]);
}

let countcheck = 0;

function displaylib(){

for(let i = 0; i < libArr.length ; i++){
	if (i == countcheck){
	let {title:titletxt,author:authtxt,page:pagetxt} = libArr[i];
	let titletxtnd = document.createTextNode(`Title : ${titletxt}`);
	let authtxtnd = document.createTextNode(`Author: ${authtxt}`);
	let pagetxtnd = document.createTextNode(`Pages: ${pagetxt}`);


	titlelmnt = document.createElement("h5");
	authelmnt = document.createElement("h5");
	pagelmnt = document.createElement("h5");
	let bookcard = document.createElement('div');



	titlelmnt.appendChild(titletxtnd);
	authelmnt.appendChild(authtxtnd);
	pagelmnt.appendChild(pagetxtnd);
	bookcard.appendChild(titlelmnt);
	bookcard.appendChild(authelmnt);
	bookcard.appendChild(pagelmnt);
	shelf.appendChild(bookcard);
	countcheck++;



	//console.log(titletxtnd);
}
}
}

const open    = document.getElementById('open-dialog');
const dialoge = document.getElementById('dialo');
const close = document.getElementById('clo');

const shelf = document.querySelector('.shelf');


open.addEventListener('click',  () => { dialoge.showModal();}
);

close.addEventListener('click', () => { dialoge.close();});

const bookform = document.querySelector('#book-info-form');






bookform.addEventListener('submit', (event) => {
	event.preventDefault();
	addBookToLib();
	displaylib();
	
});


