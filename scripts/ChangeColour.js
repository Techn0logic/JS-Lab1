function ChangeColour(){
	var colour=~~(i*254/10);
	var vcolour="rgb("+colour+","+colour+","+colour+")";
	bar.style.height=height+"px";
	bar.style.backgroundColour=scolour;
}