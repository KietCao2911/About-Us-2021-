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
			// let boolen=0;
			// for(let i=0;i<getMenumb.children.length;i++){
			// 			if(e.target==getMenumb.children[i]){
			// 				boolen=1;
			// 			}
			// 			else{
			// 				boolen=0;
			// 			}
			// }
			// console.log(boolen)
			if(e.target.tagName=='LI'||e.target.tagName=='UL'||e.target.tagName=='A'){
				// getMenumb.classList.remove('slide')
				// getBody.classList.remove('show')
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