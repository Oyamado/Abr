
const image1 = document.getElementById("bigImage");

function a(event){
	image1.querySelector('img').src = event.currentTarget.src;
}
for (var index = 0; index < document.querySelector('#carousel').querySelectorAll('img').length; index++) {
	document.querySelector('#carousel').querySelectorAll('img')[index].addEventListener('click',a);
}