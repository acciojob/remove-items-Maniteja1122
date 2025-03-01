//your JS code here. If required.
let selectid = document.getElementById("colorSelect");
let btn = document.getElementsByTagName("input")[0];
 btn.addEventListener("click",()=>{
	 
	 
	  if(selectid.selectedIndex !== -1){
		  selectid.remove(selectid.selectedIndex)
	  }
	
 })