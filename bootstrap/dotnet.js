const { postRequest, putRequest } = require('./utils.js');

module.exports = dotnetBootstrap;

async function dotnetBootstrap() {
	if (!process.env.DOTNET_URI) {
		throw new Error('Environment variable DOTNET_URI is required');
	}

	console.log('Connecting to: ' + process.env.DOTNET_URI);

	/////////////
	// Authors //
	/////////////

	const author1 = {
		name: 'J.R.R. Tolkien',
		imageUrl: 'https://images.gr-assets.com/photos/1307887634p8/282972.jpg'
	};
	const author2 = {
		name: 'Stephenie Meyer',
		imageUrl: 'https://images.gr-assets.com/authors/1596739281p8/941441.jpg'
	};
	const author3 = {
		name: 'J.K. Rowling',
		imageUrl: 'https://images.gr-assets.com/authors/1596216614p8/1077326.jpg'
	};
	const author4 = {
		name: 'Hugh Howey',
		imageUrl: 'https://m.media-amazon.com/images/S/amzn-author-media-prod/ro08bsma6r4vs3t7g41ro5b1fs._SY600_.jpg'
	};
	const author5 = {
		name: 'Stephen King',
		imageUrl: 'https://static.dw.com/image/40589795_605.jpg'
	};
	const author6 = {
		name: 'Alan Dean Foster',
		imageUrl: 'https://www.nocloo.com/wp-content/uploads/2021/08/Foster-2.jpg'
	};
	const author7 = {
		name: 'George R. R. Martin',
		imageUrl: 'https://images.gr-assets.com/authors/1649011787p8/346732.jpg'
	};
	const author8 = {
		name: 'Frank Herbert',
		imageUrl: 'https://www.historylink.org/Content/Media/Photos/Large/Frank-Herbert-September-27-1982.jpg'
	};
	const author9 = {
		name: 'Gillian Flynn',
		imageUrl: 'https://cdn.britannica.com/75/187875-050-EDF182F9/Gillian-Flynn-American.jpg'
	};
	const author10 = {
		name: 'Ayn Rand',
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Ayn_Rand_%281943_Talbot_portrait%29.jpg/640px-Ayn_Rand_%281943_Talbot_portrait%29.jpg'
	};
	const author11 = {
		name: 'Cormac McCarthy',
		imageUrl: 'https://static01.nyt.com/images/2023/06/21/opinion/19Sinykin/19Sinykin-articleLarge-v2.jpg'
	};

	await postRequest(process.env.DOTNET_URI + 'author', author1);
	await postRequest(process.env.DOTNET_URI + 'author', author2);
	await postRequest(process.env.DOTNET_URI + 'author', author3);
	await postRequest(process.env.DOTNET_URI + 'author', author4);
	await postRequest(process.env.DOTNET_URI + 'author', author5);
	await postRequest(process.env.DOTNET_URI + 'author', author6);
	await postRequest(process.env.DOTNET_URI + 'author', author7);
	await postRequest(process.env.DOTNET_URI + 'author', author8);
	await postRequest(process.env.DOTNET_URI + 'author', author9);
	await postRequest(process.env.DOTNET_URI + 'author', author10);
	await postRequest(process.env.DOTNET_URI + 'author', author11);

	///////////
	// Books //
	///////////

	const book1 = {
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		year: 1954,
		genre: 'Fantasy',
		imageUrl: 'https://m.media-amazon.com/images/I/71Ep7UNeTtL._SY466_.jpg',
		authorId: 1
	};
	const book2 = {
		title: 'The Lord of the Rings: The Two Towers',
		year: 1954,
		genre: 'Fantasy',
		imageUrl: 'https://m.media-amazon.com/images/I/71FXalNQFtL._SY466_.jpg',
		authorId: 1
	};
	const book3 = {
		title: 'The Lord of the Rings: The Return of the King',
		year: 1955,
		genre: 'Fantasy',
		imageUrl: 'https://m.media-amazon.com/images/I/71tDovoHA+L._SY466_.jpg',
		authorId: 1
	};
	const book4 = {
		title: 'Twilight',
		year: 2005,
		genre: 'Romance',
		imageUrl: 'https://m.media-amazon.com/images/I/615ZIxEDozL._AC_UF1000,1000_QL80_.jpg',
		authorId: 2
	};
	const book5 = {
		title: 'New Moon',
		year: 2006,
		genre: 'Romance',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/89/Newmooncover.jpg',
		authorId: 2
	};
	const book6 = {
		title: 'Eclipse',
		year: 2007,
		genre: 'Romance',
		imageUrl: 'https://cdn.kobo.com/book-images/116d04ea-9ed4-48a1-8bcd-b0914a001446/353/569/90/False/eclipse-6.jpg',
		authorId: 2
	};
	const book7 = {
		title: 'Breaking Dawn',
		year: 2008,
		genre: 'Romance',
		imageUrl: 'https://d32vymxhv9fq6b.cloudfront.net/images/books/large/97819/9781907410352.jpg',
		authorId: 2
	};
	const book8 = {
		title: "Harry Potter and the Philosopher's Stone",
		year: 1997,
		genre: 'Fantasy',
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
		authorId: 3
	};
	const book9 = {
		title: 'Harry Potter and the Chamber of Secrets',
		year: 1998,
		genre: 'Fantasy',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg',
		authorId: 3
	};
	const book10 = {
		title: 'Harry Potter and the Prisoner of Azkaban',
		year: 1999,
		genre: 'Fantasy',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg',
		authorId: 3
	};
	const book11 = {
		title: 'Harry Potter and the Goblet of Fire',
		year: 2000,
		genre: 'Fantasy',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png',
		authorId: 3
	};
	const book12 = {
		title: 'Harry Potter and the Order of the Phoenix',
		year: 2003,
		genre: 'Fantasy',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg',
		authorId: 3
	};
	const book13 = {
		title: 'Harry Potter and the Half-Blood Prince',
		year: 2005,
		genre: 'Fantasy',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png',
		authorId: 3
	};
	const book14 = {
		title: 'Harry Potter and the Deathly Hallows',
		year: 2007,
		genre: 'Fantasy',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg',
		authorId: 3
	};
	const book15 = {
		title: 'Wool',
		year: 2012,
		genre: 'Science fiction',
		imageUrl: 'https://m.media-amazon.com/images/I/81qFq9nLjzL._SY466_.jpg',
		authorId: 4
	};
	const book16 = {
		title: 'Shift',
		year: 2013,
		genre: 'Science fiction',
		imageUrl: 'https://m.media-amazon.com/images/I/71MPxl4EhnL._SY466_.jpg',
		authorId: 4
	};
	const book17 = {
		title: 'Dust',
		year: 2013,
		genre: 'Science fiction',
		imageUrl: 'https://m.media-amazon.com/images/I/81m236n9jVL._SY466_.jpg',
		authorId: 4
	};
	const book18 = {
		title: 'It',
		year: 1986,
		genre: 'Horror',
		imageUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/It_%281986%29_front_cover%2C_first_edition.jpg/800px-It_%281986%29_front_cover%2C_first_edition.jpg',
		authorId: 5
	};
	const book19 = {
		title: 'The Mist',
		year: 1980,
		genre: 'Horror',
		imageUrl: 'https://m.media-amazon.com/images/I/81o0PGJsADL._SL1500_.jpg',
		authorId: 5
	};
	const book20 = {
		title: 'The Green Mile',
		year: 1996,
		genre: 'Dark fantasy',
		imageUrl:
			'https://cdn.kobo.com/book-images/bc22717a-ad53-4fba-9e04-660bdcc2f50d/1200/1200/False/the-green-mile.jpg',
		authorId: 5
	};
	const book21 = {
		title: 'Rita Hayworth and Shawshank Redemption',
		year: 1982,
		genre: 'Crime fiction',
		imageUrl: 'https://m.media-amazon.com/images/I/71A3CNcPiqL._SL1500_.jpg',
		authorId: 5
	};
	const book22 = {
		title: 'The Thing',
		year: 1981,
		genre: 'Science fiction',
		imageUrl:
			'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1402379001i/23396.jpg',
		authorId: 6
	};
	const book23 = {
		title: 'A Game of Thrones',
		year: 1996,
		genre: 'Epic fantasy',
		imageUrl: 'https://m.media-amazon.com/images/I/81vel6463aL._SL1500_.jpg',
		authorId: 7
	};
	const book24 = {
		title: 'A Clash of Kings',
		year: 1998,
		genre: 'Epic fantasy',
		imageUrl: 'https://m.media-amazon.com/images/I/81-HH2qXVKL._SL1500_.jpg',
		authorId: 7
	};
	const book25 = {
		title: 'A Storm of Swords',
		year: 2000,
		genre: 'Epic fantasy',
		imageUrl: 'https://m.media-amazon.com/images/I/819o5XLwuFL._SL1500_.jpg',
		authorId: 7
	};
	const book26 = {
		title: 'A Feast for Crows',
		year: 2005,
		genre: 'Epic fantasy',
		imageUrl: 'https://m.media-amazon.com/images/I/71wX5JhAkYL._SL1200_.jpg',
		authorId: 7
	};
	const book27 = {
		title: 'A Dance with Dragons',
		year: 2011,
		genre: 'Epic fantasy',
		imageUrl: 'https://m.media-amazon.com/images/I/71QUe4xT4uL._SL1200_.jpg',
		authorId: 7
	};
	const book28 = {
		title: 'Dune',
		year: 1965,
		genre: 'Science fiction',
		imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632843673-41LmPEurOOL._SL500_.jpg',
		authorId: 8
	};
	const book29 = {
		title: 'Dune Messiah',
		year: 1969,
		genre: 'Science fiction',
		imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1634732650-41BVZ25iOGL._SL500_.jpg',
		authorId: 8
	};
	const book30 = {
		title: 'Children of Dune',
		year: 1976,
		genre: 'Science fiction',
		imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1634732682-51WbGqQFGCL._SL500_.jpg',
		authorId: 8
	};
	const book31 = {
		title: 'God Emperor of Dune',
		year: 1981,
		genre: 'Science fiction',
		imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1634732710-51h3S1fjPDL._SL500_.jpg',
		authorId: 8
	};
	const book32 = {
		title: 'Heretics of Dune',
		year: 1984,
		genre: 'Science fiction',
		imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1634732739-41P-OZ6QBCL._SL500_.jpg',
		authorId: 8
	};
	const book33 = {
		title: 'Chapterhouse: Dune',
		year: 1985,
		genre: 'Science fiction',
		imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1634732766-51InTgeKiHL._SL500_.jpg',
		authorId: 8
	};
	const book34 = {
		title: 'Gone Girl',
		year: 2012,
		genre: 'Thriller',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Gone_Girl_%28Flynn_novel%29.jpg',
		authorId: 9
	};
	const book35 = {
		title: 'The Fountainhead',
		year: 1943,
		genre: 'Philosophical fiction',
		imageUrl: 'https://static.wikia.nocookie.net/the-stone-quarry/images/c/c1/The_Fountainhead_cover.jpg',
		authorId: 10
	};
	const book36 = {
		title: 'The Road',
		year: 2006,
		genre: 'Post-apocalyptic fiction',
		imageUrl: 'https://dboyle93.wordpress.com/wp-content/uploads/2014/05/nl_theroad.jpg',
		authorId: 11
	};

	await postRequest(process.env.DOTNET_URI + 'book', book1);
	await postRequest(process.env.DOTNET_URI + 'book', book2);
	await postRequest(process.env.DOTNET_URI + 'book', book3);
	await postRequest(process.env.DOTNET_URI + 'book', book4);
	await postRequest(process.env.DOTNET_URI + 'book', book5);
	await postRequest(process.env.DOTNET_URI + 'book', book6);
	await postRequest(process.env.DOTNET_URI + 'book', book7);
	await postRequest(process.env.DOTNET_URI + 'book', book8);
	await postRequest(process.env.DOTNET_URI + 'book', book9);
	await postRequest(process.env.DOTNET_URI + 'book', book10);
	await postRequest(process.env.DOTNET_URI + 'book', book11);
	await postRequest(process.env.DOTNET_URI + 'book', book12);
	await postRequest(process.env.DOTNET_URI + 'book', book13);
	await postRequest(process.env.DOTNET_URI + 'book', book14);
	await postRequest(process.env.DOTNET_URI + 'book', book15);
	await postRequest(process.env.DOTNET_URI + 'book', book16);
	await postRequest(process.env.DOTNET_URI + 'book', book17);
	await postRequest(process.env.DOTNET_URI + 'book', book18);
	await postRequest(process.env.DOTNET_URI + 'book', book19);
	await postRequest(process.env.DOTNET_URI + 'book', book20);
	await postRequest(process.env.DOTNET_URI + 'book', book21);
	await postRequest(process.env.DOTNET_URI + 'book', book22);
	await postRequest(process.env.DOTNET_URI + 'book', book23);
	await postRequest(process.env.DOTNET_URI + 'book', book24);
	await postRequest(process.env.DOTNET_URI + 'book', book25);
	await postRequest(process.env.DOTNET_URI + 'book', book26);
	await postRequest(process.env.DOTNET_URI + 'book', book27);
	await postRequest(process.env.DOTNET_URI + 'book', book28);
	await postRequest(process.env.DOTNET_URI + 'book', book29);
	await postRequest(process.env.DOTNET_URI + 'book', book30);
	await postRequest(process.env.DOTNET_URI + 'book', book31);
	await postRequest(process.env.DOTNET_URI + 'book', book32);
	await postRequest(process.env.DOTNET_URI + 'book', book33);
	await postRequest(process.env.DOTNET_URI + 'book', book34);
	await postRequest(process.env.DOTNET_URI + 'book', book35);
	await postRequest(process.env.DOTNET_URI + 'book', book36);

	//////////////////
	// Book Entries //
	//////////////////

	const bookEntry1 = {
		isbn: '9780008376123',
		bookId: '1'
	};
	const bookEntry2 = {
		isbn: '9780547928210',
		bookId: '1'
	};
	const bookEntry3 = {
		isbn: '9780008376123',
		bookId: '1'
	};
	const bookEntry4 = {
		isbn: '9780008376130',
		bookId: '2'
	};
	const bookEntry5 = {
		isbn: '9780547928203',
		bookId: '2'
	};
	const bookEntry6 = {
		isbn: '9780008376130',
		bookId: '2'
	};
	const bookEntry7 = {
		isbn: '9780008376147',
		bookId: '3'
	};
	const bookEntry8 = {
		isbn: '9780547928197',
		bookId: '3'
	};
	const bookEntry9 = {
		isbn: '9780008376147',
		bookId: '3'
	};
	const bookEntry10 = {
		isbn: '9780316160179',
		bookId: '4'
	};
	const bookEntry11 = {
		isbn: '9780316160193',
		bookId: '5'
	};
	const bookEntry12 = {
		isbn: '9780316160209',
		bookId: '6'
	};
	const bookEntry13 = {
		isbn: '9780316067928',
		bookId: '7'
	};
	const bookEntry14 = {
		isbn: '9780747532699',
		bookId: '8'
	};
	const bookEntry15 = {
		isbn: '9780747538493',
		bookId: '9'
	};
	const bookEntry16 = {
		isbn: '9780747542155',
		bookId: '10'
	};
	const bookEntry17 = {
		isbn: '9780747546245',
		bookId: '11'
	};
	const bookEntry18 = {
		isbn: '9780747551003',
		bookId: '12'
	};
	const bookEntry19 = {
		isbn: '9780747581086',
		bookId: '13'
	};
	const bookEntry20 = {
		isbn: '9780747591054',
		bookId: '14'
	};
	const bookEntry21 = {
		isbn: '9780358447849',
		bookId: '15'
	};
	const bookEntry22 = {
		isbn: '9780544839649',
		bookId: '16'
	};
	const bookEntry23 = {
		isbn: '9780544838260',
		bookId: '17'
	};
	const bookEntry24 = {
		isbn: '9781501142970',
		bookId: '18'
	};
	const bookEntry25 = {
		isbn: '9781982103521',
		bookId: '19'
	};
	const bookEntry26 = {
		isbn: '9780671041786',
		bookId: '20'
	};
	const bookEntry27 = {
		isbn: '9781982155759',
		bookId: '21'
	};
	const bookEntry28 = {
		isbn: '9780553204773',
		bookId: '22'
	};
	const bookEntry29 = {
		isbn: '9780553381689',
		bookId: '23'
	};
	const bookEntry30 = {
		isbn: '9780553381696',
		bookId: '24'
	};
	const bookEntry31 = {
		isbn: '9780553381702',
		bookId: '25'
	};
	const bookEntry32 = {
		isbn: '9780553582024',
		bookId: '26'
	};
	const bookEntry33 = {
		isbn: '9780553385953',
		bookId: '27'
	};
	const bookEntry34 = {
		isbn: '9780441013593',
		bookId: '28'
	};
	const bookEntry35 = {
		isbn: '9780593098233',
		bookId: '29'
	};
	const bookEntry36 = {
		isbn: '9780593201749',
		bookId: '30'
	};
	const bookEntry37 = {
		isbn: '9780593098257',
		bookId: '31'
	};
	const bookEntry38 = {
		isbn: '9780593098264',
		bookId: '32'
	};
	const bookEntry39 = {
		isbn: '9780593098271',
		bookId: '33'
	};
	const bookEntry40 = {
		isbn: '9781780228228',
		bookId: '34'
	};
	const bookEntry41 = {
		isbn: '9780141188621',
		bookId: '35'
	};
	const bookEntry42 = {
		isbn: '9780307387899',
		bookId: '36'
	};

	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry1);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry2);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry3);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry4);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry5);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry6);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry7);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry8);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry9);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry10);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry11);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry12);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry13);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry14);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry15);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry16);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry17);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry18);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry19);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry20);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry21);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry22);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry23);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry24);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry25);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry26);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry27);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry28);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry29);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry30);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry31);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry32);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry33);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry34);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry35);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry36);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry37);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry38);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry39);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry40);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry41);
	await postRequest(process.env.DOTNET_URI + 'bookEntry', bookEntry42);

	/////////////
	// Members //
	/////////////

	const member1 = {
		name: 'Hugo Carvalho',
		email: 'hugo.carvalho@mail.com',
		address: 'Av. Gen. Humberto Delgado 584',
		phoneNumber: '+351919191919'
	};
	const member2 = {
		name: 'Afonso Esteves',
		email: 'afonso.esteves@mail.com',
		address: 'R. Dr. António Bernardino de Almeida 856',
		phoneNumber: '+351929292929'
	};
	const member3 = {
		name: 'Érica Lopes',
		email: 'erica.lopes@mail.com',
		address: 'Praça de Parada Leitão 65',
		phoneNumber: '+351939393939'
	};
	const member4 = {
		name: 'Hugo Pereira',
		email: 'hugo.pereira@mail.com',
		address: 'Anthipolochagou Tassopoulou 1, Ag. Paraskevi 153 42, Greece',
		phoneNumber: '+351949494949'
	};
	const member5 = {
		name: 'Diogo Santos',
		email: 'diogo.santos@mail.com',
		address: 'King George St 56',
		phoneNumber: '+351959595959'
	};

	await postRequest(process.env.DOTNET_URI + 'member', member1);
	await postRequest(process.env.DOTNET_URI + 'member', member2);
	await postRequest(process.env.DOTNET_URI + 'member', member3);
	await postRequest(process.env.DOTNET_URI + 'member', member4);
	await postRequest(process.env.DOTNET_URI + 'member', member5);

	/////////////
	// Borrows //
	/////////////

	const borrow1 = {
		bookEntryId: 1,
		memberId: 1,
		borrowDate: '16-07-2024',
		dueDate: '06-08-2024'
	};
	const borrow2 = {
		bookEntryId: 4,
		memberId: 1,
		borrowDate: '17-07-2024',
		dueDate: '07-08-2024'
	};
	const borrow3 = {
		bookEntryId: 7,
		memberId: 1,
		borrowDate: '21-07-2024',
		dueDate: '11-08-2024'
	};
	const borrow4 = {
		bookEntryId: 14,
		memberId: 2,
		borrowDate: '03-05-2024',
		dueDate: '24-05-2024'
	};
	const borrow5 = {
		bookEntryId: 10,
		memberId: 3,
		borrowDate: '27-01-2024',
		dueDate: '17-02-2024'
	};
	const borrow6 = {
		bookEntryId: 11,
		memberId: 3,
		borrowDate: '29-01-2024',
		dueDate: '19-02-2024'
	};
	const borrow7 = {
		bookEntryId: 12,
		memberId: 3,
		borrowDate: '31-01-2024',
		dueDate: '21-02-2024'
	};
	const borrow8 = {
		bookEntryId: 13,
		memberId: 3,
		borrowDate: '02-02-2024',
		dueDate: '23-02-2024'
	};

	await postRequest(process.env.DOTNET_URI + 'borrow', borrow1);
	const borrowUpdate1 = {
		id: 1,
		returnDate: '17-07-2024'
	};
	await putRequest(process.env.DOTNET_URI + 'borrow', borrowUpdate1);
	await postRequest(process.env.DOTNET_URI + 'borrow', borrow2);
	const borrowUpdate2 = {
		id: 2,
		returnDate: '21-07-2024'
	};
	await putRequest(process.env.DOTNET_URI + 'borrow', borrowUpdate2);
	await postRequest(process.env.DOTNET_URI + 'borrow', borrow3);
	const borrowUpdate3 = {
		id: 3,
		returnDate: '25-07-2024'
	};
	await putRequest(process.env.DOTNET_URI + 'borrow', borrowUpdate3);
	await postRequest(process.env.DOTNET_URI + 'borrow', borrow4);
	const borrowUpdate4 = {
		id: 4,
		returnDate: '31-07-2024'
	};
	await putRequest(process.env.DOTNET_URI + 'borrow', borrowUpdate4);
	await postRequest(process.env.DOTNET_URI + 'borrow', borrow5);
	const borrowUpdate5 = {
		id: 5,
		returnDate: '29-01-2024'
	};
	await putRequest(process.env.DOTNET_URI + 'borrow', borrowUpdate5);
	await postRequest(process.env.DOTNET_URI + 'borrow', borrow6);
	const borrowUpdate6 = {
		id: 6,
		returnDate: '31-01-2024'
	};
	await putRequest(process.env.DOTNET_URI + 'borrow', borrowUpdate6);
	await postRequest(process.env.DOTNET_URI + 'borrow', borrow7);
	const borrowUpdate7 = {
		id: 7,
		returnDate: '02-02-2024'
	};
	await putRequest(process.env.DOTNET_URI + 'borrow', borrowUpdate7);
	await postRequest(process.env.DOTNET_URI + 'borrow', borrow8);
	const borrowUpdate8 = {
		id: 8,
		returnDate: '05-02-2024'
	};
	await putRequest(process.env.DOTNET_URI + 'borrow', borrowUpdate8);

	console.log('Successfully finished .NET bootstrap');
}
