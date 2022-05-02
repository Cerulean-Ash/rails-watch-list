import { Controller } from "stimulus"
import "aos";
import Aos from "aos";
import 'aos/dist/aos.css';

export default class extends Controller {
  connect() {
    Aos.init();
  }
}
