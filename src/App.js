import React from 'react'
import './App.css';
import NevBar from './Components/nevBar';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
      <NevBar />
      <Home />
    </div>
  )
}

export default App

// import React from 'react'
// import './App.css';
// import NevBar from './Components/nevBar';
// import Home from './Components/Home';
// import AboutUs from './Components/AboutUs'
// import Support from './Components/Support'
// import Account from './Components/Account'
// import Shop from './Components/Shop'
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// const App = () => {
//   return (
//     <div>
//       <NevBar />
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/shop' element={<Shop />} />
//         <Route path='/aboutus' element={<AboutUs />} />
//         <Route path='/support' element={<Support />} />
//         <Route path='/account' element={<Account />} />
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App