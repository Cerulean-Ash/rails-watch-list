import { Controller } from "stimulus"
import Typed from "typed.js";


export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Classic", "Action", "Romance", "Horror", "Animation", "Drama", "Comedy", "Thriller", "Documentary"],
      typeSpeed: 100,
      loop: true
    });
  }
}
