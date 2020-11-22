import "./style.scss";
import {ref} from "./ref"
import Gallery from "./Gallery";

// const debounce = require("debounce");
const getGallery = (q) => new Gallery(ref.container, q)
let result = null;

ref.form.addEventListener("submit", onSearch);
ref.btn.addEventListener("click", onBtn);


function onSearch(event) {
  const query = event.currentTarget.elements.query.value;
  
  event.preventDefault()
  ref.container.innerHTML = ''
  
  result = getGallery(query)
}

function onBtn() {
  result.search()
}