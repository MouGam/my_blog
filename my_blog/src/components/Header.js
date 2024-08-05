import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>블로그</h1>
      <nav className="nav">
        <div className='navbox'>
            <a href="#">홈</a>
            <a href="#">소개</a>
            <a href="#">연락처</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
