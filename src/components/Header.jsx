import { useNavigate } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';


function Header() {
    const navigate = useNavigate();
    const [visible,setVisible] = useState(false);

    return(
        <header>

                {/* 햄버거 네비 기본  */}
                <div className='ham-imgbox' onClick={() => setVisible(true)}>
                    <img src="/ham.png" alt="햄버거네비이미지" />
                </div>
                <p>정류장 리스트</p>
                <div className='home-imgbox' onClick={()=>{navigate('/')}}> 
                    <img src="/home.png" alt="홈으로 돌아가기 이미지" />
                </div>
                
                {/* 네비게이션 보이기 */}
                
                    <div className={`nav ${visible ? "show" : ""}`}>
                       <div className='navbox' >
                            <div className='navLogoImgBox' onClick={()=>{navigate('/');setVisible(false);}}>
                                <img src="/bus.png" alt="로고이미지" />
                            </div>
                            <div className="navTextWrap">
                                <p onClick={()=>{navigate('/map');setVisible(false); }}>길찾기</p>
                                <p onClick={()=>{navigate('/busstop');setVisible(false);}}>정류장</p>
                                <p onClick={()=>{navigate('/bus');setVisible(false);}}>버스</p>
                            </div>
                       </div>
                       <div className='backbox'onClick={()=>setVisible(false)} ></div>
                    </div>
                    

                




        </header>
    )
}

export default Header;