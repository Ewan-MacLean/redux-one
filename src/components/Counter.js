import React from "react";
import connect from 'react-redux'

// count is the mechanism as where state is passed in
function Counter({count}) {
    return(
        <div>
            Count: {count}
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