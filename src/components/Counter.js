import React from "react";
import {connect} from 'react-redux'

// count is the mechanism as where state is passed in
function Counter({count,dispatch}) {

    function inc() {
        dispatch({type: 'INC'})
        // dispatch an item of type incrememnt
    }

    function dec() {
        dispatch({type: 'DEC'})
        // dispatch an item of type incrememnt
    }

    return(
        <div>
            Count: {count}
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}

// when we get the state, call it count and pull the 'count' value
function mapStateToProps(state)
{ 
    return (
        {count:state.count}
    )
}


export default connect(mapStateToProps)(Counter)

// export default connect()(Counter)
// const func1 = connect()
// func1(Counter)