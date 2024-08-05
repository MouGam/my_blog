import Main from './components/Main';
import React from 'react';
import Header from './components/Header';
import PostEditor from './components/PostEditor';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <PostEditor />
      <Footer />
    </div>
  );
}

export default App;