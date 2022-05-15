import './AppTypist.css';
import Header from './componentsTypist/Header'
import Board from './componentsTypist/Board'
import KeyBoard from './componentsTypist/KeyBoard'
import Language from './componentsTypist/Language'
import Style from './componentsTypist/Style'
import Size from './componentsTypist/Size'
import Special from './componentsTypist/Special'
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      keyBoards: {
        English: [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='], ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'",'@','!'], ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','%','$','#']],
        Hebrew: [[';', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='], ['/', "'", 'פ', 'ם', 'ן', 'ו', 'ט', 'א', 'ר', 'ק', ']', '[', '\\'], ['ף', 'ך', 'ל', 'ח', 'י', 'ע', 'כ', 'ג', 'ד', 'ש', ',','@','!'], ['ץ', 'ת', 'צ', 'מ', 'נ', 'ה', 'ב', 'ס', 'ז', '.','%','$','#']],
        Arabic: [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='], ['ح', 'خ', 'ه', 'ع', 'غ', 'ف', 'ق', 'ث', 'ص', 'ض', 'ج', 'د'], ['ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط', 'ذ', 'ي', 'ي', 'ش','@','!'], ['ئ', 'ء', 'ؤ', 'ر', 'لا', 'ىا', 'ة', 'و', 'ز', 'ظ','%','$','#']]
      },
      language: ['English', 'Hebrew', 'Arabic'],
      currenLanguage: 'Hebrew',
      status:"small",
      board:[],
      color:"black",
      size:24,
      textShadow:0,
      last:[]
    }
  }
  render() {
    return (
      <div style={{display:this.props.status}} className="blue">
        {console.log(this.props.status)}
        <button onClick={()=>{this.props.setHtml("buttons")}}>back</button>
        <Header />
        <Board board={this.state.board} />
        <KeyBoard keys={this.state.keyBoards[this.state.currenLanguage]} status={this.state.status} addBoard={this.addBoard} color={this.state.color} size={this.state.size} deleteLast={this.deleteLast} setLast={this.setLast} char={this.state.board[this.state.board.length-1]} popLast={this.popLast} bold={this.state.fontWeight}  setBoard={this.setBoard}/>
        <Language changeLanguage={this.changeLanguage} changeUpperCase={this.changeUpperCase} />
        <Style setStyle={this.setStyle} bold={this.state.fontWeight}/>
        <Size setStyle={this.setStyle}/>
        <Special setBoard={this.setBoard} setUpperAll={this.setUpperAll} setLowerAll={this.setLowerAll} setLast={this.setLast} board={[...this.state.board]}/>
      </div>
    );
  }
  changeLanguage = Alanguage => {
    this.setState({ currenLanguage: Alanguage });
  }
  changeUpperCase=Astatus=>{
    this.setState({status:Astatus});
  }
  addBoard=letter=>{
    let arr=this.state.board;
    arr.push(letter);
    this.setState({board:arr})
  }
  setStyle=(key,value)=>{
    this.setState({[key]:value})
  }
  deleteLast=()=>{
    let arr=this.state.board;
    arr.pop();
    this.setState({board:arr})
  }
  setLast=lastActive=>{
    let arr=this.state.last;
    arr.push(lastActive);
    this.setState({last:arr})
  }
  popLast=()=>{
    let arr=[...this.state.last];
    let tmp=arr.pop();
    this.setState({last:arr})
    return tmp;
  }
  setBoard=(arr)=>{
    this.setState({board:arr})
  }
  setUpperAll=()=>{
    let arr=this.state.board;
    arr=arr.map(letter=>{return ({value:(letter.value==="<br />"?"<br />":letter.value.toUpperCase()),color: letter.color, size: letter.size, fontWeight: letter.fontWeight})});
    this.setState({board:arr});
  }
  setLowerAll=()=>{
    let arr=this.state.board;
    arr=arr.map(letter=>{return({value:(letter.value==="<br />"?"<br />":letter.value.toLowerCase()),color: letter.color, size: letter.size, fontWeight: letter.fontWeight})});
    this.setState({board:arr})
  }

}


export default App;