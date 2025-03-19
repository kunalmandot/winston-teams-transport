const Transport = require('winston-transport');
const axios = require('axios');

const { HTTP_METHODS } = require('./constant');

class TeamsTransport extends Transport {
  constructor(options = {}) {
    super(options);

    this.webhook = options.webhook;
    this.color = options.color || 'ff0000';
    this.title = options.title || new Date().toISOString();
    this.formatter = options.formatter;
  }

  log(info, callback) {
    setImmediate(() => {
      this.emit('logged', info);
    });

    const requestBody = {
      themeColor: this.color,
      summary: 'Alert',
      title: this.title,
      sections: [{
        facts: this.formatter(info),
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
