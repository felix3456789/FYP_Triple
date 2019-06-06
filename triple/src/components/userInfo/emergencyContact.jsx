import React, { Component } from 'react';
import "../../css/emergencyContact.css";

class EmergencyContact extends Component {
    state = {  };
    constructor(props) {
        super(props);
        this.state = { 
            disabled: true,
            ChineseLastName:"曾",
            ChineseFirstName:"爸爸",
            EnglishLastName:'Tsang',
            EnglishFirstName:'Ba Ba',
            call:'先生',
            phone_num:'66892222',
            email:'tsangbaba@abcd.com'
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
            phone_num,
            email
        } = this.state;
        return ( 
            <React.Fragment>
                <div className="card emergencyContactCard">
                    <h5 className="emergencyContact__title">緊急聯絡人資料 1</h5>

                    <button onClick = {this.handleGameClik.bind(this)}><i class="material-icons">edit</i></button>

                    <div className="row emergencyContact__info">
                     <div className="col s4">
                        <span>中文姓名:</span>
                     </div>
                     <div className="col s6">
                         <input
                            type="text"
                            name='ChineseFullName'
                            value={ChineseFullName}
                            onChange={this.onChange}
                            disabled = {(this.state.disabled)? "disabled" : ""}
                         />
                     </div>
                    </div>

                    <div className="row emergencyContact__info">
                        <div className="col s4">
                            <span>英文姓名:</span>
                        </div>
                        <div className="col s6">
                            <input
                                type="text"
                                name='EnglishFullName'
                                value={EnglishFullName}
                                onChange={this.onChange}
                                disabled = {(this.state.disabled)? "disabled" : ""}/>
                        </div>
                    </div>

                    <div className="row emergencyContact__info">
                    <div className="col s4">
                        <span>稱謂:</span>
                    </div>
                    <div class=" col s6">
                    <input
                    type="text"
                    name='call'
                    value={call}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
                    </div>

                    <div className="row emergencyContact__info">
                    <div className="col s4">
                        <span>手提電話號碼:</span>
                    </div>
                    <div className="col s6">
                    <input
                    type="text"
                    name='phone_num'
                    value={phone_num}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
                    </div>

                    <div className="row emergencyContact__info">
                    <div className="col s4">
                        <span>Email:</span>
                    </div>
                    <div className="col s6">
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
 
export default EmergencyContact;