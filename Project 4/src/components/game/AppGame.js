import './AppGame.css';
import React from 'react';
import Header from './componentsGame/Header';
import Player from './componentsGame/Player';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gamers: []
    }
  }
  render() {
    const players = this.state.gamers.map((player, i) => <Player gamer={player} index={i} update={this.update} logOut={this.logOut} newGame={this.newGame} setsuprise={this.setsuprise} />);
    return (
      <div style={{display:this.props.status}} className="pink">
        {console.log(this.props.status)}
        <button onClick={()=>{this.props.setHtml("buttons")}}>back</button>
        <Header startGame={this.startGame} addUser={this.addUser} newGameRender={this.newGameRender} start={this.state.gamers.length} />
        <div></div>{players}
      </div>
    );
  }
  startGame = (click) => {
    let tmp = this.state.gamers;
    if (click === "yes") {
      tmp = [];
      let numOfUser = prompt("enter num of gamers");
      while (isNaN(numOfUser) || numOfUser < 2) {
        numOfUser = prompt("enter num of gamers again");
      }
      let newName;
      for (let i = 0; i < numOfUser; ++i) {
        newName = prompt(`enter name of gamer number ${i + 1}`);
        tmp.push({ name: this.helpPrompt(tmp, newName), number: 0, steps: 0, scores: [], status: 0 });
      }
    } else if (tmp.length < 2) {
      let newName = prompt(`enter name of gamer number ${tmp.length + 1}`);
      tmp.push({ name: this.helpPrompt(tmp, newName), number: 0, steps: 0, scores: [], status: 0 });
    }
    tmp.forEach((gamer) => {
      gamer.number = (Math.floor(Math.random() * 100))
      gamer.scores.push(1000);
      gamer.steps = 0;
      gamer.status = 0;
    });
    tmp[0].status = 1;
    this.setState({ gamers: tmp });
  }
  update = (number, index) => {
    let tmp = this.state.gamers;
    tmp[index].scores[tmp[index].scores.length - 1] -= number >= 200 ? 100 : 1;
    tmp[index].steps += 1;
    if (tmp[index].steps >= 10) {
      alert("think better🤔");
    }
    tmp[index].number = number;
    tmp[index].status = ((number === 100) ? 2 : 0);
    let counterWin = 0;
    let tmpIndex = index;
    while (tmp[(tmpIndex + 1) % tmp.length].status === 2 && counterWin !== tmp.length - 1) {
      counterWin++;
      tmpIndex++;
    }
    if (counterWin !== tmp.length - 1) {
      tmp[(tmpIndex + 1) % tmp.length].status = 1;
      this.setState({ gamers: tmp });
    } else {
      this.setState({ gamers: tmp });
      this.startGame("no");
    }

  }
  addUser = () => {
    let tmp = this.state.gamers;
    let newName = prompt(`enter name of gamer number ${tmp.length + 1}`);
    tmp.push({ name: this.helpPrompt(tmp, newName), number: Math.floor(Math.random() * 100), steps: 0, scores: [1000], status: 0 });
    this.setState({ gamers: tmp });
  }
  logOut = (index) => {
    let tmp = this.state.gamers;
    tmp.splice(index, 1);
    this.setState({ gamers: tmp });
  }
  newGame = (index) => {
    let tmp = this.state.gamers;
    tmp[index].number = Math.floor(Math.random() * 100);
    tmp[index].steps = tmp[index].status = 0;
    tmp[index].scores.push(1000);
    this.setState({ gamers: tmp });
  }
  newGameRender = () => {
    let tmp = this.state.gamers;
    tmp.forEach((gamer) => {
      gamer.number = (Math.floor(Math.random() * 100))
      gamer.scores[gamer.scores.length - 1] = 1000;
      gamer.steps = 0;
      gamer.status = 0;
    });
    tmp[0].status = 1;
    this.setState({ gamers: tmp });
  }
  helpPrompt(arr, newName) {
    while (this.helpFind(newName, arr)) {
      newName = prompt("there is anoter gamer with same name enter another name");
    }
    return newName;
  }
  helpFind(name, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === name) {
        return true;
      }
    }
    return false;
  }
  setsuprise = (index) => {
    let number = Math.floor(Math.random() * 4);
    let tmp = this.state.gamers;
    console.log(number);
    switch (number) {
      case 0:
        console.log(number);
        tmp[index].scores[tmp[index].scores.length - 1] -= 75;
        alert("you miss 75 scores")
        break;
      case 1:
        tmp[index].scores[tmp[index].scores.length - 1] += 200;
        alert("you gain 200 scores ")
        break;
      case 2:
        tmp[index].number = Math.floor(Math.random() * 100)
        alert("you have a new number ")
        break;
      case 3:
        tmp[index].number -= 50;
        alert(`your number is change to ${tmp[index].number}`)
        break;
      default:
        break;
    }
    this.setState({gamers:tmp})
  }
}

export default App;
