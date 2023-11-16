const testimonials = document.getElementsByClassName('testimonial');
const playPauseBtn = document.getElementsByClassName('play-pause')[0]

let currentState = 'pause';
let testimonialActive = 0;
let interval

playPauseBtn.addEventListener("click",slideShow);

function slideShow(){
    if(currentState === 'pause'){
        playPauseBtn.innerText = '⏸'
        currentState = 'play'
        interval = setInterval(()=>{
            testimonials[testimonialActive].setAttribute('class','testimonial');
            if(testimonialActive === 2){
                testimonialActive = 0;
            }else{
                testimonialActive += 1;
            }
            testimonials[testimonialActive].setAttribute('class','testimonial active');
        },1000)
    }else{
        playPauseBtn.innerText = '▶';
        currentState = 'pause'
        clearInterval(interval); 
    }

}