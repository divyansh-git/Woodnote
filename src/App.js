import React from "react";
import Header from "./Header/Header";
import {Switch, Route,BrowserRouter} from "react-router-dom";
import Music_Card_Container from "./Music_Card_Container/Music_Card_Container";
import Coding_Card_Container from "./Coding_Card_Container/Coding_Card_Container";
import DailyLife_Card_Container from "./DailyLife_Card_Container/DailyLife_Card_Container";
import Music_Blog_Controller from "./Music_Card_Container/Music_Blog_Renderer/Music_Blog_Controller";
import Coding_Blog_Controller from "./Coding_Card_Container/Coding_Blog_Renderer/Coding_Blog_Controller";
import DailyLife_Blog_Controller from "./DailyLife_Card_Container/DailyLife_Blog_Renderer/DailyLife_Blog_Controller"
import Home from "./Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
        <Header/>
        <BrowserRouter>
        <Switch>
          <Route  exact path ="/" component={Home}/>
          <Route   exact path="/Music" component={Music_Card_Container} />
          <Route   path={`/Music/:id`} component={Music_Blog_Controller}/>
          <Route  exact path="/Coding" component={Coding_Card_Container} />
          <Route   path={`/Coding/:id`} component={Coding_Blog_Controller}/>
          <Route  exact path="/Daily Life" component={DailyLife_Card_Container} />
          <Route   path={`/Daily Life/:id`} component={DailyLife_Blog_Controller}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
