import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

const HomePage = React.lazy(()=> import('./pages/home'));
const AboutPage = React.lazy(()=> import('./pages/services'));
const LandbankPage = React.lazy(()=> import('./pages/landbanks'));
const ComingSoonPage = React.lazy(()=> import('./pages/coming'));

function App() {
  return (
    <React.Suspense fallback={'...loading'}>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/services' element={<AboutPage/>}></Route>
        <Route exact path='/landbank' element={<LandbankPage/>}></Route>
        <Route exact path='/soon' element={<ComingSoonPage/>}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
