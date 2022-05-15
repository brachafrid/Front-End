import React from 'react';
import './App.css';
import AppTypist from './components/typist/AppTypist.';
import AppGame from './components/game/AppGame';
import Button from './components/Button'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            game: "none",
            typist: "none",
            buttons: "block"
        }
    }
    render() {
        return (
            <div>
                <Button status={this.state.buttons} setHtml={this.setHtml}/>
                <AppGame status={this.state.game} setHtml={this.setHtml}/>
                <AppTypist status={this.state.typist} setHtml={this.setHtml}/>
            </div>
        );
    }
    setHtml = key => {
        switch (key) {
            case "game":
                this.setState({ typist: "none" });
                this.setState({ buttons: "none" });
                this.setState({ game: "block" });
                break;
            case "typist":
                this.setState({ buttons: "none" });
                this.setState({ game: "none" });
                this.setState({ typist: "block" });
                break
            case "buttons":
                this.setState({ typist: "none" });
                this.setState({ game: "none" });
                this.setState({ buttons: "block" });
                break;
            default:
                break;
        }
    }
}

export default App; 