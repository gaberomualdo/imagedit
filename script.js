function openImage(src){
	document.getElementById("imgSrcForm").setAttribute("style","display:none;");
	document.getElementById("mainImageEditArea").removeAttribute("style");

	document.getElementById("mainImageBackgroundImage").innerHTML = "#mainImage {background-image: url(" + src + ");}";
}

var editValues = [];
var editNames = [];
var editUnits = [];

window.onload = function(){
	var allEditInputs = document.getElementById("imageEditing").getElementsByTagName("input");
	for(var i = 0;i < allEditInputs.length;i++){
		allEditInputs[i].setAttribute("id",i);
		editNames.push(allEditInputs[i].getAttribute("class"));
		editUnits.push(allEditInputs[i].getAttribute("unit"));
		if(allEditInputs[i].value == ""){
			allEditInputs[i].value = 0;
		}
		editValues.push(allEditInputs[i].value);
		allEditInputs[i].oninput = function(){
			if(this.value == ""){
				this.value = 0;
			}
			editValues[this.getAttribute("id")] = this.value;
			updateFilters();
		}
	}
}
function updateFilters(){
	var cssCode = "#mainImage {filter: ";
	editValues.forEach(function(item,index){
		cssCode += editNames[index] + "(" + item + editUnits[index] + ") ";
	});
	cssCode += ";}";
	document.getElementById("mainImageEdits").innerHTML = cssCode;
}