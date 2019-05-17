import { throttle, debounce } from 'throttle-debounce'

let scrollFun = (e) => {
	console.log(document.querySelector('.container').scrollTop)
}

document.querySelector('.container').addEventListener('scroll', throttle(300,scrollFun), false)

/*
function scrollFun(e) {
	console.log(document.querySelector('.container').scrollTop)
}
*/



