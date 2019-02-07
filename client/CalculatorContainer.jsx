import React from 'react';
class Calculator extends React.Component {
    constructor(props){
        super(props); 
    }   
    render() {
        const {tvalue,fvalue,handleSubmit,handletChange,handlefChange} = this.props; 
        return (
            <form onSubmit={handleSubmit}> 
              <span id="from-currency">
                 <select fvalue={fvalue} onChange={handlefChange}>
                      <option fvalue="USD">US Dollar</option>
                      <option fvalue="EUR">Euro</option>
                      <option fvalue="MXN">Mexican Peso</option>
                      <option fvalue="CNY">Chinese Yuan/Renminbi</option>
                      <option fvalue="JPY">Japanese Yen</option>
                      <option fvalue="KRW">South Korean Won</option>
                      <option fvalue="AUD">Australian Dollar</option>
                      <option fvalue="CAD">Canadian Dollar</option>
                  </select>
              </span>
              <span id="to-currency">
                  <select tvalue={tvalue} onChange={handletChange}>
                      <option tvalue="EUR">Euro</option>
                      <option tvalue="USD">US Dollar</option>
                      <option tvalue="MXN">Mexican Peso</option>
                      <option tvalue="CNY">Chinese Yuan/Renminbi</option>
                      <option tvalue="JPY">Japanese Yen</option>
                      <option tvalue="KRW">South Korean Won</option>
                      <option tvalue="AUD">Australian Dollar</option>
                      <option tvalue="CAD">Canadian Dollar</option>
                  </select>
              </span>
              <input type="submit" value="Add to List"/>
        </form>

    )
}   
}
export default Calculator;
 