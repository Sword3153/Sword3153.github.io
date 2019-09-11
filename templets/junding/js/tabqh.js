	function selectTag(showContent,selfObj,rolin_id){
	// 操作标签
	var tag = document.getElementById("tags").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
	tag[i].className = "selectTag9";
	}
	selfObj.parentNode.className = "selectTag";
	// 操作内容
	for(i=0; j=document.getElementById("tagContent"+i); i++){
	j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	rolin_name = "rolin" + rolin_id;
	rolinTab(rolin_name);
	}
	

