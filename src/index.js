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

  @action success = (title, message) => {
    toastr.success(title, message)
  }

  @action error = (title, message) => {
    toastr.error(title, message)
  }

  @action warning = (title, message) => {
    toastr.warning(title, message)
  }

  @action info = (title, message) => {
    toastr.info(title, message)
  }

  @action clear = () => {
    toastr.clear()
  }

  @action remove = () => {
    toastr.remove()
  }
}
