window.onload = function () {
  /*
  let article = document.getElementById("article");
  let temperature = document.getElementById("temperature-bottom");
  let temperatureTwo = document.getElementById("temperature-right");
/*  article.addEventListener('mouseenter', function(){
      temperature.classList.remove('out');
      temperature.classList.add('on');
      temperatureTwo.classList.remove('out-right');
      temperatureTwo.classList.add('on-right');
  });
  article.addEventListener('mouseleave', function(){
      temperature.classList.add('out');
      temperature.classList.remove('on');
      temperatureTwo.classList.add('out-right');
      temperatureTwo.classList.remove('on-right');
  });*/

  let articles = document.getElementsByClassName("article");
  for( var i = 0; i < articles.length; i++ ) {
    const tempRight = articles[i].getElementsByClassName('temperature-two')[0];
    const tempBottom = articles[i].getElementsByClassName('temperature')[0];
    articles[i].addEventListener('mouseenter', function mouseEnter(){
      tempBottom.classList.remove('out');
      tempBottom.classList.add('on');
      tempRight.classList.remove('out-right');
      tempRight.classList.add('on-right');
      this.removeEventListener('mouseenter', function(){});
    });
    
    articles[i].addEventListener('mouseleave', function mouseLeave(){
      tempBottom.classList.add('out');
      tempBottom.classList.remove('on');
      tempRight.classList.add('out-right');
      tempRight.classList.remove('on-right');
      this.removeEventListener('mouseleave', function(){});
    });
  }

}