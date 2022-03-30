import './App.css';
import Counter from './components/Counter';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const INITIAL_VALUE = {count:0}
const store = createStore(reducer)

function reducer(state=INITIAL_VALUE,action)
{
  console.log('IN reducer' , action.type)
    return(
      state
    )
}

// store.dispatch({type: 'chicken'})

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;
