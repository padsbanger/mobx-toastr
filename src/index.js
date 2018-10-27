import { action } from 'mobx'
import toastr from 'toastr'

export default class Toastr {
  constructor(optionsOverride = {}) {
    toastr.options = {
      ...optionsOverride
    }
  }

  @action message = (title, message, type) => {
    toastr[type](message, title)
  }

  @action clear = () => {
    toastr.clear()
  }

  @action remove = () => {
    toastr.remove()
  }
}
