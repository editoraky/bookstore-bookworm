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
								<input class="name-area" type="text" id="name${indexBooks}" placeholder="Dein Name">
								<textarea class="comment-area" id="comment${indexBooks}" placeholder="Dein Kommentar"></textarea>
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
