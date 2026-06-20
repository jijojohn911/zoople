// import React from 'react'
// const name= "Jijo"
// const mark=35
// const App = () => {
//   return (
//   <>
//   <h1 className='title'>Hello {name}</h1>
//   <p>your mark is {mark*2}</p>
//   </>
//   )
// }

// export default App
















// import React from 'react'

// const App = () => {
//   const fruits=["Mango","Apple","Bananna","Orange"];
//   return (
//     <div>
//       <h2>My Fruit List</h2>
//       <ul>
//         {
//           fruits.map(fruit=>(
//             <li>{fruit}</li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// export default App










import React from 'react'

const App = () => {
  const age=20;
  return (
    <div>
      <h2>Next year age:{age+1}</h2>
      {
        <h3>{age<=18?"Adult":"Minor"}</h3>
      }
    </div>
  )
}

export default App