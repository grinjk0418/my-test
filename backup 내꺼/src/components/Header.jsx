import './Header.css';

function Header() {
    return(
        <header>
                <div className='ham-imgbox'>
                    <img src="/ham.png" alt="햄버거네비이미지" />
                </div>
                <p>정류장 리스트</p>
                <div className='home-imgbox'> 
                    <img src="/home.png" alt="홈으로 돌아가기 이미지" />
                </div>
        </header>
    )
}

export default Header;