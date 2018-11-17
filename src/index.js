import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// COMPONENTS
import Home from './componet/home';
import Posts from './componet/posts';
import Profiles from './componet/profiles'

//myawesomeapp.com/posts
//myawesomeapp.com/profile/posts

const App =()=>{
    return (
        <BrowserRouter>
        <div>
            <header>
                <Link to="/">Home</Link><br/>
                <Link to="/posts">Posts</Link><br/>
                <Link to={{
                    pathname:'/profile',
                    hash:'#francis',
                    search:'?profile=true'
                }}>Profiles</Link><br/>
            </header>
            <hr/>
            <Route path="/" exact component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/profile" component={Profiles}/>

<hr/>
            <footer>
                Footer
            </footer>
        </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
