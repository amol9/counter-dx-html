//import { createStore } from 'redux';


function counter(state = 0, action) {
    switch(action.type) {
        case 'INC':
            return state + 1;

        case 'DEC':
            return state - 1;

        default:
            return state;
    }
}

let store = Redux.createStore(counter);

store.subscribe(() => console.log(store.getState()));


var p = document.getElementById("counter");
var inc = document.getElementById("inc");
var dec = document.getElementById("dec");

inc.onclick = function() {
    store.dispatch({ type: 'INC'});
}

dec.onclick = function() {
    store.dispatch({ type: 'DEC'});
}

store.subscribe(() => p.innerText = store.getState());