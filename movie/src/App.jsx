// import React from 'react'
// import Navbar from './components/Navbar'
// import { Route,Routes, useLocation } from 'react-router-dom'
// import Home from './pages/Home'
// import Movies from './pages/Movies'
// import MovieDeatils from './pages/MovieDeatils'
// import SeatLayout from './pages/SeatLayout'
// import MyBookings from './pages/MyBookings'
// import Favourite from './pages/Favourite'
// import { Toaster } from "react-hot-toast";
// import Footer from './components/Footer'


// const App = () => {

//   const isAdminRoute = useLocation().pathname.startsWith('/admin')




//   return (
//     <>
//     <Toaster />
//      {!isAdminRoute && <Navbar/>}
//      <Routes>
//       <Route path='/' element={<Home/>}  />
//       <Route path='/movies' element={<Movies/>}  />
//       <Route path='/movies/:id' element={<MovieDeatils/>}/>
//       <Route path='/movies/:id/:date' element={<SeatLayout/>}  />
//       <Route path='/my-bookings' element={<MyBookings/>}  />
//       <Route path='/favourite' element={<Favourite/>}  />
//      </Routes>
//       {!isAdminRoute && <Footer/>}
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Navbar from './components/Navbar'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import Home from './pages/Home'
// import Movies from './pages/Movies'
// import MovieDeatils from './pages/MovieDeatils'
// import SeatLayout from './pages/SeatLayout'
// import MyBookings from './pages/MyBookings'
// import Favourite from './pages/Favourite'
// import { Toaster } from "react-hot-toast"
// import Footer from './components/Footer'

// const App = () => {

//   const location = useLocation()
//   const isAdminRoute = location.pathname.startsWith('/admin')

//   return (
//     <>
//       {/* Toast Notifications */}
//       <Toaster position="top-right" reverseOrder={false} />

//       {/* Navbar Hide on Admin Pages */}
//       {!isAdminRoute && <Navbar />}

//       {/* Routes */}
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/movies' element={<Movies />} />
//         <Route path='/movies/:id' element={<MovieDeatils />} />
//         <Route path='/movies/:id/:date' element={<SeatLayout />} />
//         <Route path='/my-bookings' element={<MyBookings />} />
//         <Route path='/favourite' element={<Favourite />} />
//       </Routes>

//       {/* Footer Hide on Admin Pages */}
//       {!isAdminRoute && <Footer />}
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Navbar from './components/Navbar'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import Home from './pages/Home'
// import Movies from './pages/Movies'
// import MovieDeatils from './pages/MovieDeatils'
// import SeatLayout from './pages/SeatLayout'
// import MyBookings from './pages/MyBookings'
// import Favourite from './pages/Favourite'
// import { Toaster } from "react-hot-toast"
// import Footer from './components/Footer'

// const App = () => {

//   const location = useLocation()
//   const isAdminRoute = location.pathname.startsWith('/admin')

//   return (
//     <>
//       <Toaster position="top-right" />

//       {!isAdminRoute && <Navbar />}

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/movies' element={<Movies />} />
//         <Route path='/movies/:id' element={<MovieDeatils />} />
//         <Route path='/movies/:id/:date' element={<SeatLayout />} />
//         <Route path='/my-bookings' element={<MyBookings />} />
//         <Route path='/favourite' element={<Favourite />} />
//       </Routes>

//       {!isAdminRoute && <Footer />}
//     </>
//   )
// }

// export default App



import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDeatils from './pages/MovieDeatils'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favourite from './pages/Favourite'

import { Toaster } from 'react-hot-toast'
import LayOut from './pages/admin/LayOut'
import Dashboard from './pages/admin/Dashboard'
import AddShow from './pages/admin/AddShow'
import ListShow from './pages/admin/ListShow'
import ListBooking from './pages/admin/ListBooking'

const App = () => {

  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <>
      <Toaster position="top-right" />

      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDeatils />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/admin/*' element={<LayOut/>}>
        <Route index element ={<Dashboard/>} />
        <Route path="add-shows" element={<AddShow/>}/>
        <Route path="list-shows" element={<ListShow/>}/>
        <Route path="list-bookings" element={<ListBooking/>}/>
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
