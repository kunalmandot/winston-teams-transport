const Transport = require('winston-transport');
const axios = require('axios');

const { DEFAULT_THEME_COLOR, HTTP_METHODS } = require('./constant');

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

    const requestBody = {
      themeColor: this.themeColor,
      summary: info.level.toUpperCase(),
      title: new Date().toISOString(),
      sections: [{
        facts: [],
        markdown: true,
      }],
    };

    axios({
      url: this.webhook,
      method: HTTP_METHODS.POST,
      data: requestBody,
    });

    callback();
  }
}

module.exports = TeamsTransport;
