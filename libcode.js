


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
	let buttond = document.createTextNode(`remove book`);


	titlelmnt = document.createElement("h5");
	authelmnt = document.createElement("h5");
	pagelmnt = document.createElement("h5");
	let bookcard = document.createElement('div');
	let button = document.createElement("button");
	button.setAttribute(`id`,`${i}`);
	button.setAttribute(`class`, `remove`);
	//console.log(bookcard.getAttribute('class'));



	titlelmnt.appendChild(titletxtnd);
	authelmnt.appendChild(authtxtnd);
	pagelmnt.appendChild(pagetxtnd);
	button.appendChild(buttond);
	bookcard.appendChild(titlelmnt);
	bookcard.appendChild(authelmnt);
	bookcard.appendChild(pagelmnt);
	bookcard.appendChild(button);
	shelf.appendChild(bookcard);
	countcheck++;



	//console.log(titletxtnd);
}
}
}


/*let book_to_remove = document.querySelector('.remove'); 

function remove_book(){
	let item_no = book_to_remove.getAttribute("id");
	parseInt(item_no);
	libArr.splice(item_no,1);

}
*/

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

shelf.addEventListener('click', (event) => {
	let elmnt = event.target;
	if (elmnt.textContent == "remove book"){
		let no = elmnt.id;
		let real = parseInt(no);
		console.log(no);
		libArr.splice(real,1);
		let no_in_dom = real + 1;
		shelf.removeChild(shelf.childNodes[no_in_dom]);
		countcheck--;
		let button_arr = document.querySelectorAll('.remove');
		for (let r=0;r < button_arr.length; r++){
			button_arr[r].setAttribute('id',`${r}`);
		}
	}

});

//book_to_remove.addEventListener('click',remove_book());
