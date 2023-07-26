// import React from 'react';
// import { useState } from 'react';
// function App() {
//     const [fullName,setFullName]  = useState( {
//           fname : '',
//           lname : '',
//           email: '',
//           phone :  '',
//     });

//     function inputEvent(event) {
//         console.log(event.target.value);
//         // const value= event.target.value;
//         // const name=event.target.name;
//         const{value,name} = event.target;
//         setFullName((preValue) => {
//             console.log(preValue);
            
            //this function can also access lname and fname
            // if(name=== 'fName') {
            //     //then i just need to set value
            //  return {   fname: value,
            //             lname: preValue.lname ,
            //             email: preValue.email,
            //             phone:preValue.phone,
            //  };
            // } else if(name=== 'lName') {
            //     //then i just need to set value
            //  return {   fname: preValue.fname,
            //             lname: value,
            //             email: preValue.email,
            //             phone: preValue.phone,
            //  };
            // }else if(name=== 'email') {
            //     //then i just need to set value
            //  return {   fname: preValue.fname,
            //             lname: preValue.lname,
            //             email: value,
            //             phone: preValue.phone,
            //  };
            // }else if(name=== 'phone') {
            //     //then i just need to set value
            //  return {   fname: preValue.fname,
            //             lname: preValue.lname,
            //             email: preValue.email,
            //             phone: value,
            //  };
            // }
//         });

//     };
//     function onSubmit(event) {
//         event.preventDefault();
//         alert('form Submitted');
//     }

// return(
// <>

// <div className="main_div">
//     <form onSubmit={onSubmit}>
//         <div> 
//     <h1>Hello {fullName.fname} {fullName.lname} </h1>
//     <p> {fullName.email}</p>
//     <p>{fullName.phone}</p>
//     <input type='text' 
//     placeholder='Enter your Name'
//     name='fName'
//      onChange={inputEvent}
//      value={fullName.fname}
//     />
//     <br/>
//     <input 
//     type="text"
//     placeholder="Enter Your Last Name"
//     name='lName'
//     onChange={inputEvent}
//     value= {fullName.lname}
//     />
//     <input 
//     type="email"
//     placeholder="Enter Your email"
//     name='email'
//     onChange={inputEvent}
//     value= {fullName.email}
//     />
//     <input 
//     type="number"
//     placeholder="Enter Your Phone Number"
//     name='phone'
//     onChange={inputEvent}
//     value= {fullName.phonr}
//     />
//     <button type='submit' >Submit Me</button>
//     </div>
//     </form>

// </div>
// </>
// );
// }
// export default App;