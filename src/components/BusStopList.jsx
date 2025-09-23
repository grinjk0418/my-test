import { useDispatch, useSelector } from 'react-redux';
import './BusStopList.css';

import { useEffect } from 'react';
import { busStopListIndex } from '../store/thunks/busStopListThunk.js';

function BusStopList() {
    const dispatch = useDispatch();

    const busStopList = useSelector(state => state.busStopList.list);

    useEffect(() => {

      dispatch(busStopListIndex());

    }, []);
    return(
        <>
          {
            busStopList.map(item => {
              return (
                <div className='busstop-contentBox' key={item.bsId}>
                    <div className='busstop-leftbox'>
                        <p>정류장</p>
                    </div>
                    <div className='busstop-textwrap'>
                        <p className='busstop-title'>{item.bsNm}</p>
                        <p className='busstop-number'>{item.wincId}</p>
                    </div>
                </div>
              );
            })
          }
        </>
    )
}

export default BusStopList ;