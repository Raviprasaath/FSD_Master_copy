function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}




//disnep video playing 
// const videoCard = document.querySelector('.video-card');
// const video = videoCard.querySelector('.card-video');


window.addEventListener('DOMContentLoaded', ()=> {
  setTimeout(()=> {
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(item => {
      const image = item.querySelector('.video-card-image');
      const video = item.querySelector('.card-video');
    
      item.onmouseenter = function () {
        video.play();
        video.style.opacity = 1;
        image.style.opacity = 0;
      }
    
      item.onmouseleave = function () {
        video.pause();
        video.style.opacity = 0;
        image.style.opacity = 1;
      }
    })
  }, 1000)
})






// 

// Instantiate the Bootstrap carousel
$(".multi-item-carousel").carousel({
  interval: false
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$(".multi-item-carousel .item").each(function () {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  if (next.next().length > 0) {
    next.next().children(":first-child").clone().appendTo($(this));
  } else {
    $(this)
      .siblings(":first")
      .children(":first-child")
      .clone()
      .appendTo($(this));
  }
});

// 
