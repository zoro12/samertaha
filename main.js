let slideIndex=0;
const showSlides = () => {
    const slides = document.getElementsByClassName("myslides");
    const dots = document.getElementsByClassName("dot");
   

for(let i=0;i< slides.length;i++){
    slides[i].style.display = "none";
}
slideIndex++;

if(slideIndex>slides.length) {slideIndex=1;}

for(let i=0;i< dots.length;i++){
    dots[i].className = dots[i].className.replace(" active","");
}

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className+= " active";
  
setTimeout(showSlides,3000);
 
};
 
    showSlides();
  
    let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}
