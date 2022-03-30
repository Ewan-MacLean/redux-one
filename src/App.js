import './App.css';
import Counter from './components/Counter';
import {createStore} from 'redux'
import {Provider,connect} from 'react-redux'

const INITIAL_VALUE = {count:0}
const store = createStore(reducer)

function reducer(state=INITIAL_VALUE,action)
{
  return(
    state
  )
}

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
