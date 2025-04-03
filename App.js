import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Dropdown from "./components/Dropdown";
import UserFetcher from "./components/UserFetcher";


const Header =()=>{
    return (
        <div className="header">
            <div className="logo-container">
               <img className="logo" src="https://i.pinimg.com/736x/48/1d/37/481d37dffbf8935194c5fdd30a573773.jpg"/>
            
            </div> <h2 className="appName">Scriptless WTA</h2>
            <div className="nav-items">
               <ul>
                <li>Record</li>
                <li>Play</li>
                <li>Stop</li>
                <li>Account</li>
                <li>Settings</li>
                </ul> 
            </div>
        </div>
    )
}
const handleSelection = (selected) => {
    console.log('You selected:', selected);
  };
const Body=()=>{
     // State to hold the input value
  const [inputURLValue, setInputURLValue] = useState('');

  // Update state on input change
  const handleInputURLChange = (e) => {
    setInputURLValue(e.target.value);
  };
  const [inputValue, setInputValue] = useState('');

  // Update state on input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="divCommandItems">
            <div className="action"><span className="actionSpan">Action:</span>
            <Dropdown
            options={['API Get', 'API Put', 'API Post']}
            placeholder="Choose API Command"
            onSelect={handleSelection}
            />
            </div>
            <div className="target"><span className="targetSpan">Target:</span>
            <input className="targetTextBox"placeholder="Enter URL:" value={inputURLValue}onChange={handleInputURLChange} ></input>
            </div>
            <div className="value"><span className="valueSpan">Value:</span>
            <input className="valueTextBox" placeholder="Enter User Id:"value={inputValue}onChange={handleInputChange}></input>
            </div>
            <div className="description"><span className="descriptionSpan">Description:</span>
            <input className="DescriptionTextBox"placeholder="Enter description:"></input>
            </div>
            </div>
            <UserFetcher 
            url={inputURLValue}
            userRequestId={inputValue}
            httpMethod="GET"/>
        </div>
    )
}

const AppLayout =()=>{
    return <div className="app">
<Header/>
<Body/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);