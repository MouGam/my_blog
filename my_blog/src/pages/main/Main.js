import './Main.css';

function Main() {
  return (
    <div>
       <header>
        <h1>내 블로그</h1>
        <nav>
            <ul>
                <li><a href="#">홈</a></li>
                <li><a href="#">소개</a></li>
                <li><a href="#">블로그</a></li>
                <li><a href="#">연락처</a></li>
            </ul>
        </nav>
    </header>
    <div class="container">
        <main>
            <article>
                <h2>첫 번째 포스트</h2>
                <p>여기에 첫 번째 블로그 포스트 내용이 들어갑니다.</p>
            </article>
            <article>
                <h2>두 번째 포스트</h2>
                <p>여기에 두 번째 블로그 포스트 내용이 들어갑니다.</p>
            </article>
        </main>
        <aside>
            <h2>사이드바</h2>
            <ul>
                <li><a href="#">카테고리 1</a></li>
                <li><a href="#">카테고리 2</a></li>
                <li><a href="#">카테고리 3</a></li>
            </ul>
        </aside>
    </div>
    <footer>
        <p>&copy; 2024 내 블로그. 모든 권리 보유.</p>
    </footer>
    </div>
  );
}

export default Main;
