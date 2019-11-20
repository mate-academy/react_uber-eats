import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));

function consoleBG() {
  if ($(window).scrollTop() == 0) {
    $('.header__top').removeClass('header__fixed');
    $('.arrow-to-top').removeClass('arrow-displayed');
  } else {
    $('.header__top').addClass('header__fixed');
    $('.arrow-to-top').addClass('arrow-displayed');
  }
}
consoleBG();

$(window).scroll(function() {
  consoleBG();
});
