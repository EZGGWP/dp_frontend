import * as fs from 'fs';
import path from 'path';

const styleFiles = fs.readdirSync(path.resolve(__dirname, '../client/'))
  .filter((file) => file.endsWith('.css'))
  .map((file) => `<link rel="stylesheet" href="/resources/${file}"/>`)
  .join('\n');

const scriptFiles = fs.readdirSync(path.resolve(__dirname, '../client/'))
  .filter((file) => file.endsWith('.js'))
  .map((file) => {
    const data = fs.readFileSync(path.resolve(`${__dirname}/../client`, file));
    return `<script src="/resources/${file}"></script>`
  }).join('\n');

export const fillHtmlStub = (content: string, title: string) => {
  return `
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>${title}</title>
          ${styleFiles}
        </head>
        <body>
          <div id="root">${content}</div>
          ${scriptFiles}
        </body>
      </html>`;
}
