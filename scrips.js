let geticonMenu=document.querySelector('.icon-menu')
let getContainermb=document.querySelector('.container-moblie')
let getMenumb=document.querySelector('.nav__menu-moblie')
let getBody=document.querySelector('.test')
let getClose=document.querySelector('.icon-close')

geticonMenu.onclick=(e)=>{
	// getContainermb.classList.toggle('show')
	getMenumb.classList.add('slide')
	getBody.classList.add('show')

	getClose.onclick=()=>{
	getMenumb.classList.remove('slide')
	getBody.classList.remove('show')
	}
	getBody.onclick=(e)=>{
		if(e.target==getMenumb){
			return ;
		}
		else{
		getMenumb.classList.remove('slide')
		getBody.classList.remove('show')
		}


	}
	
}	

// .container-moblie
// .nav__menu-moblie