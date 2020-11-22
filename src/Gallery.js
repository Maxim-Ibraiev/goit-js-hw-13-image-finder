import PNotify from "pnotify/dist/es/PNotify";
import fetchCountries from "./fetchCountries";
import apiService from "./apiService";
import { ref } from "./ref";

const cartTmp = require("./template/cart.handlebars");

const query = "";

class Gallery {
  constructor(container, q) {
    this.container = container;
    this.query = q;
    this.page = 1;
    this.search();
  }

  search() {
    const url = apiService.getUrl(this.query, this.page);

    ref.btn.classList.remove("is-hidden")

    ref.loading.classList.remove("is-hidden")
    ref.loaded.classList.add("is-hidden")

    fetchCountries(url)
      .then(this.render.bind(this))
      .then((this.page += 1)).then(() => {
        ref.loading.classList.add("is-hidden")
        ref.loaded.classList.remove("is-hidden")
      })
      .catch((err) => {
        if (err.message === "Unexpected end of JSON input") {
          this.container.innerHTML = "";
        }
      });
  }

  render(picture) {
    if (picture.message === "Not Found") {
      return PNotify["error"]({
        title: "Error",
        text: "Not Found",
        delay: 2000,
      });
    }
    if (picture.length > 10) {
      return PNotify["error"]({
        title: "Error",
        text: "Too many matches found. Please enter a more specific query!",
        delay: 2000,
      });
    }

    this.container.insertAdjacentHTML("beforeend", cartTmp(picture));
  }
}

export default Gallery;
