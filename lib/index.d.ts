import Transport from 'winston-transport';

export interface TeamsTransportOptions extends Transport.TransportStreamOptions {
  /**
   * Teams incoming webhook.
   */
  webhook: string;

  /**
   * Theme color of the message (Default: ff0000).
   */
  color?: string;

  /**
   * Title of the message (Default: Alert).
   */
  title?: string;

  /**
   * Custom function to formate messages. This function accepts the info object (see Winston documentation) and must return an array of object containing two required fields name and value as shown in the usage.
   */
  formatter: (info: {
    level: string;
    [key: string]: any;
  }) => {
    name: string;
    value: string;
  }[];
}

declare class TeamsTransport extends Transport {
  constructor(options: TeamsTransportOptions);
}

export = TeamsTransport;
