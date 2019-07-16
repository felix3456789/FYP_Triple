import React, { Component } from "react";
class InfoCard extends Component {
  render() {
    const { title, data } = this.props;
    console.log(data);
    return data.map(dat => (
      <div className="basicInfo z-depth-2 ">
        <div className="basinInfo__card">
          <div className="row">
            <h4>{title}</h4>
          </div>
          {dat && dat.length
            ? dat.map(item => (
                <React.Fragment>
                  <div className=" basicInfo__columnInfo--title">
                    <span className="basicInfo__columnInput--title">
                      {item.title}
                    </span>
                  </div>
                  <div className=" basicInfo__columnInfo--content">
                    <input
                      className="basicInfo__columnInput--content"
                      defaultValue={item.value}
                    />
                  </div>
                </React.Fragment>
              ))
            : null}
        </div>
      </div>
    ));
  }
}

export default InfoCard;
