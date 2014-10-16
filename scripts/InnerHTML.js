function ChangeHTML(){
var oldParagraph=document.getElementById('Part1');

var i=0;
var newParagraph="This is a new paragraph, Paragraph 0";
oldParagraph.innerHTML=newParagraph;

for (i=1;i<10;i++){
	oldParagraph.innerHTML+="<br>";
	newParagraph="This is a new paragraph, Paragraph "+i;
	oldParagraph.innerHTML+=newParagraph;
}



}

