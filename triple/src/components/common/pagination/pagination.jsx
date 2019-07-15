import React, { Component } from "react";
class Pagination extends Component {
  state = {};
  render() {
    return (
      <ul class="pagination">
        <li class="disabled">
          <a href="#!">
            <i class="material-icons">chevron_left</i>
          </a>
        </li>
        <li class="active">
          <a href="#!">1</a>
        </li>
        <li class="waves-effect">
          <a href="#!">2</a>
        </li>
        <li class="waves-effect">
          <a href="#!">3</a>
        </li>
        <li class="waves-effect">
          <a href="#!">4</a>
        </li>
        <li class="waves-effect">
          <a href="#!">5</a>
        </li>
        <li class="waves-effect">
          <a href="#!">
            <i class="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    );
  }
}

export default Pagination;
