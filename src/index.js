import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));

function consoleBG() {
  if ($(window).scrollTop() == 0) {
    $('.header__top').removeClass('header__fixed');
  } else {
    $('.header__top').addClass('header__fixed');
  }
}
consoleBG();

$(window).scroll(function() {
  consoleBG();
});
