import { Controller } from "stimulus"
import $ from "jquery";
import "select2";
import 'select2/dist/css/select2.min.css'; //<- Uncomment this line if you are using Rails

export default class extends Controller {
  connect() {
    $(this.element).select2({
      theme: 'bootstrap-5',
      width: "100%",
      dropdownParent: $("#new_movie_modal")
    });
  }
}
