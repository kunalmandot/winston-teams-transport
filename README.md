# winston-teams-transport
Teams transport for winston 3+ that logs to a channel via webhook.

## Installation
```
npm install winston winston-teams-transport
```

## Usage
### Set up
```javascript
const winston = require('winston');
const TeamsTransport = require('winston-teams-transport');

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new TeamsTransport({
      webhook: 'Your teams webhook URL.',
      formatter: (info) => {
        const fields = [
          { name: 'Timestamp (UTC)', value: new Date().toISOString() },
          { name: 'Message', value: info.message },
        ];
        return fields;
      };
    }),
  ],
});

logger.info('This should be logged in Teams.');
```
Or
```javascript
const winston = require('winston');
const TeamsTransport = require('winston-teams-transport');

const logger = winston.createLogger({
  level: 'info',
});
logger.add(new TeamsTransport({
  webhook: 'Your teams webhook URL.',
  formatter: (info) => {
    const fields = [
      { name: 'Timestamp (UTC)', value: new Date().toISOString() },
      { name: 'Message', value: info.message },
    ];
    return fields;
  };
}));

logger.info('This should be logged in Teams.');
```

### Options
* `webhook`(string) **REQUIRED** - Teams incoming webhook.
* `formatter`(function) **REQUIRED** - Custom function to formate messages. This function accepts the `info` object ([see Winston documentation](https://github.com/winstonjs/winston/blob/master/README.md#streams-objectmode-and-info-objects)) and must return an array of object containing two required fields `name` and `value` as shown in the usage.
* `level`(string) - Level to log. Global settings will apply if left undefined.
* `color`(string) - Theme color of the message (Default: `ff0000`).
* `title`(string) - Title of the message (Default: `Alert`).
