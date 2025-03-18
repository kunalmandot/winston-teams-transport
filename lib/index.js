const Transport = require('winston-transport');

const { DEFAULT_THEME_COLOR } = require('./constant');

class TeamsTransport extends Transport {
  constructor(options = {}) {
    super(options);

    this.webhook = options.webhook;
    this.themeColor = options.themeColor || DEFAULT_THEME_COLOR;
  }

  log(info, callback) {
    setImmediate(() => {
      this.emit('logged', info);
    });

    callback();
  }
}

module.exports = TeamsTransport;
