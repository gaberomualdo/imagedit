function openImage(src){
	document.getElementById("imgSrcForm").setAttribute("style","display:none;");
	document.getElementById("mainImageEditArea").removeAttribute("style");

	document.getElementById("mainImage").setAttribute("src",src);
}