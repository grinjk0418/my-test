import { useSelector } from "react-redux";
import "./BusListDetail.css";
import { route } from "../configs/route";
import { useParams } from "react-router-dom";


function BusListDetail() {
  const busList = useSelector(state => state.bus.busList);
  const params = useParams();
  

  const busItem = route.find((item) => params.routeId === item.routeId);
    return (
        <>
        {/* {busIten.edNm} */}
            <div className="busdetail-container">
                <div className="busdetail-contentBox">
                    <div className="busdetail-leftBox">
                        <p>버스</p>
                    </div>
                    <div className='busdetail-textwrap'>
                        <p className='busdetail-title'>{busItem.routeNo}</p>
                        <div className="busdetail-textWrap">
                            <div className='busdetail-color-wrap'>
                                <div className='busdetail-redBox'>기점</div>
                                <p>{busItem.stNm}</p>
                            </div>
                            <div className='busdetail-color-wrap'>
                                <div className='busdetail-blueBox'>종점</div>
                                <p>{busItem.edNm}</p>
                            </div>


                        </div>
                    </div>
                </div>
                {/* 정류장 노선 */}
                <div className="busStopwrap">
                  { 
                    busList.length > 0 && busList.map(item => (
                    <div className="busStpopTextWrap" key={item.seq + item.bsId}>
                        <div className="circle"></div>
                        <p>{item.bsNm}</p>
                    </div>)
                    )
                  }
                </div>
            </div>
        </>
    )
}

export default BusListDetail; 