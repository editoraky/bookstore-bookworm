"use strict";

function init() {
	let savedBooks = localStorage.getItem("books");
	
	if (savedBooks) {
		books = JSON.parse(savedBooks);
	}

	renderBooks();
}

function renderBooks() {
	let contentRef = document.getElementById("books-container");

	for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
		contentRef.innerHTML += getHTMLForBooks(indexBooks);
		let ulRef = document.getElementById(`ul${indexBooks}`);
		for (
			let indexComments = 0;
			indexComments < books[indexBooks].comments.length;
			indexComments++
		) {
			ulRef.innerHTML += getHTMLForComments(indexBooks, indexComments);
		}
	}
}

function toggleComments(indexBooks) {
	let ulRef = document.getElementById(`ul${indexBooks}`);
	let btnRef = document.getElementById(`btn${indexBooks}`);

	ulRef.classList.toggle("hidden");

	if (ulRef.classList.contains("hidden")) {
		btnRef.textContent = "Kommentare anzeigen";
	} else {
		btnRef.textContent = "Kommentare verbergen";
	}
}

function toggleLike(indexBooks) {
	if (books[indexBooks].liked === false) {
		books[indexBooks].liked = true;
		books[indexBooks].likes += 1;
	} else {
		books[indexBooks].liked = false;
		books[indexBooks].likes -= 1;
	}

	let heartImg = document.getElementById(`heart${indexBooks}`);
	heartImg.src =
		books[indexBooks].liked === true
			? "./assets/imgs/heart-filled.png"
			: "./assets/imgs/heart-empty.png";

	document.getElementById(`likes-count${indexBooks}`).textContent =
		books[indexBooks].likes;
	
	localStorage.setItem("books", JSON.stringify(books));

}

function addComment(indexBooks) {
	let newCommentName = document.getElementById(`name${indexBooks}`).value;
	let newCommentText = document.getElementById(`comment${indexBooks}`).value;

	if (newCommentName.trim() === "" || newCommentText.trim() === "") {
		alert("Bitte füllen Sie beide Felder aus!");
		return;
	}

		let newCommentObject = {
			"name": newCommentName,
			"comment": newCommentText
		};
		books[indexBooks].comments.unshift(newCommentObject);

		document.getElementById(`name${indexBooks}`).value = "";
		document.getElementById(`comment${indexBooks}`).value = "";

		localStorage.setItem("books", JSON.stringify(books));

		let ulRef = document.getElementById(`ul${indexBooks}`);
		ulRef.innerHTML = `<li class="comment-form">
  		<input type="text" id="name${indexBooks}" placeholder="Dein Name">
  		<textarea id="comment${indexBooks}" placeholder="Dein Kommentar"></textarea>
  		<button onclick="addComment(${indexBooks})">Kommentar hinzufügen</button>
		</li>`;
		for (let i = 0; i < books[indexBooks].comments.length; i++) {
			ulRef.innerHTML += getHTMLForComments(indexBooks, i);
		}
	} 