import React, {useState} from 'react';
import './tabs.css';

const Tabs = (props) => {
    const [currentTab, setCurrentTab] = useState(1);

    return(
        <div>
            <div className="hContainer">
            {
                props.tabItems.map((item, i) => {
                    return <span key={i} className="labelSpan" 
                    style={{
                        backgroundColor: currentTab === i ? 'black': 'white',
                        color: currentTab === i ? 'white': 'black'
                    }}
                    onClick={ (event) => {
                        setCurrentTab(i);
                    }}>
                        {item.header}
                    </span>
                })
            }
            </div>
            <div>
                <h3>{props.tabItems[currentTab].content}</h3>
            </div>
        </div>
    )
}

export default Tabs;