export const fillHtmlStub = (content: string, title: string) => {
  return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${title}</title>
         <link rel="stylesheet" href="/resources/style.css"/>
        </head>
        <body>
          <div id="root">${content}</div>
        </body>
      </html>`;
}
