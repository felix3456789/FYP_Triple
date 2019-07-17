import React, { Component } from "react";
class InfoCard extends Component {
  state = {
    enabled: false
  };
  handleEdit = () => {
    this.setState({ editable: !this.state.editable });
  };

  render() {
    const { title, data, onDelete, type } = this.props;
    console.log(data);

    return data.map((dat, index) => (
      <div className="basicInfo z-depth-2 ">
        <button
          onClick={() => this.props.onDelete(type, dat[0].value)}
          type="submit"
          className="editIcon right"
        >
          <i class="Small material-icons">delete</i>
        </button>
        <button
          type="button"
          onClick={this.props.addCard}
          className="editIcon right"
        >
          <i class="Small material-icons">add</i>
        </button>

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
                    <span className="basicInfo__columnInput--content">
                      {item.value}
                    </span>
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
