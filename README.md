# kartoteka.

A collection of helpful links for designers and an experimental project of B&D institute laboratory.

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Updating code on server

Install [FileZilla FTP Client](https://filezilla-project.org/download.php?type=client).
Use [FileZilla Documentation](https://wiki.filezilla-project.org/Using) to navigate the programm.

To update this project you will need access to server. Contact your teacher or administrator for permission. After you are connected, you can proceed with next steps

connect to server via "Менеджер сайтов" icon under programm logo

![Connect to server](https://github.com/marooncoucal/kartoteka-rework/blob/master/README-img/connect-filezilla.png)

Transfer files from local folder to server folder

![filezilla-window-example](https://github.com/marooncoucal/kartoteka-rework/blob/master/README-img/filezilla-window-example.png)

After transfering updated files, update project build

```bash
  npm run build
```

After build is complete restart server

```bash
  pm2 restart kartoteka
```

If you encounter errors, try googling the solution and/or contact your teacher and administrator