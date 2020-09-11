import React from 'react';

function App(){
    let currtime = new Date().toLocaleTimeString();
    let greeting;
    const cssstyle = {} ;
    if (currtime >= 1 && currtime <=7)
    {
        greeting = 'Good Monrning';
        cssstyle.color = 'green';
    }
    else if (currtime >=8 && currtime <=18)
    {
        greeting = 'Good Afternoon';
        cssstyle.color = 'orange';
    }
    else
    {
        greeting = 'Good Evening';
        cssstyle.color = 'black';
    }
    
    return (
    <>
        <div>
            <h1>Hello World, <span style = {cssstyle}>{greeting}</span></h1>
        </div>
    </>);
}

export default App;