export class LoadMoreBtn {
  constructor({selector, hidden = true}) {
    this.refs = this.getRefs(selector);
    hidden && this.hide()
  };

  getRefs(selector) {
    const refs = {};

    refs.button = document.querySelector(selector);
    refs.label = document.querySelector('.btn-label');

    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
    this.refs.label.textContent = "Load more";
  };

  disable() {
    this.refs.button.disabled = true;
    this.refs.label.textContent = "Loading...";
  }

  show() {
    this.refs.button.classList.remove('is-hidden')
  }

  hide() {
    this.refs.button.classList.add('is-hidden')
  }
};

