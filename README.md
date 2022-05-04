# Rails Movie Watch List

This is a movie watch list web app, written in ruby on rails and hosted on Heroku
This app allows you to create watch lists of your favourite movies.

> Live demo [_here_](https://movie-watch-list-808.herokuapp.com/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
- This is a movie watch list web app, written in ruby on rails and hosted on Heroku
- This app allows you to create a list of movies you'd like to watch or recommend to others and features a review fewature to allow other to review your list
- What problem does it (intend to) solve?
- This project was completed as part of the Le Wagon fullstack developer bootcamp and served as an opportunity to develop my skills in:
+ ruby on rails
+ javascript
+ scss
+ javascript libraries
+ git version control
+ production deployment
+ implementation of image hosting services


## Technologies Used
- Rails 6.1.5.1
- Ruby 3.0.3
- yarn 1.22.17
- SCSS
- [_select2_](https://select2.org/)
- [_AOS - Animate On Scroll library_](https://michalsnik.github.io/aos/)
- [_typed_js_](https://mattboldt.com/demos/typed-js/)
- Cloudinary image hosting
- [_movie database api_](https://developers.themoviedb.org/3/movies/get-top-rated-movies)
- bootstrap 5
- fontawesome 6
- PostgreSQL


## Features
List the ready features here:
- Create/edit/delete movie lists
- Add bookmarks to movies with comments and images of the movie
- Upload custom images for your lists
- Review others lists


## Setup
You will need Ruby 3.0.3 and Rails 6.1.5.1. Both can be installed via rbenv
You will also need a Cloudinary account (free is sufficient)
Download/Fork/Clone the repo and cd into the repo root directory in your terminal

To check that you have the correct ruby version run:
```ruby --version```

Run: ```touch .env``` followed by ```echo '.env*' >> .gitignore```
and add your cloudinary api to the .env file ```CLOUDINARY_URL=cloudinary://2985**************D-***********************8```

Then run:
```bundle install```
to install the required gems

Run:
```yarn install```
to install the js packages

Run:
```rails db:create```
```rails db:migrate```
```rails db:seed```
to set up your database

Run:
```rails s```
to start a local rails server


## Project Status
Project is: _in progress_


## Room for Improvement
Include areas you believe need improvement / could be improved. Also add TODOs for future development.

To do:
- Clean up navbar 
- Add user authentication
- Add search functionality
- Add Ajax


## Acknowledgements
Give credit here.
- This project was inspired by Le Wagon bootcamp watch list project


## Contact
Created by [_@Cerulean-Ash_](https://cerulean-ash.github.io/portfolioV2/) - feel free to contact me!


