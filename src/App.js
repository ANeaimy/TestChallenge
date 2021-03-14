import './App.css';
import HeadBar from './components/HeadBar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './components/Home';
import {Compare} from "./components/Compare";
import { About  } from "./components/About";
import {Grid} from 'semantic-ui-react'

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <HeadBar></HeadBar>
    <Grid container style={{ padding: '0em 0em' }}>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/compare' component={Compare} exact/>
      <Route path='/about' component={About} exact/>
    </Switch> 
    </Grid>
    </BrowserRouter>

    </div>
  );
}

export default App;
