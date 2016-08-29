//if this file is linked properly, then the console will print out "app.js ready to higgy jiggy"
console.log("app.js ready to higgy jiggy");

var collectionLinkCatReclaimer = document.getElementById('collection-link-the-cat-reclaimer');

collectionLinkCatReclaimer.addEventListener('click', function() {
	window.location = '../clothes/the-cat-reclaimer/';
});

collectionLinkCatReclaimer.addEventListener('mouseover', function() {
	

	//querySelector allows you to find children of the element reference (collection-link-the-cat-reclaimer)
	//classList  gives you access to modify the classes of the child object



	collectionLinkCatReclaimer.querySelector('.collection-title').classList.add('over');


	collectionLinkCatReclaimer.classList.add('pointer');
});

collectionLinkCatReclaimer.addEventListener('mouseout', function() {
	

	//querySelector allows you to find children of the element reference (collection-link-the-cat-reclaimer)
	//classList  gives you access to modify the classes of the child object
	collectionLinkCatReclaimer.querySelector('.collection-title').classList.remove('over');
	collectionLinkCatReclaimer.classList.remove('pointer');
});

var collectionLinkTheCutOutCat = document.getElementById('collection-link-the-cut-out-cat');

collectionLinkTheCutOutCat.addEventListener('click', function() {
	window.location = '../clothes/the-cut-out-cat/';
});

collectionLinkTheCutOutCat.addEventListener('mouseover', function() {
		collectionLinkTheCutOutCat.querySelector('.collection-title').classList.add('over');


	collectionLinkTheCutOutCat.classList.add('pointer');
});

collectionLinkTheCutOutCat.addEventListener('mouseout', function() {
	collectionLinkTheCutOutCat.querySelector('.collection-title').classList.remove('over');
	collectionLinkTheCutOutCat.classList.remove('pointer');
});

var collectionLinkTheUnforgiver = document.getElementById('collection-link-the-unforgiver');

collectionLinkTheUnforgiver.addEventListener('click', function() {
	window.location = '../clothes/the-unforgiver/';
});

collectionLinkTheUnforgiver.addEventListener('mouseover', function() {
		collectionLinkTheUnforgiver.querySelector('.collection-title').classList.add('over');


	collectionLinkTheUnforgiver.classList.add('pointer');
});

collectionLinkTheUnforgiver.addEventListener('mouseout', function() {
	collectionLinkTheUnforgiver.querySelector('.collection-title').classList.remove('over');
	collectionLinkTheUnforgiver.classList.remove('pointer');
});

var collectionLinkPepperRabbit = document.getElementById('collection-link-pepper-rabbit');

collectionLinkPepperRabbit.addEventListener('click', function() {
	window.location = '../clothes/pepper-rabbit/';
});

collectionLinkPepperRabbit.addEventListener('mouseover', function() {
		collectionLinkPepperRabbit.querySelector('.collection-title').classList.add('over');


	collectionLinkPepperRabbit.classList.add('pointer');
});

collectionLinkPepperRabbit.addEventListener('mouseout', function() {
	collectionLinkPepperRabbit.querySelector('.collection-title').classList.remove('over');
	collectionLinkPepperRabbit.classList.remove('pointer');
});

var collectionLinkArchive = document.getElementById('collection-link-archive');

collectionLinkArchive.addEventListener('click', function() {
	window.location = '../clothes/archive/';
});

collectionLinkArchive.addEventListener('mouseover', function() {
		collectionLinkArchive.querySelector('.collection-title').classList.add('over');


	collectionLinkArchive.classList.add('pointer');
});

collectionLinkArchive.addEventListener('mouseout', function() {
	collectionLinkArchive.querySelector('.collection-title').classList.remove('over');
	collectionLinkArchive.classList.remove('pointer');
});



