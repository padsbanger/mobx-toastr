import { action } from 'mobx'
import toastr from 'toastr'

export class Tostr {
  constructor() {
    super()
    this.toastr = toastr
  }
}
