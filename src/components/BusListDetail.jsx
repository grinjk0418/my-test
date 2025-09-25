// src/components/BusListDetail.jsx
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { busIndex } from "../store/thunks/busThunk.js";
import "./BusListDetail.css";

export default function BusListDetail() {
  const { routeId } = useParams();
  const dispatch = useDispatch();

  // items가 배열이라는 전제
  const items = useSelector((s) => s.bus.busList?.items ?? []);

  // 새로고침 등으로 비어있으면 가져오기
  useEffect(() => {
    if (!items.length && routeId) dispatch(busIndex(routeId));
  }, [items.length, routeId, dispatch]);

  // routeId 매칭 or 첫 항목
  const bus = items.find((it) => String(it.routeId) === String(routeId)) ?? items[0];

  if (!routeId) return <div className="busdetail-container">잘못된 접근입니다.</div>;
  if (!bus) return <div className="busdetail-container">로딩중…</div>;

  return (
    <div className="busdetail-container">
      <div className="busdetail-contentBox">
        <div className="busdetail-leftBox">
          <p>버스</p>
        </div>
        <div className="busdetail-textwrap">
          <p className="busdetail-title">{bus.bsNm ?? "정류장이름"}</p>
          <div className="busdetail-textWrap">
            <div className="busdetail-color-wrap">
              <div className="busdetail-redBox">기점</div>
              <p>{bus.stNm ?? "정류장이름"}</p>
            </div>
            <div className="busdetail-color-wrap">
              <div className="busdetail-blueBox">종점</div>
              <p>{bus.edNm ?? "정류장이름"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 정류장 노선: items 배열 렌더 */}
      <div className="busStopwrap">
        {items.map((it) => (
          <div className="busStpopTextWrap" key={it.bsId ?? it.nodeId ?? `${it.routeId}-${it.bsNm}`}>
            <div className="circle"></div>
            <p>{it.bsNm ?? "정류장"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
