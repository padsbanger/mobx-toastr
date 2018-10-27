import { action } from 'mobx'
import toastr from 'toastr'

export class Toastr {
  constructor(optionsOverride = {}) {
    this.toastr = toastr
    this.toastr.options = {
      ...this.toastr.options,
      ...optionsOverride
    }
  }

  @action dispatch(title, message, type) {
    this.toastr[type](message, title)
  }

  @action clear() {
    this.toastr.clear()
  }

  @action remove() {
    this.toastr.remove()
  }
}

export default Toastr
