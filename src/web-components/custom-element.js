class CustomElement extends HTMLElement {
    // constructor() {
    //   super();
    //   this.shadow = this.attachShadow({ mode: "open" });
    // }

    static get observedAttributes() {
      return ["label"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(name, oldValue, newValue)
    }

    connectedCallback() {
    //   this.shadow.innerHTML = `
    //   <style>
    //     label {
    //       color:red;
    //     }
    //   </style>
    //  <label>This is from Custom Element ${this.getAttribute('label')}</label>`;

     this.innerHTML = `
     <label>This is from Custom Element ${this.getAttribute('label')}</label>`;
    }
  }
  
  window.customElements.define("custom-element", CustomElement);
  