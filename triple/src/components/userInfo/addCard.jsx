import React, { Component } from "react";
class AddCard extends Component {
  state = {
    enabled: false
  };
  handleEdit = () => {
    this.setState({ editable: !this.state.editable });
  };

  render() {
    const { title, data, onSubmit } = this.props;
    console.log(data);
    return data.map(dat => (
      <div className="basicInfo z-depth-2 ">
        <form onSubmit={e => onSubmit(e)}>
          <button
            type="submit"
            onClick={this.props.addCard}
            className="editIcon right"
          >
            <i class="Small material-icons">save</i>
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
                      <input
                        onChange={e => this.props.onInput(e)}
                        name={item.label}
                        className="basicInfo__columnInput--content"
                        defaultValue={item.value}
                      />
                    </div>
                  </React.Fragment>
                ))
              : null}
          </div>
        </form>
      </div>
    ));
  }
}

export default AddCard;
