import React from "react";
import './header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="svg2css__header">
                <h1 className="svg2css__header__name">#svg2css</h1>
                <div className="svg2css__header__header-links">
                    <iframe 
                        src="https://ghbtns.com/github-btn.html?user=prateekjadhwani&repo=svg2css&type=star&count=true&size=large"
                        frameBorder="0"
                        scrolling="0"
                        width="140px"
                        height="30px"></iframe>
                    <iframe src="https://ghbtns.com/github-btn.html?user=prateekjadhwani&repo=svg2css&type=fork&count=true&size=large"
                        frameBorder="0"
                        scrolling="0"
                        width="140px"
                        height="30px"></iframe>
                </div>
            </div>
        );
    }
}

export default Header;

/*
<h1>Hello -- ok  { new Date().toLocaleString() }</h1>
*/