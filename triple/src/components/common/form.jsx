import { Component } from "react";
class Form extends Component {
  state = { data: {}, errors: {} };
  validate = () => {
    const errors = {};
    // const { data } = this.state;
    //if (data.username.trim() === "") errors.username = "Username is required";
    // if (data.company.trim() === "") errors.company = "Company is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = event => {
    event.preventDefault();
    // const errors = this.validate();
    // console.log(errors);
    // this.setState({ errors: errors || {} });
    // if (errors) return;
    console.log("Login Submit", this.state.data);
    //this.props.onSubmit(this.state.data);
  };
  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
    console.log(data);
  };
}

export default Form;
