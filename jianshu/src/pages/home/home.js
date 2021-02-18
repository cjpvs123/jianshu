import React from "react";
import Header from "../../components/header";
import Content from "../../components/content";

export default class Home extends React.Component{

    render() {
        return(
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}

