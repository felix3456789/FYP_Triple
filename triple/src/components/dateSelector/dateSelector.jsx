import React, { Component } from 'react';




class DateSelector extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="card">
                <div class="card-content">
                <div class="row">
                    <form onSubmit={this.handleSubmit}>
                        <div class="col s7 push-s5">

                        

                        






                        <input type="radio">本人已細讀及同意<a href="#">網上條款</a></input>
                        <button class="waves-effect waves-light btn-small" type="submit">下一步</button>
                    </div>
                    <div class=class="col s7 push-s5>

                    </div>
                    </form>
                </div>
                </div>
            </div>
         );
    }
}
 
export default DateSelector;