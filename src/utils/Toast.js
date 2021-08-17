import { createToast } from "mosha-vue-toastify"

export default class Toast {
  constructor(title, description = "", toastType = "success") {
    this.title = title
    this.description = description
    this.toastType = toastType
  }
  show() {
    createToast(
      {
        title: this.title,
        description: this.description,
        toastType: this.toastType,
      },
      {
        type: this.toastType, // 'info', 'danger', 'warning', 'success', 'default'
        timeout: 4000,
        showCloseButton: true,
        position: "top-right", // 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'top-center', 'bottom-center'
        hideProgressBar: true,
        showIcon: true,
        swipeClose: true,
      },
    )
  }
}
