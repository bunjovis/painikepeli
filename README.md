# Painikepeli

Welcome to my first React projects repository! This project was made for [Koodarijahti](https://koodarijahti.fi/). Live demo of the game is available at [here](http://eiviela.com).

This project is a multiplayer game about pressing a button. Each player starts with 20 points. Each press of button costs one point. You can only press the button if you have points. The server has a counter of every button press and you might get a point reward if you press at the right time.
Rewards:

- 5 points for every 10th press
- 40 points for every 100th press
- 250 points for every 500th press

You can only win one reward with one press, so you only get the highest reward in case of multiple rewards.

## Installation & Running

Pre-requisites: You should have [node.js](https://nodejs.org/en/) installed.

1. Clone or download this repository.
2. Go to the folder you cloned/downloaded the repository
3. Run `yarn`
4. Run `yarn run start`
5. The game should now be running at [localhost](http://localhost:3000)

To start the development server to modify frontend on the fly, run `yarn run dev`.

## About

As this was my first React project, I used [Create React App](https://github.com/facebook/create-react-app) to create the template. Backend is made with [Express](https://expressjs.com/).

## License

This project is licensed with MIT license.
