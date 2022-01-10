import React, {useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({value = 0}) => {
    const [counter, setCounter] = useState(value);
    
    // handleAdd
    const handleAdd = (e) => {
        setCounter(counter +1);
        //setCounter( (c) => c +1 );
    }

    const handleReset = (e) => {
        setCounter(value);
    }

    const handleSubstract = (e) => {
        setCounter(counter -1);
    }
    
    return (
        <>
            <h1>Counter App</h1>
            <h3>{ counter }</h3>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );

}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 10
}
export default CounterApp;