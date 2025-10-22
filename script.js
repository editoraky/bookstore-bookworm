"use strict";

let books = [
	{
		"name": "Die Geheimnisse des Ozeans",
		"author": "Clara Meer",
		"likes": 1250,
		"liked": true,
		"price": 19.99,
		"publishedYear": 2018,
		"genre": "Fantasy",
		"comments": [
			{
				"name": "Leser123",
				"comment":
					"Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
			},
			{
				"name": "Bookworm84",
				"comment":
					"Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
			},
			{
				"name": "FantasyFanatic",
				"comment":
					"Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
			},
			{
				"name": "SciFiGuru",
				"comment":
					"Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
			},
			{
				"name": "NovelLover",
				"comment":
					"Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
			},
		],
	},
	{
		"name": "Der vergessene Pfad",
		"author": "Maximilian Schwarz",
		"likes": 980,
		"liked": false,
		"price": 14.5,
		"publishedYear": 2021,
		"genre": "Fantasy",
		"comments": [],
	},
	{
		"name": "Die Farben des Himmels",
		"author": "Laura Blau",
		"likes": 1520,
		"liked": true,
		"price": 22.95,
		"publishedYear": 2019,
		"genre": "Romantik",
		"comments": [
			{
				"name": "LeserPeter",
				"comment":
					"Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
			},
			{
				"name": "BookLover21",
				"comment":
					"Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
			},
			{
				"name": "FantasyNerd",
				"comment":
					"Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
			},
			{
				"name": "SciFiEnthusiast",
				"comment":
					"Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
			},
			{
				"name": "ReadingAddict",
				"comment":
					"Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
			},
		],
	},
	{
		"name": "Das Rätsel der Zeit",
		"author": "Alexander Weiss",
		"likes": 750,
		"liked": false,
		"price": 18.0,
		"publishedYear": 2020,
		"genre": "Science-Fiction",
		"comments": [
			{
				"name": "BuchKenner",
				"comment":
					"Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
			},
			{
				"name": "LeseWurm",
				"comment":
					"Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
			},
		],
	},
	{
		"name": "Der letzte Wächter",
		"author": "Sabine Grün",
		"likes": 1300,
		"liked": true,
		"price": 16.75,
		"publishedYear": 2017,
		"genre": "Fantasy",
		"comments": [],
	},
	{
		"name": "Im Schatten des Mondes",
		"author": "Philipp Silber",
		"likes": 890,
		"liked": false,
		"price": 12.3,
		"publishedYear": 2022,
		"genre": "Science-Fiction",
		"comments": [
			{
				"name": "BücherLiebhaber",
				"comment":
					"Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
			},
			{
				"name": "Leseratte",
				"comment":
					"Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
			},
		],
	},
	{
		"name": "Jenseits der Sterne",
		"author": "Oliver Schwarz",
		"likes": 1450,
		"liked": true,
		"price": 21.0,
		"publishedYear": 2015,
		"genre": "Science-Fiction",
		"comments": [
			{
				"name": "Leser123",
				"comment":
					"Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
			},
		],
	},
	{
		"name": "Das verborgene Königreich",
		"author": "Elena Gold",
		"likes": 920,
		"liked": false,
		"price": 17.5,
		"publishedYear": 2020,
		"genre": "Fantasy",
		"comments": [
			{
				"name": "Bookworm92",
				"comment":
					"Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
			},
		],
	},
	{
		"name": "Liebe in Zeiten des Krieges",
		"author": "Emilia Rot",
		"likes": 1800,
		"liked": true,
		"price": 19.99,
		"publishedYear": 2016,
		"genre": "Romantik",
		"comments": [
			{
				"name": "Bibliophile23",
				"comment":
					"Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
			},
			{
				"name": "StorySeeker",
				"comment":
					"Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
			},
			{
				"name": "SciFiExplorer",
				"comment":
					"Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
			},
		],
	},
];

let savedBooks = localStorage.getItem("books");
if (savedBooks) {
	books = JSON.parse(savedBooks);
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

function getHTMLForBooks(indexBooks) {
	return `<div class="card">
                    <h2 class="bold">${books[indexBooks].name}</h2>
                    <div class="card-content">
                        <p class="author-row">
  						<span class="bold">Autor:</span> ${books[indexBooks].author}
  						<div class="like">	
							<img class="heart-icon" id="heart${indexBooks}" 
       						src="${
									books[indexBooks].liked === true
										? "./assets/imgs/heart-filled.png"
										: "./assets/imgs/heart-empty.png"
								}"}
       						onclick="toggleLike(${indexBooks})"
       						alt="Like Button">
  							<span id="likes-count${indexBooks}">${books[indexBooks].likes}</span>
						</div>
						</p>
                        <p><span class="bold">Preis:</span> ${books[
									indexBooks
								].price
									.toFixed(2)
									.replace(".", ",")} €</p>
                        <p><span class="bold">Veröffentlichung:</span> ${
									books[indexBooks].publishedYear
								}</p>
                        <p><span class="bold">Genre:</span> ${
									books[indexBooks].genre
								}</p>
                        <button id="btn${indexBooks}" class="dropdown-btn" onclick="toggleComments(${indexBooks})">
                        	Kommentare anzeigen
                        </button>
                        <ul id="ul${indexBooks}" class="comments-list hidden">
  							<li class="comment-form">
								<input type="text" id="name${indexBooks}" placeholder="Dein Name">
								<textarea id="comment${indexBooks}" placeholder="Dein Kommentar"></textarea>
								<button onclick="addComment(${indexBooks})">Kommentar hinzufügen</button>
  							</li>
						</ul>
                    </div>    
	`;
}

function getHTMLForComments(indexBooks, indexComments) {
	return `
		<li>${books[indexBooks].comments[indexComments].name}: ${books[indexBooks].comments[indexComments].comment}</li>
	`;
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

	// Likes-Zahl aktualisieren
	document.getElementById(`likes-count${indexBooks}`).textContent =
		books[indexBooks].likes;
	
	localStorage.setItem("books", JSON.stringify(books));

}

function addComment(indexBooks) {
	let newCommentName = document.getElementById(`name${indexBooks}`).value;
	let newCommentText = document.getElementById(`comment${indexBooks}`).value;

	if (newCommentName.trim() !== "" && newCommentText.trim() !== "") {

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
	} else {
		console.log("Bitte füllen Sie beide Felder aus!");
	}

}