import React from "react";
export default function Header(props) {

    const {banner , bannerFlex} = props;
    
    return (
        <div className={banner}>
            <div className={bannerFlex}>
                <img className="logo" src="./img/logo.png" alt="logo" ></img>
                <h1 className="nome-app">ZapRecall</h1>
            </div>
        </div>
    )
}