import React, { Component } from 'react';
import "../../css/payment.css";

class Payment extends Component {
    state = {  
        
    };
    constructor(props) {
        super(props);
        this.state = { 
            disabled: true,
            creditcard_num:'445900324456112',
        
        EnglishFirstName:'Ho Ching',
        EnglishLastName:'Tsang',
        vaild_date:'05/22'
         }
      }
      handleGameClik() {
        this.setState( {disabled: !this.state.disabled} )
      }
      onChange = e => this.setState({ [e.target.name]: e.target.value })
    render() { 
            const {
                EnglishLastName,
                EnglishFirstName,
                creditcard_num,
                creditcardHolder=[EnglishLastName+' '+EnglishFirstName],
                vaild_date
            } = this.state;
        return ( 
            <React.Fragment>
                <div className="card paymentBox">
                  
                    <h5 className="payment__title">
                       Payment mathod 1
                   </h5>
                <button onClick = {this.handleGameClik.bind(this)}><i class="material-icons">edit</i></button>
                    

                <div className="row payment__info">
                    <div className="col s4">
                        <span>信用卡號碼:</span>
                    </div>
                    <div className="col s6">
                    <input
                    className="payment__input"
                    type="text"
                    name='creditcard_num'
                    value={creditcard_num}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
                

                </div>
                <div class="row payment__info">
                    <div class="col s4">
                        <span>持卡人姓名:</span>
                    </div>
                    <div class="col s6">
                    <input
                    type="text"
                    name='creditcardHolder'
                    value={creditcardHolder}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>

                </div>

                <div class="row payment__info">
                    <div class="col s4">
                        <span>有效日期:</span>
                    </div>
                    <div class="col s6">
                    <input
                    type="text"
                    name='vaild_date'
                    value={vaild_date}
                    onChange={this.onChange}
                    disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
                

                </div>
                <div class="row payment__info">
                    <div class="col">
                        <button class="waves-effect waves-light btn-small payment__record">付款記錄</button> 
                    </div>
                </div>
                
                </div>
            </React.Fragment>
         );
    }
}
 
export default Payment;