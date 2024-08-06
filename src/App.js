import React from 'react';
import Search from './components/Search';
import Pagination from './components/Pagination';
import Stories from './components/Stories';
import './index.css';

const App = () => {
  return (
    <div>
      <Search/>
      <Pagination/>
      <Stories/>
    </div>
  )
}

export default App

