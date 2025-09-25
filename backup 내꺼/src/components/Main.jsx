import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const navigate = useNavigate();

  return (
  <>
  <div className="main-btn-box">
    <p>길찾기</p>
    <img src="/road.png" alt="" className='road-img'/>
  </div>
  <div className="main-btn-box" onClick={() => { navigate('/bus-stops') }}>
    <p>정류장</p>
    <img src="/busstop.png" alt="" className='busstop-img'/>
  </div>
  <div className="main-btn-box">
    <p>버스</p>
    <img src="/main-bus.png" alt="" className='main-bus-img'/>
  </div>
  </>
  )
}
export default Main;