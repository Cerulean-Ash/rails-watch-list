import { Controller } from "stimulus"
import $ from "jquery";
import "jquery-bar-rating";
import 'jquery-bar-rating/dist/themes/css-stars'; //<- Uncomment this line if you are using Rails

export default class extends Controller {
  connect() {
    $(this.element).barrating({
      theme: "css-stars",
    });
  }
}
