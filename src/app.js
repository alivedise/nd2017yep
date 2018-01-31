import React from "react";
import ReactDOM from "react-dom";
import img from "../styles/leg.png";
import "../styles/style.scss";

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
  {
    name: '阿曼蘇爾的遊艇',
    quality: 'legendary',
    count: 1
  },
  {
    name: '魂月痕',
    quality: 'trash'
  },
  {
    name: '我覺得可以',
    quality: 'trash'
  },
  {
    name: '我覺得不行',
    quality: 'trash'
  },
  {
    name: '666',
    quality: 'normal'
  },
  {
    name: '欸冷的零用錢',
    quality: 'blue'
  },
  {
    name: '阿格拉瑪的持久',
    quality: 'epic'
  },
  {
    name: '伊歐娜的精煉',
    quality: 'epic'
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      active: 0,
      logs: []
    }
  }

  componentDidMount() {

  }

  handleClick(evt) {
    console.log(evt);
    this.setState({
      active: +evt.target.dataset.index
    })
  }

  draw() {
    let player = players[this.state.active];
    this.setState((prevState) => {
      let logs = prevState.logs;
      logs.push([this.state.active, getRandomInt(0, AWARDS.length - 1)]);
      return {
        logs: logs
      };
    });
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
          <span className={AWARDS[log[1]].quality}>
            {`[${AWARDS[log[1]].name}]`}
          </span>
          ！
        </div>
      );
    });
    return (
      <div className="app">
        <div className="raid" onClick={(evt)=>{this.handleClick(evt)}}>
          {dom}
        </div>
        <div className="chatlog">
          {logs}
        </div>
        <div className="control">
          <div className="img-container">
            <img className="drop" src={img} />
            <div className="shadow" />
          </div>
          <div className="buttons">
            <button onClick={() => {this.draw()}}>
              Roll!
            </button>
            <button onClick={() => {this.setState({logs:[]})}}>
              CLEAR logs
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
