import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import Error from './components/Error'
import SingleRoom from './Pages/SingleRoom'
import Navbar from './components/Navbar'


function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/reactHotelSite/">
                        <Home />
                    </Route>
                    <Route exact path="/reactHotelSite/rooms">
                        <Rooms />
                    </Route>
                    <Route path="/reactHotelSite/room/:id">
                        <SingleRoom />
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
