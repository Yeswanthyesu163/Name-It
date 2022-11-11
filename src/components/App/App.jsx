import React, { useState } from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import './App.css'

const name = require('@rstacruz/startup-name-generator');

function App() {
    const [headerText, setHeaderText] = useState('Name It!');
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        setSuggestedNames(inputText ? name(inputText) : []);
        setHeaderExpanded(!(inputText));
    }

    return(
        <div>
            <Header 
                headerTitle = {headerText}
                headerExpanded = {headerExpanded}
            />
            <SearchBox onInputChange={handleInputChange}/>
            <ResultsContainer suggestedNames = {suggestedNames}/>
        </div>
    )
}

export default App;