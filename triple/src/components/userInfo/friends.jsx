import React, { Component } from 'react';
import "../../css/friends.css";
class Friends extends Component {
    state = {  };
    constructor(props) {
        super(props);
        this.state = { 
            disabled: true,
            ChineseLastName:"曾",
            ChineseFirstName:"媽媽",
            EnglishLastName:'Tsang',
            EnglishFirstName:'Ma Ma',
            call:'女士',
            p_type:'香港特區護照(SAR)',
            p_date:'10-04-2025',
            p_number:'k123545689',
            p_vanue:'香港',
            phone_num:'67897777',
            email:'tsangmama@abcd.com'
         }
      }
      handleGameClik() {
        this.setState( {disabled: !this.state.disabled} )
      }
      onChange = e => this.setState({ [e.target.name]: e.target.value })
    render() { 
        const {
            ChineseLastName,
            ChineseFirstName,
            ChineseFullName=[ChineseLastName+' '+ChineseFirstName],
            EnglishLastName,
            EnglishFirstName,
            EnglishFullName=[EnglishLastName+' '+EnglishFirstName],
            call,
            p_type,
            p_date,
            p_number,
            p_vanue,
            phone_num,
            email
        } = this.state;
        return (
            <React.Fragment>
                <div className="card FriendsCard">
                    <h5 ClassName="Friends__title">曾同行人資料</h5>
                    <button onClick = {this.handleGameClik.bind(this)}><i class="material-icons">edit</i></button>

                    <div className="row Friends__info">
                    <div className="col s4">
                        <span>中文姓名:</span>
                    </div>
                    <div className="col s5">
                    <input
                    type="text"
                    name='ChineseFullName'
                    value={ChineseFullName}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
                </div>

                    <div className="row Friends__info">
                    <div className="col s4">
                        <span>英文姓名:</span>
                    </div>
                    <div className="col s5">
                    <input
                    type="text"
                    name='EnglishFullName'
                    value={EnglishFullName}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
                    </div>

                    <div className="row Friends__info">
                    <div className="col s4">
                        <span>稱謂:</span>
                    </div>
                    <div class=" col s5">
                    <input
                    type="text"
                    name='call'
                    value={call}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
                    </div>

                    <div className="row Friends__info">
                    <div className="col s4">
                        <span>證件類型:</span>
                    </div>
                    <div class=" col s5">
                    <input
                    type="text"
                    name='p_type'
                    value={p_type}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
                    </div>
                 
                    <div className="row Friends__info">
                    <div className="col s4">
                        <span>證件有效期:</span>
                    </div>
                    <div className="col s5">
                    <input
                    type="text"
                    name='p_date'
                    value={p_date}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
                    </div>

                    <div className="row Friends__info">
                    <div className="col s4">
                        <span>證件號碼:</span>
                    </div>
                    <div className="col s5">
                    <input
                    type="text"
                    name='p_number'
                    value={p_number}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
                    </div>

                    <div className="row Friends__info">
                    <div className="col s4">
                        <span>證件簽發地:</span>
                    </div>
                    <div className="col s5">
                    <input
                    type="text"
                    name='p_vanue'
                    value={p_vanue}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
                    </div>

                    <div className="row Friends__info">
                    <div className="col s4">
                        <span>手提電話號碼:</span>
                    </div>
                    <div className="col s5">
                    <input
                    type="text"
                    name='phone_num'
                    value={phone_num}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
                    </div>

                    <div className="row Friends__info">
                    <div className="col s4">
                        <span>Email:</span>
                    </div>
                    <div className="col s5">
                    <input
                    type="text"
                    name='email'
                    value={email}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
                    </div>
                </div>
            </React.Fragment>
          );
    }
}
 
export default Friends;