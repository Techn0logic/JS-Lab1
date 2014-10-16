function duplicate(){
var oldDiv=document.getElementById('bar');
var newDiv;

var colour;
var scolour;
var height;
var a;

for (var i=0;i<10;i++){
	newDiv="<div class='bar'"+"id='bar"+i+"'></div>";
	a="bar"+i;
	if(i==0){
		oldDiv.outerHTML=newDiv;
	}
	else{
		oldDiv.outerHTML+=newDiv;
	}
	
	oldDiv=document.getElementById(a);
	colour=~~(i*254/10);
	height=~~(i*25+25);
	scolour="rgb("+colour+","+colour+","+colour+")";
	oldDiv.style.height=height+"px";
	oldDiv.style.backgroundColor=scolour;
}


}

