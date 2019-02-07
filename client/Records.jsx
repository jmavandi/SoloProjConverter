import React, { Component } from 'react'

class Records extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let outputArray = [];
    if(this.props.data[0]){
      let end = this.props.data.length;
      let idVal = 0;
      for (let i = 1; i<this.props.tableSize +1; i++) {
        let amt= Number(this.props.totalAmt[idVal]);
        let rate = Number(this.props.data[end-i].to);
        let amtTot = Math.round(amt*rate*100)/100;
        let roundedRate = Math.round(rate*1000)/1000;


      outputArray.push(<tr>
         <td>
            <label>Amount: </label>
            <input onChange={this.props.handleAmtChange} id={idVal} className="input" name='cash'/>
         </td>
         <td>{this.props.data[end-i].fval} </td>
         <td>{this.props.data[end-i].tval} </td>
         <td>{roundedRate} </td>
         <td>{amtTot}</td>
      </tr>);
      idVal +=1;
    }
    }
    
    return(
      <div>
            <table id="table">
               <tr>
                   <th>Amount to Exchange</th>
                   <th>from Currency</th>
                   <th>to Currency</th>
                   <th>rate</th>
                   <th>Total Amount</th>
               </tr>
              {outputArray}
            </table>
      </div>
    )}
}
export default Records;