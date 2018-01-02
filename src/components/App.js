import React from "react";
import { BrowserRouter , Route } from "react-router-dom";

//COMPONENTS
import Header from "./header";
import  Footer from "./footer";
import Home from "./home";
import Teams from "./teams";

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                   <Header/>
                   <Route exact path="/" component={Home}/>
                    <Route exact path="/teams" component={Teams}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;