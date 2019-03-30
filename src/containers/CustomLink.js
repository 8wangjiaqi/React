import React from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';

function CustomLink(){  //声明无状态组件
    return (
        <Router>
            <div>
                <OldLink activeOnlyWhenExact={true} to="/" label="Home" />
                <OldLink to="/about" label="About" />
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    )

}

// function OldSchoolMenuLink(props){
function OldSchoolMenuLink({to,location,label,activeOnlyWhenExact}){  //解构赋值，可以直接把props删除

    let isActive= to===location.pathname;
    console.log(props);
    return (
        <li>
            <Link className={isActive?'active':""} exact={activeOnlyWhenExact} to={to}>{label}</Link>
        </li>
    ) 
}
const OldLink =withRouter(OldSchoolMenuLink);//高阶组件

function Home(props){
    console.log(props);
    return <h2>Home组件</h2>
}
function About(){
    return <h2>About组件</h2>
}

export default CustomLink;