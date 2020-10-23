// Minimalist Container Queries
// 2020 @scottjehl, @filamentgroup / MIT License
class CQ extends HTMLElement {
  constructor() {
    super();
    this._init = this._init.bind(this);
    this._observer = new MutationObserver(this._init);
  }
  connectedCallback() {
    if (this.children.length) {
      this._init();
    }
    this._observer.observe(this, { childList: true });
  }
  _init() {
    var self = this;
    this._rObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        self.setActiveBPs(entry);
      }
    });
    this._rObserver.observe(this);
  }

  setActiveBPs(entry) {
    var bps = window.getComputedStyle(entry.target).getPropertyValue("--breakpoints");
    var activeBPs = [];
    if (bps) {
      bps = bps.replace('"', "");
      bps.split(" ").forEach((bp) => {
        var bpnum = parseFloat(bp);
        if (entry.contentRect.width >= bpnum) {
          activeBPs.push(bpnum);
        }
      });
    }
    entry.target.setAttribute("data-min-width", activeBPs.join(" "));
  }
}
customElements.define("c-q", CQ);
