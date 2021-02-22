var current_slide;
var scroll_buttons = document.getElementsByClassName("about-button");
var slide = 0;
console.log(window.location.pathname, "Patname")
if (window.location.pathname === "/~toddcal/"){
  slideShow()
};

banner.addEventListener("mouseover", changeBackground);

function changeBackground(){
  setTimeout(function (){
    let banner_element = document.querySelector(".banner");
    let style = getComputedStyle(banner_element);
    let blur = style.filter;
    if (blur === 'blur(10px)'){
      let backgroundImage = style.backgroundImage;
      changePicture(backgroundImage);
    }
  }, 1150)
};

function changePicture(backgroundImage){

    let banner = document.getElementById("banner");
    if (backgroundImage === 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("http://web.engr.oregonstate.edu/~toddcal/Me.jpg")'){
      banner.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("luna.jpg")';
    }
    else if (backgroundImage === 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("http://web.engr.oregonstate.edu/~toddcal/luna.jpg")'){
      banner.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("rockito.jpg")';
    }
    else if (backgroundImage === 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("http://web.engr.oregonstate.edu/~toddcal/rockito.jpg")'){
      banner.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("Valle.jpg")';
    }
    else if (backgroundImage === 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("http://web.engr.oregonstate.edu/~toddcal/Valle.jpg")'){
      banner.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("Me.jpg")';
    }
};

function moveSlides(slides_to_move) {
  displaySlide(slides_to_move + current_slide);
};

function selectSlide(slide_number) {
  displaySlide(slide_number);
};

function displaySlide(slide) {
  let slide_list = document.getElementsByClassName("slides");
  let selectors = document.getElementsByClassName("square");
  if (slide > slide_list.length) {
    slide = 1;
  }
  if (slide < 1) {
    slide = slide_list.length;
  }
  for (let i = 0; i < slide_list.length; i++){
    slide_list[i].style.display = "none";
    selectors[i].className = selectors[i].className.replace(" square-selected", "");
  }
  slide_list[slide - 1].style.display = "flex";
  selectors[slide - 1].className += " square-selected";
  current_slide = slide;
}

function slideShow() {
  let slide_list = document.getElementsByClassName("slides");
  let selectors = document.getElementsByClassName("square");
  for (let i = 0; i < slide_list.length; i++) {
    slide_list[i].style.display = "none";
    selectors[i].className = selectors[i].className.replace(" square-selected", "");
  }
  slide++;
  if (slide > slide_list.length) {slide = 1}
  slide_list[slide-1].style.display = "flex";
  selectors[slide - 1].className += " square-selected";
  setTimeout(slideShow, 4000);
  current_slide = slide;
}

for (let i = 0; i < scroll_buttons.length; i++) {
  scroll_buttons[i].addEventListener("click", function() {
    this.classList.toggle("active-scroll-box");
    let scroll_box = this.nextElementSibling;
    if (scroll_box.style.maxHeight) {
      scroll_box.style.maxHeight = null;
      scroll_box.style.margin = "0";
      scroll_box.style.border = null;
      scroll_box.style.height = null;
    } else {
      scroll_box.style.maxHeight = "250px";
      scroll_box.style.margin = "0 40%";
      scroll_box.style.border = "solid indigo";
      scroll_box.style.height = "250px";
    }
  })
}

function expandResume(category) {
  let info = document.getElementsByClassName("resume-info");
  for (let i = 0; i < info.length; i++) {
    if (info[i].classList.contains("hidden")) {
      continue;
    } else {
      info[i].className += " hidden";
    }
  }
  let info_to_expand = document.getElementById(category);
  info_to_expand.className = info_to_expand.className.replace(" hidden", "");
}
