export default function KakaoMap() {
  const mapContainer = document.getElementById("map");
  const mapOption = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };
  new kakao.maps.Map(mapContainer, mapOption);
  return <div id="map"></div>;
}
