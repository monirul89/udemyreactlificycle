import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';

// COMPONENTS
import Home from './componet/home';
import Posts from './componet/posts';
import Profiles from './componet/profiles';
import Life from './componet/life';
import PostItem from './componet/post_item';

//myawesomeapp.com/posts
//myawesomeapp.com/profile/posts

const App =()=>{
    return (
        <BrowserRouter>
        <div>
            <header>
                <NavLink to="/">Home</NavLink><br/>
                <NavLink to="/posts">Posts</NavLink><br/>                
                <NavLink to={{
                    pathname:'/profile',
                    hash:'#francis',
                    search:'?profile=true'
                }}>Profiles</NavLink><br/>
                <NavLink to="/life">Life</NavLink><br/>
            </header>
            <hr/>
            
            <Route path="/posts" exact component={Posts} />
            <Route path="/posts/1" component={PostItem} />
            <Route path="/profile" component={Profiles}/>
            <Route path="/life" component={Life}/>
            <Route path="/" exact component={Home} />

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
