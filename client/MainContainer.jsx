import React from 'react';
import CalculatorContainer from './CalculatorContainer.jsx';
import Records from './Records.jsx';

class MainContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tableSize: 5,
            fvalue: 'USD',
            tvalue: 'EUR',
            data: {},
            totalAmt: [0,0,0,0,0]
        }
        this.handlefChange = this.handlefChange.bind(this);
        this.handletChange = this.handletChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAmtChange = this.handleAmtChange.bind(this);
    }

    handlefChange(event) {
        let index = event.target.selectedIndex;
        let optionElement = event.target.childNodes[index];
        let option =  optionElement.getAttribute('fvalue');
        this.setState({fvalue: option});
      }
     
    handletChange(event) {
        let index = event.target.selectedIndex;
        let optionElement = event.target.childNodes[index];
        let option =  optionElement.getAttribute('tvalue');
        this.setState({tvalue: option});
      }

    handleAmtChange(event) {

        let oldArray = this.state.totalAmt;
        oldArray[event.target.id] = event.target.value;
        this.setState({totalAmt: oldArray});
    }
    handleSubmit(event) {
        alert('From: ' + this.state.fvalue + '  To: ' + this.state.tvalue);
        // event.preventDefault();
        let data = {fval: this.state.fvalue, tval:this.state.tvalue};
        let url = '/getRate';
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .catch(error => console.error('Error:', error));
      }

    componentDidMount() {
        let url = '/getAllRates'
        fetch(url, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                console.log('Success :', res)
                // console.log(this.state);
                this.setState({data: res});
            }) 
            .catch(error => console.error('Error:', error))
    
    }
    
    render() {
        return(
            <div id="main">
                <CalculatorContainer key={1}handlefChange={this.handlefChange} handletChange={this.handletChange} handleSubmit={this.handleSubmit} fvalue={this.state.fvalue} tvalue={this.state.tvalue}/>
                <Records key={2}tableSize={this.state.tableSize} data={this.state.data} handleAmtChange={this.handleAmtChange} totalAmt={this.state.totalAmt}/>
            </div>
        )
    }
}
export default MainContainer;