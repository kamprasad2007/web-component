const template = document.createElement("template");
template.innerHTML = ` 
<style>
label {
  color:red;
}
</style>
<label>This is from Custom Element</label>
`;

class CustomElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$label = this.shadowRoot.querySelector("label");
    this.$label.addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("mouseClicked", {
          detail: "hello from custom element to parent",
          bubbles: true
        })
      );
    });
  }

  // getter and setter to access attributes
  get label() {
    return this.getAttribute("label");
  }

  set label(value) {
    this.setAttribute("label", value);
  }


  
  // lifecycle callbacks
  static get observedAttributes() {
    return ["label"];
  }

  // lifecycle callbacks
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name);
  }

  // lifecycle callbacks
  disconnectedCallback() {}

  // lifecycle callbacks
  adoptedCallback() {}

  // lifecycle callbacks
  connectedCallback() {
    //   this.shadow.innerHTML = `
    //   <style>
    //     label {
    //       color:red;
    //     }
    //   </style>
    //  <label>This is from Custom Element ${this.getAttribute('label')}</label>`;
  }
}

window.customElements.define("custom-element", CustomElement);
