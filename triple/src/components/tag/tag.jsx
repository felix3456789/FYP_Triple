import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Tag extends Component {
  state = {
    tag: ["hi"]
  };
  componentDidMount() {
    const options = {
      onChipAdd() {
        console.log("added");
      },
      onChipSelect() {
        console.log("Selected");
      },
      onChipDelete() {
        console.log("Deleted");
      },
      placeholder: "Entrer a filter",
      secondaryPlaceholder: "+Filter",
      autocompleteOptions: {
        data: {
          澳門: null,
          日本: null,
          深度遊: null
        }
      },
      limit: Infinity,
      minLength: 1
    };
    M.Chips.init(this.chips, options);
  }
  handleClick(data) {
    console.log("Click happened", data);
    this.state.tag.push(data);
    console.log(this.state.tag);
  }
  render() {
    console.log(this.state.tag);
    return (
      <React.Fragment>
        <div
          class="chips"
          id="test"
          ref={chips => {
            this.chips = chips;
          }}
        >
          {this.state.tag.map(item => (
            <h1>hi</h1>
          ))}
          <input class="Tag" />
        </div>
        <div class="card">
          <div class="chip" onClick={() => this.handleClick("澳門")}>
            澳門
          </div>
          <div class="chip">日本</div>
          <div class="chip">深度遊</div>
          <div class="chip">美景遊</div>
          <div class="chip">陽光與海灘</div>
          <div class="chip">三日兩夜</div>
          <div class="chip">無敵大海景</div>
          <div class="chip">環島遊</div>
          <div class="chip">吃喝玩樂</div>
          <div class="chip">泰國</div>
          <div class="chip">七天團</div>
          <div class="chip">打卡勝地</div>
          <br />
          <div class="chip">海鮮餐</div>
          <div class="chip">中山</div>
          <div class="chip">輕輕鬆鬆</div>
          <div class="chip">首爾今期流行</div>
          <div class="chip">今期流行</div>
          <div class="chip">賞櫻花</div>
          <div class="chip">富貴玩樂團</div>
          <div class="chip">文青系</div>
          <div class="chip">北韓深度遊</div>
          <div class="chip">一日遊</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tag;
