import React from "react"
import styles from "./style.css"
import Information from "./components/info"
import Buttons from "./components/Buttons"
import About from "./components/About"
import Interests from "./components/Interests"
import Icons from "./components/Icons"

export default function Container() {
    return (
        <div className="container">
            <img className="image" src="./image.jpg"></img>
            <Information />
            <Buttons />
            <About />
            <Interests />
            <Icons />
        </div>
    )
}