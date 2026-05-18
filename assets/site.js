function openMobileNav(){document.getElementById('mobileNav').classList.add('open');document.body.style.overflow='hidden';}
function closeMobileNav(){document.getElementById('mobileNav').classList.remove('open');document.body.style.overflow='';}
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('.accordion-btn').forEach(btn=>{
    btn.addEventListener('click',function(){
      var body=this.nextElementSibling;
      var isOpen=body.classList.contains('open');
      document.querySelectorAll('.accordion-body').forEach(b=>b.classList.remove('open'));
      document.querySelectorAll('.accordion-btn').forEach(b=>b.classList.remove('active'));
      if(!isOpen){body.classList.add('open');this.classList.add('active');}
    });
  });
  var s=document.getElementById('blogSearch');
  if(s){s.addEventListener('input',function(){
    var q=this.value.toLowerCase();
    document.querySelectorAll('.blog-card').forEach(c=>{c.style.display=c.textContent.toLowerCase().includes(q)?'':'none';});
  });}
});
