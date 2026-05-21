function openMobileNav(){
  var nav=document.getElementById('mobileNav');
  var btn=document.getElementById('menuBtn');
  if(nav){nav.classList.add('open');}
  if(btn){btn.setAttribute('aria-expanded','true');}
  document.body.style.overflow='hidden';
}
function closeMobileNav(){
  var nav=document.getElementById('mobileNav');
  var btn=document.getElementById('menuBtn');
  if(nav){nav.classList.remove('open');}
  if(btn){btn.setAttribute('aria-expanded','false');}
  document.body.style.overflow='';
}
document.addEventListener('DOMContentLoaded',function(){
  // Mobile nav — close on link tap and Escape
  document.querySelectorAll('#mobileNav a').forEach(function(a){
    a.addEventListener('click',closeMobileNav);
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){closeMobileNav();}
  });

  // FAQ accordion (homepage)
  document.querySelectorAll('.faq-question').forEach(function(btn){
    btn.addEventListener('click',function(){
      var item=this.closest('.faq-item');
      var isOpen=item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open');});
      if(!isOpen){item.classList.add('open');}
    });
  });

  // Legacy accordion (article pages)
  document.querySelectorAll('.accordion-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      var body=this.nextElementSibling;
      var isOpen=body.classList.contains('open');
      document.querySelectorAll('.accordion-body').forEach(function(b){b.classList.remove('open');});
      document.querySelectorAll('.accordion-btn').forEach(function(b){b.classList.remove('active');});
      if(!isOpen){body.classList.add('open');this.classList.add('active');}
    });
  });

  // Blog search
  var s=document.getElementById('blogSearch');
  if(s){s.addEventListener('input',function(){
    var q=this.value.toLowerCase();
    document.querySelectorAll('.blog-card').forEach(function(c){c.style.display=c.textContent.toLowerCase().includes(q)?'':'none';});
  });}
});
