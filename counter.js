"use strict";

//import { createStore } from 'redux';
function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INC':
      return state + 1;

    case 'DEC':
      return state - 1;

    default:
      return state;
  }
}

var store = Redux.createStore(counter);
store.subscribe(function () {
  return console.log(store.getState());
});
var p = document.getElementById("counter");
var inc = document.getElementById("inc");
var dec = document.getElementById("dec");

inc.onclick = function () {
  store.dispatch({
    type: 'INC'
  });
};

dec.onclick = function () {
  store.dispatch({
    type: 'DEC'
  });
};

store.subscribe(function () {
  return p.innerText = store.getState();
});
