import React from 'react';
import {Header, Footer} from "./Components"
import AllRoutes from './routes/AllRoutes';

const App = () => {
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App