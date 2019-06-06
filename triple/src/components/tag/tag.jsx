import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./style.css";
class Tag extends Component {
  state = {
    chipsData: [{ tag: "" }]
  };
  componentDidMount() {
    const options = {
      onChipAdd(data) {
        var newChip = data[0].M_Chips.chipsData;
        this.handleChips(newChip);
        console.log(this.state.chipsData);
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

  async handleChips(data) {
    await this.setState({ chipsData: data });
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
          className="chips"
          id="test"
          ref={chips => {
            this.chips = chips;
          }}
        >
          <input className="Tag" />
        </div>
        <div>
          <div className="chip">
            澳門
            <i class="material-icons close">close</i>
          </div>
          {/*<div className="chip">日本</div>
          <div className="chip">深度遊</div>
          <div className="chip">美景遊</div>
          <div className="chip">陽光與海灘</div>
          <div className="chip">三日兩夜</div>
          <div className="chip">無敵大海景</div>
          <div className="chip">環島遊</div>
          <div className="chip">吃喝玩樂</div>
          <div className="chip">泰國</div>
          <div className="chip">七天團</div>
          <div className="chip">打卡勝地</div>
          <br />
          <div className="chip">海鮮餐</div>
          <div className="chip">中山</div>
          <div className="chip">輕輕鬆鬆</div>
          <div className="chip">首爾今期流行</div>
          <div className="chip">今期流行</div>
          <div className="chip">賞櫻花</div>
          <div className="chip">富貴玩樂團</div>
          <div className="chip">文青系</div>
          <div className="chip">北韓深度遊</div>
          <div className="chip">一日遊</div>*/}
        </div>
      </React.Fragment>
    );
  }
}

export default Tag;
