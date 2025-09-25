import { useSelector } from "react-redux";
import "./BusListDetail.css";


function BusListDetail() {
  const busList = useSelector(state => state.bus.busList);

    return (
        <>
            <div className="busdetail-container">
                <div className="busdetail-contentBox">
                    <div className="busdetail-leftBox">
                        <p>버스</p>
                    </div>
                    <div className='busdetail-textwrap'>
                        <p className='busdetail-title'>정류장이름</p>
                        <div className="busdetail-textWrap">
                            <div className='busdetail-color-wrap'>
                                <div className='busdetail-redBox'>기점</div>
                                <p>정류장이름</p>
                            </div>
                            <div className='busdetail-color-wrap'>
                                <div className='busdetail-blueBox'>종점</div>
                                <p>정류장이름</p>
                            </div>


                        </div>
                    </div>
                </div>
                {/* 정류장 노선 */}
                <div className="busStopwrap">
                  {
                    busList.length > 0 && (<div className="busStpopTextWrap">
                        <div className="circle"></div>
                        <p>{busList[0].bsNm}</p>
                    </div>)
                  }
                    <div className="busStpopTextWrap">
                        <div className="circle"></div>
                        <p>정류장</p>
                    </div>
                    <div className="busStpopTextWrap">
                        <div className="circle"></div>
                        <p>정류장</p>
                    </div>
                    <div className="busStpopTextWrap">
                        <div className="circle"></div>
                        <p>정류장</p>
                    </div>
                </div>

            </div>




        </>
    )
}

export default BusListDetail; 