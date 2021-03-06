<p align="center">
  <img src="public/images/api.gif" width="350px" alt="Calindra-bck" />
</p>

# Calindra-bck

![total lines](https://img.shields.io/tokei/lines/github/KlaussVP/calindra-bck) ![last commit](https://img.shields.io/github/last-commit/KlaussVP/calindra-bck?style=flat-square)

## About
<p>
  This project's only purpose is to respond to the challenge made by Calindra through an interview process. This is an API project that returns the distance in kilometers between two or more given addresses as well as the shortest and the furthest distance among the distances calculated. It uses <a href="https://developers.google.com/maps/documentation/geocoding/start">Google's geocoding API</a> to convert addresses (like a street address) into geographic coordinates (like latitude and longitude). It won't have a browser interface. The link to direct requests is down below in the <a href="#deploy">Deploy</a> session.
</p>

<p align="center"><img src="public/images/processing.gif" width="80px"/></p>

<br><br>

<p align="center">
    <a href="#features">Features</a> •
    <a href="#stack">Stack</a> •
    <a href="#deploy">Deploy</a> •
    <a href="#authors">Authors</a>
</p>

<br>

### Features
- Routes:
- [x] API route to handle requests and return the desired answer<br><br>
- Controllers:
- [x] Address layer to handle the addresses passed on the request and return their geolocation<br>
- [x] Distance layer to handle the request of the distances between each two addresses and to solve which distance is the closest and which is the furthest<br><br>
- Auxiliar Functions:
- [x] Function to calculate the Euclidean distances between each two addresses.<br>
- [x] Function to solve the addresses geolocation with Google API.

<br><br>

### Stack
Languages:<br>
<p align="center">
  <img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
</p>
<br>

The following tools and frameworks were used in the construction of the project:<br>
<p align="center">
  <img style='margin: 5px;' src='https://badges.aleen42.com/src/npm.svg'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/babel%20-%2320232a.svg?&style=for-the-badge&color=323230&logo=babel&logoColor=%f4dc4e'>
  <img style='margin: 5px;' src='https://badges.aleen42.com/src/node.svg'>
</p>
<br>

Version Control:<br>
<p align="center">
  <img src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
  <img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
</p>

<br><br>

### Deploy

The API is available on Heroku through the following link: [Calindra-bck](https://calindra-bck.herokuapp.com/)<br><br>

<i>Obs.: The method of the request is a POST and it has to have a body in the json format with the following structure:</i>
```
{
    "addresses": [
        "Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090 003", 
        "Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021 200",
        "Rua 19 de Fevereiro, 34 Botafogo, Rio de Janeiro RJ, 22280 030"
    ]
}
```

<br><br>
## Contributors
<table>
  <tr>
    <td align="center" style="margin-right: 20px;"><a href="https://github.com/heroku"><img src="https://avatars.githubusercontent.com/u/23211?s=200&v=4" width="100px;" alt="Heroku"/><br /><sub><b>Heroku</b></sub></a><br />
  </tr>
  <tr>
    <td align="center" style="margin-right: 20px;"><a href="https://github.com/googleapis"><img src="https://avatars.githubusercontent.com/u/16785467?s=200&v=4" width="100px;" alt="GoogleAPI"/><br /><sub><b>GoogleAPIs</b></sub></a><br />
  </tr>
</table>

<br><br>

### Authors
---
  | <img src="https://avatars.githubusercontent.com/u/70972865?v=4" width="100px" alt="Klauss"/><br> Klauss Correa | 👋 Get in Touch!<br><br><a href="https://www.linkedin.com/in/klausscorrea/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a><br> <a href="https://github.com/KlaussVP"><img src="https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white" /></a> |
  |-----------|-----------|
