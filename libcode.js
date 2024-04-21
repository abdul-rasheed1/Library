


function Book(title,author,page,read){
	this.title = title;
	this.author = author;
	this.page = page;
	this.read = read;
}

Book.prototype.book_status = function(user){
	const read_arr = [`READ`,`IN PROGRESS`,`NOT READ`];
	let status;
	if (user == read_arr[0]){
		this.read = read_arr[1];
		status = read_arr[1];
	}
	else if (user == read_arr[1]){
		this.read = read_arr[2];
		status = read_arr[2];
	}
	else if (user == read_arr[2]){
		this.read = read_arr[0];
		status = read_arr[0];
	}
	//console.log(status);
	return status;
}


const libArr = [];


function addBookToLib(){
	const tytl = document.querySelector("#title").value;
	const auth = document.querySelector("#auth").value;
	const pag = document.querySelector("#pag").value;
	const read_status = document.querySelector('input[name="red"]:checked').value;
	const book = new Book(tytl,auth,pag,read_status);
	libArr.push(book);
	//console.log(read_status);
}

let countcheck = 0;

function displaylib(){

for(let i = 0; i < libArr.length ; i++){
	if (i == countcheck){
	let {title:titletxt,author:authtxt,page:pagetxt,read:readtxt} = libArr[i];
	let titletxtnd = document.createTextNode(`Title  : ${titletxt}`);
	let authtxtnd = document.createTextNode(`Author  : ${authtxt}`);
	let pagetxtnd = document.createTextNode(`Pages   : ${pagetxt}`);
	let readnd = document.createTextNode(`${readtxt}`);
	let buttond = document.createTextNode(`remove book`);



	titlelmnt = document.createElement("h5");
	authelmnt = document.createElement("h5");
	pagelmnt = document.createElement("h5");
	imglmnt = document.createElement('img');
	readlmnt = document.createElement("button");
	
	let book_sub = document.createElement('div');
	let bookSub = document.createElement('div');
	let bookcard = document.createElement('div');
	let button = document.createElement("button");
     
     imglmnt.setAttribute(`src`,`bookmark-outline.svg`);
     imglmnt.setAttribute(`class`,`markimg`);
    readlmnt.setAttribute(`class`,`stat`);
	titlelmnt.setAttribute(`class`,`diptext`);
	authelmnt.setAttribute(`class`,`diptext`);
	pagelmnt.setAttribute(`class`,`diptext`);
	book_sub.setAttribute(`class`,`book-sub`);
	bookSub.setAttribute(`class`, `bookSub`);
	button.setAttribute(`id`,`${i}`);
	button.setAttribute(`class`, `remove`);
	bookcard.setAttribute(`class`,`booktile`);
	//console.log(bookcard.getAttribute('class'));

if (readtxt == `NOT READ`){
			readlmnt.style.backgroundColor = "rgb(173,52,76)";
		
		}
		if (readtxt == `IN PROGRESS`){
			readlmnt.style.backgroundColor = "rgb(251,168,35)";
		}
		if (readtxt == `READ`){
			readlmnt.style.backgroundColor = "rgb(39,206,139)";
		}


	titlelmnt.appendChild(titletxtnd);
	authelmnt.appendChild(authtxtnd);
	pagelmnt.appendChild(pagetxtnd);
	readlmnt.appendChild(readnd);
	button.appendChild(buttond);
	book_sub.appendChild(titlelmnt);
	book_sub.appendChild(authelmnt);
	book_sub.appendChild(pagelmnt);
	bookSub.appendChild(book_sub);
	bookSub.appendChild(imglmnt);

	bookcard.appendChild(bookSub);
	bookcard.appendChild(readlmnt);
	bookcard.appendChild(button);
	shelf_child.appendChild(bookcard);
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
const shelf_child = document.querySelector('.shelf-child');


open.addEventListener('click',  () => { dialoge.showModal();}
);

close.addEventListener('click', () => { dialoge.close();});

const bookform = document.querySelector('#book-info-form');






bookform.addEventListener('submit', (event) => {
	event.preventDefault();
	addBookToLib();
	displaylib();
	
});

shelf_child.addEventListener('click', (event) => {
	let elmnt = event.target;
	if (elmnt.textContent == "remove book"){
		let no = elmnt.id;
		let real = parseInt(no);
		console.log(no);
		libArr.splice(real,1);
		//let no_in_dom = real + 1;
		shelf_child.removeChild(shelf_child.childNodes[real]);
		countcheck--;
		let button_arr = document.querySelectorAll('.remove');
		for (let r=0;r < button_arr.length; r++){
			button_arr[r].setAttribute('id',`${r}`);
		}
	}

	else if (elmnt.className ==`stat`){
		let clas = elmnt.className;
		//let prev = document.querySelector(`.${clas} + button`);
		let prev = elmnt.nextElementSibling.id;
		//console.log(prev);
		let usr = elmnt.textContent;
		//console.log(usr); 
		let real_prev = parseInt(prev);
		console.log(libArr[real_prev]);
		let updated_status = libArr[real_prev].book_status(usr);
		console.log(updated_status);
		elmnt.textContent = updated_status;
		if (updated_status == `NOT READ`){
			elmnt.style.backgroundColor = "rgb(173,52,76)";
		
		}
		if (updated_status == `IN PROGRESS`){
			elmnt.style.backgroundColor = "rgb(251,168,35)";
		}
		if (updated_status == `READ`){
			elmnt.style.backgroundColor = "rgb(39,206,139)";
		}

	}

});

//book_to_remove.addEventListener('click',remove_book());
