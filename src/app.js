import React from "react";
import ReactDOM from "react-dom";
import img from "../styles/leg.png";
import "../styles/style.scss";

import ship from '../styles/ship.jpg';
import eona from '../styles/eona.png';
import agg from '../styles/agg.png';
import defaulticon from '../styles/default.png';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const players = [
    {
      "name": "Ichaival",
      "class": "hunter"
    },
    {
      "name": "雨憶",
      "class": "shaman"
    },
    {
      name: "木葉依姬",
      "class": "druid"
    },
    {
      name: "范達爾聖盔",
      "class": "druid"
    },
    {
      "name": "梯音霸打抗",
      "class": "deathknight"
    },
    {
      "name": "亞緹雅絲",
      "class": "demonhunter"
    },
    {
      "name": "欸冷",
      "class": "druid"
    },
    {
      "name": "魯伊逝旎",
      "class": "druid"
    },
    {
      "name": "欸冷",
      "class": "druid"
    },
    {
      "name": "玥舞晴雪",
      "class": "hunter"
    },
    {
      "name": "Victorianna",
      "class": "mage"
    },
    {
      "name": "蒼葉柚",
      "class": "mage"
    },
    {
      "name": "魂月痕",
      "class": "mage"
    },
    {
      "name": "魔法霹靂拉拉",
      "class": "mage"
    },
    {
      "name": "藍色飛翔",
      "class": "paladin"
    },
    {
      "name": "吉祥物是也",
      "class": "rogue"
    },
    {
      "name": "曙光希望",
      "class": "shaman"
    },
    {
      "name": "近身攻擊",
      "class": "shaman"
    },
    {
      "name": "夜玥泠",
      "class": "warlock"
    },
    {
      "name": "阿曼羅",
      "class": "warrior"
    },
    {
      "name": "驍驍",
      "class": "warrior"
    },
    {
      "name": "落玥之殤",
      "class": "druid"
    },
    {
      "name": "卡斯丁茍逆",
      "class": "paladin"
    },
    {
      "name": "安塔希雅",
      "class": "priest"
    },
    {
      "name": "Salamand",
      "class": "shaman"
    },
    {
      "name": "彤藜",
      "class": "shaman"
    }
  ];

const AWARDS = [
  {//1
    name: '阿曼蘇爾的遊艇',
    quality: 'legendary',
    img: ship
  },
  {//2
    name: '魂月痕的三傑議會之座鑰匙',
    quality: 'trash'
  },
  {//3
    name: '我覺得可以',
    quality: 'trash'
  },
  {//4
    name: '我覺得不行',
    quality: 'trash'
  },
  {//5
    name: 'YTYS的家計簿',
    quality: 'trash'
  },
  {//6
    name: '欸冷的一單',
    quality: 'rare'
  },
  {//7
    name: '阿格拉瑪的持久',
    quality: 'epic',
    img: agg
  },
  {//8
    name: '伊歐娜的精煉',
    quality: 'epic',
    img: eona
  },
  {//9
    name: '阿格拉瑪的持久',
    quality: 'epic',
    img: agg
  },
  {//10
    name: '伊歐娜的精煉',
    quality: 'epic',
    img: eona
  },
  {//11
    name: '阿格拉瑪的持久',
    quality: 'epic',
    img: agg
  },
  {//12
    name: '伊歐娜的精煉',
    quality: 'epic',
    img: eona
  },
  {//13
    name: '阿格拉瑪的持久',
    quality: 'epic',
    img: agg
  },
  {//14
    name: '伊歐娜的精煉',
    quality: 'epic',
    img: eona
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      active: 0,
      logs: [],
      drop: null,
      pool: JSON.parse(JSON.stringify(AWARDS))
    };
  }

  componentDidMount() {

  }

  handleClick(evt) {
    this.setState({
      active: +evt.target.dataset.index
    })
  }

  draw() {    
    if (this.state.drop) {
      return;
    }
    let player = players[this.state.active];
    this.setState((prevState) => {
      if (!prevState.pool.length) {
        return;
      } 
      let logs = prevState.logs;
      let index = getRandomInt(0, this.state.pool.length - 1);
      let item = this.state.pool[index];
      prevState.logs.splice(index, 1);
      console.log(item);
      logs.push([
        this.state.active,
        item
      ]);
      return {
        pool: prevState.pool,
        logs: logs,
        drop: item
      };
    });
  }

  componentDidUpdate() {
    if (this.state.drop) {
      setTimeout(() => {
        this.setState({
          drop: null
        })
      }, 5000);
    }
  }

  render() {
    let dom = [];
    const all = "";
    players.forEach((player, index) => {
      dom.push(
        <div className={"player " + (index === this.state.active ? 'focus' : '')}
          key={index}
          data-index={index}
          data-class={player["class"]}>
          {player.name}
        </div>
      );
    });
    let logs = [];
    this.state.logs.forEach((log) => {
      logs.push(
        <div>
          <span>{`${players[log[0]].name}拾取了`}</span>
          <span className={log[1].quality}>
            {`[${log[1].name}]`}
          </span>
          ！
        </div>
      );
    });
    let drop = null;
    if (this.state.drop) {
      drop = (        
        <div className="img-container" data-quality={this.state.drop.quality}>
          <img className="icon" src={this.state.drop.img || defaulticon} />
          <div className="background" data-quality={this.state.drop.quality} />
          <div className={"name " + this.state.drop.quality}>{this.state.drop.name}</div>
          <div className="shadow" />
        </div>
      )
    }
    return (
      <div className="app">
        <div className="placeholder">
          {drop}
        </div>
        <div className="raid" onClick={(evt)=>{this.handleClick(evt)}}>
          {dom}
        </div>
        <div className="chatlog">
          {logs}
        </div>
        <div className="control">
          <div className="buttons">
            <button
              disabled={this.state.drop ? 'true' : null}
              onClick={() => {this.draw()}}>
              Roll!
            </button>
            <button
              onClick={() => {
                this.setState({drop: null, logs:[], pool: JSON.parse(JSON.stringify(AWARDS))})
              }}
            >
              CLEAR logs
            </button>
          </div>
        </div>
      </div>
    );
  }
}

window.app = ReactDOM.render(<App />, document.getElementById("root"));
