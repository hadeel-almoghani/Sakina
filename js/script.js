let slides = document.querySelectorAll(".comments h2");
let tabs = document.querySelectorAll(".tabs");

slides.forEach((el) => {
  el.addEventListener("click", function() {
    slides.forEach((el) => el.classList.remove('active') )
    this.classList.add('active');

    tabs.forEach((el) => el.style.display = 'none' )
    
    var item = this.dataset.slide;
    document.getElementById('item'+item).style.display = 'block';

  });
});

// Password Show / Hide
let show = document.querySelector('.password-wrapper .show');
let hide = document.querySelector('.password-wrapper .hide');

if(show){
  show.onclick = () => { 
    document.querySelector('.password-wrapper input').type = 'text';
    show.style.display = 'none';
    hide.style.display = 'block';
  }
  
  hide.onclick = () => { 
    document.querySelector('.password-wrapper input').type = 'password';
    hide.style.display = 'none';
    show.style.display = 'block';
  }
}

// Tabs
let spans = document.querySelectorAll(".payment-box .title span");
let content = document.querySelectorAll(".tab-content");
spans.forEach((el) => {
  el.addEventListener("click", function() {
    spans.forEach((el) => el.classList.remove('active') )
    this.classList.add('active');

    content.forEach((el) => el.style.display = 'none' )
    
    var item = this.dataset.tab;
    document.getElementById('tab-'+item).style.display = 'block';

  });
});