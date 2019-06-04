import React, { Component } from "react";
import "../../css/footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer className="page-footer bgColor1">
          <div className="paddingLeftRight row">
            <div className="col s4">
              <h5>支持我們</h5>
              <p className="textJustify">
                我們願意為大家提供一個更好的旅行團一站色服務，讓大家能夠更輕易參加最適合自己的旅行團。若你對Triple感到滿意，又希望可以捐款支持我們，讓Triple可以更上一層樓。無論多與少，亦能成為我們一份努力的動力！
              </p>
              <a className="waves-effect waves-light btn blue darken-2">支持</a>
            </div>
            <div className="col s4">
              <h5>合作夥伴</h5>
              <img src="/image/Triple.png" alt="Triple" className="pictSize" />
            </div>
            <div className="col s4">
              <h5>關注我們</h5>
              <img src="/image/fb.png" alt="FB" className="pictSizeFB" />
              <img
                src="/image/Instagram.png"
                alt="IG"
                className="paddingLeftMore pictSize"
              />
              <img
                src="/image/twitter_PNG19.png"
                alt="twitter"
                className="paddingLeftMore pictSize"
              />
            </div>
          </div>
          <div className="footer-copyright">
            <span className="paddingLeft">
              © 2019 Triple, All rights reserved.
            </span>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
