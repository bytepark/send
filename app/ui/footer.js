const html = require('choo/html');
const Component = require('choo/component');

class Footer extends Component {
  constructor(name, state) {
    super(name);
    this.state = state;
  }

  update() {
    return false;
  }

  createElement() {
    return html`
      <footer
        class="flex flex-col md:flex-row items-start w-full flex-none self-start p-6 font-medium text-xs text-grey-dark md:items-center justify-between"
      />
    `;
  }
}

module.exports = Footer;
