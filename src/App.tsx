import Header from "./components/self/header/Header"
import Footer from "./components/third-party/BottomNav/BottomNavigation"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import "./App.scss"
import { Container } from "@mui/material"
import Movies from "./pages/Movies/Movies"
import Trending from "./pages/Trending/Trending"
import Series from "./pages/Series/Series"
import Search from "./pages/Search/Search"
import React from "react"

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Header />
                <div className="main">
                    <Container>
                        <Switch>
                            <Route path="/" component={Trending} exact/>
                            <Route path="/movies" component={Movies} />
                            <Route path="/series" component={Series} />
                            <Route path="/search" component={Search} />
                        </Switch>
                    </Container>
                </div>
                <Footer />
            </BrowserRouter>
        </>  
    )
}

export default App;