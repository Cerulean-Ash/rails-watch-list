import { Controller } from "@hotwired/stimulus";
import Swal from 'sweetalert2'

export default class extends Controller {
  connect() {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
}
