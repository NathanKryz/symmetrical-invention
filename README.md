# Symmetrical-Invention

## Description

This project is a portfolio featuring many of my other deployed applications, presented in a multi-page React.js format, featuring bootstrap and custom style sheets
for style, and using React in order to connect the various pages together for a dynamically rendered website, with an About Me page, a page displaying six previous
projects, a page for a contact form as well as my e-mail and phone, and a final page with a summary and downloadable link to my resume in pdf format. This repo exists
as a culmination of my last three months of learning in fullstack development.

## Organization

The root folder contains all the further directories as well the package.jsons for referencing and installing the required third party nodes. The public folder contains all the image assets used in the live deployment of the application. Within the src folder is where most important files are found, with the folder first containing the data on the page render within index.jss, the react root app call in App.js, and the global style resets within index.css. The utils folder contains the one (At present) script used for authorization on the contact form. The components folder then contains all the code for each of the reoccuring renders on each of the pages, with the pages folder having the specific code for each selectable page.

## Installation

For installing in a development enviroment, first be sure to either clone or manually download the code in the repository. From there, open a command line terminal at
the root and be sure to install the packages with 'npm i', from there you should have a fully functional react app directory structure and can test and develop as much
as you desire.

## Usage

Upon either launching a local server or going to the link of the deployed application, you will be presented at the landing page, featuring a small biography in an
About Me section. From there you can click on any of the top nav bar buttons to go to a different page within the project, or the bottom nav buttons to be taken to
my other platforms; github, linkedin, or stack overflow. On the Portfolio page you will see a list of several images of my many deployed projects, clicking an image
will take you to the github repository of a given project, whereas clicking the button underneath will take you to the live deployment of said project. On the contact
page you will have three forms to fill out and submit that features validation for a name, an email, and a message to send to me, as well my e-mail address and phone
number for quicker access. Finally on the resume page you will have a short summary of some of my traits and focuses, as well as a button that downloads a pdf on my resume.

![Landing Page](https://i.gyazo.com/eef1260b96bca2e356b5171cc23a7c99.png)

![Portfolio Page](https://i.gyazo.com/7fd062ea7e33c70438e9f06a2bfa6c4f.png)

![Contact Page](https://i.gyazo.com/0542c32a0992c251b152fb67bfa5566c.png)

![Resume Page](https://i.gyazo.com/f1066bf78fad537e945eac8ba81536d8.png)

## Credits

[Bootstrap](https://getbootstrap.com/)

[React](https://reactjs.org/)

## License

This project is protected by the MIT license: Do as you will with the code, not my fault if errors arise.
