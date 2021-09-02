let geticonMenu=document.querySelector('.icon-menu')
let getContainermb=document.querySelector('.container-moblie')
let getMenumb=document.querySelector('.nav__menu-moblie')
let getBody=document.querySelector('.test')
let getClose=document.querySelector('.icon-close')
let geticonRight=document.querySelectorAll(".icon-right")
let geticonLeft=document.querySelector(".icon-left")
let getLanding=document.querySelector("#landing")
let getPages=document.querySelector(".nav__menu__item--pages")
let getlistMb=document.querySelectorAll(".list__menu-moblie")
let getlistmbItem=document.querySelectorAll("list__menu-item")
geticonMenu.onclick=(e)=>{
	// getContainermb.classList.toggle('show')
	getMenumb.classList.add('slide')
	getBody.classList.add('show')

	getClose.onclick=()=>{
	getMenumb.classList.remove('slide')
	getBody.classList.remove('show')
	}
	getBody.onclick=(e)=>{
		if(e.target.tagName=="LI"||e.target.tagName=="A"||e.target.tagName=="ION-ICON"||e.target.tagName=="UL"||e.target.className=="name"){
		
			return;
		}
		else{
		getMenumb.classList.remove('slide')
		getBody.classList.remove('show')
		
		}		
	}
	
		
	getMenumb.onclick=(e)=>{
		if(e.target.id=="landing"||e.target.id=="icon-right--landing"){
		geticonLeft.style.opacity="1"
		geticonLeft.style.visibility="visible"
		getlistMb[0].classList.add("showlistMB")
		}
		else if(e.target.id=="icon-left"&&e.target.tagName=="ION-ICON"){
			getlistMb[0].classList.remove("showlistMB")
			geticonLeft.style.opacity="0"
		}
		if(e.target.id=="pages"||e.target.id=="icon-right--pages"){
		geticonLeft.style.opacity="1"
		geticonLeft.style.visibility="visible"
		getlistMb[1].classList.add("showlistMB")
		}
		else if(e.target.id=="icon-left"&&e.target.tagName=="ION-ICON"){
			getlistMb[1].classList.remove("showlistMB")
			geticonLeft.style.opacity="0"
		}
		
	}


	
}

let getItem=document.querySelector('.nav__menu__item')

