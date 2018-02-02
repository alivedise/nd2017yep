import React from "react";
import ReactDOM from "react-dom";
import img from "../styles/leg.png";
import "../styles/style.scss";

import ship from '../styles/ship.jpg';
import eona from '../styles/eona.png';
import agg from '../styles/agg.png';
import defaulticon from '../styles/default.png';

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

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
    name: '阿歐巴的生態考察之旅',
    quality: 'trash'
  },
  {//4
    name: '沒時間了快上車',
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
  },
  {//15
    name: '逼逼波的鬼母坐騎',
    quality: 'trash'
  },
  {//16
    name: '吉祥物的核心橘',
    quality: 'trash'
  },
  {//17
    name: '大頭的自由祝福',
    quality: 'trash'
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
      pool: shuffle(JSON.parse(JSON.stringify(AWARDS)))
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
    let player = players[this.state.active];
    this.setState((prevState) => {
      if (!prevState.pool.length) {
        return;
      } 
      let logs = prevState.logs;
      let index = getRandomInt(0, this.state.pool.length - 1);
      let item = this.state.pool[index];
      let key = s4();
      prevState.pool.splice(index, 1);
      console.log(item);
      logs.push([
        this.state.active,
        item,
        key
      ]);
      item.id = key;
      return {
        pool: prevState.pool,
        logs: logs,
        drop: item
      };
    }, () => {

    });
  }

  componentDidUpdate() {
    this.log.scrollTop = this.log.scrollHeight;
    window.clearTimeout(this.timer);
    if (this.state.drop) {
      this.timer = setTimeout(() => {
        this.setState({
          drop: null
        })
      }, 10000);
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
        <div key={log[2]}>
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
        <div key={this.state.drop.id} className="img-container" data-quality={this.state.drop.quality}>
          <img className="icon" src={this.state.drop.img || defaulticon} />
          <div className="background" data-quality={this.state.drop.quality} />
          <div className={"name " + this.state.drop.quality}>{this.state.drop.name}</div>
          <div className="shadow" />
        </div>
      )
    }
    let pool = [];
    this.state.pool.forEach((i) => {
      pool.push(<span className={i.quality}>[問號]</span>)
    });
    return (
      <div className="app">
        <div className="placeholder">
          {drop}
        </div>
        <div className="raid" onClick={(evt)=>{this.handleClick(evt)}}>
          {dom}
        </div>
        <div className="bottom">
          <div className="chatlog" ref={(dom)=>{this.log=dom}}>
            {logs.length ? logs : '今日公會訊息：2/3(六) ND2017年尾牙！'}
          </div>
          <div className="pool">
            {
              pool.length ? pool : '抽光了!'
            }
          </div>
          <div className="control">
            <div className="buttons">
              <button
                onClick={() => {this.draw()}}>
                Roll!
              </button>
              <button
                onClick={() => {
                  this.setState({drop: null, logs:[], pool: shuffle(JSON.parse(JSON.stringify(AWARDS)))})
                }}
              >
                CLEAR
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

window.app = ReactDOM.render(<App />, document.getElementById("root"));
