stickyMenu();

function stickyMenu(){
  var gnb=document.querySelector('.global');
  var gnbPos=gnb.offsetTop;
  window.addEventListener('scroll', function(){
    if(window.pageYOffset>=gnbPos){
      gnb.classList.add('sticky');
    }else{
      gnb.classList.remove('sticky');
    }
  })
}
