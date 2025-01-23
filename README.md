![Logo](https://github.com/marooncoucal/kartoteka-rework/blob/master/README-img/logo_banner.png)

# kartoteka.

A collection of helpful links for designers and an experimental project of B&D institute laboratory. Demo: https://kartoteka.ibnd.ru/

## Table of Contents

- [Run Locally](#run-locally)
- [Updating code on server](#updating-code-on-server)

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

Make sure to `create a new branch` for your tasks

After finishing, `commit` changes for review

## Updating code on server

Install [FileZilla FTP Client](https://filezilla-project.org/download.php?type=client).
Use [FileZilla Documentation](https://wiki.filezilla-project.org/Using) to navigate the programm.

To update this project you will need access to server. Contact your teacher or administrator for permission. After you are connected, you can proceed with next steps

connect to server via "Менеджер сайтов" icon under programm logo

![Connect to server](https://github.com/marooncoucal/kartoteka-rework/blob/master/README-img/connect-filezilla.png)

Transfer files from local folder to server folder

![filezilla-window-example](https://github.com/marooncoucal/kartoteka-rework/blob/master/README-img/filezilla-window-example.png)

After transfering updated files, connect to server via `cmd` on your computer

```bash
  ssh your_folder@site_name
  password: your_assigned_password
```

Make sure to be in the correct folder before starting update. Use `cd` to move down and `..` to move up through folders.

After moving to correct folder rebuild and restart server:

```bash
  npm run build

  pm2 restart kartoteka
```

If you encounter errors, try googling the solution and/or contact your teacher and administrator


## 🔗 Links

Demo https://kartoteka.ibnd.ru/

CMS https://kartotekacms.ibnd.ru/

## Authors

- [@marooncoucal](https://www.behance.net/marooncoucal)
- [@ekaterisalovar](https://www.behance.net/ekaterisalovar)


## Acknowledgements

 - [Институт Бизнеса и Дизайна](https://obe.ru/)
 - [Борис Маркевич](https://www.behance.net/borismarkevichf685)
 - Игорь Мелехов
 - Татьяна Михалина 
