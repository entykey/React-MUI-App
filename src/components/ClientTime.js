import React, { useState, useEffect } from 'react';
//import render from 'react-dom';

   
// class ClientTime extends Component {

// //     Note: The rules for ES2015 (ES6) classes basically come down to:
// //     In a child class constructor(), this cannot be used until super() is called.
// //     ES6 class constructors MUST call super if they are subclasses, or they must explicitly return some object to take the place of the one that was not initialized.
//   constructor() {
//       super();
//     this.state = {
//       currentDateTime: Date().toLocaleString()
//     }
//   }


//   render() {
    
//     return (
//       <div>
//         <p>
//             {/* Sample output: Sun May 24 2020 09:59:56 GMT+0530 (India Standard Time) */}
//             Current time: { this.state.currentDateTime }
//         </p>
//       </div>
//     );
//   }
// }

const ClientTime = () => {
    // This clock will always run even the app server down, but only if user keep tab
    const timezonedate = new Date();
    const dateAsString = timezonedate.toString();
    const timezone = dateAsString.match(/\(([^\)]+)\)$/)[1];

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <>
            <p> Time : { date.toLocaleTimeString()}</p>
            <p> Date : { date.toLocaleDateString()} (m/d/yyyy)</p>
            <p> Time zone: { timezone} </p>
        </>
    )
}

export default ClientTime;
