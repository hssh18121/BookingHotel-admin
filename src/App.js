import React, { useEffect } from "react";
import Routes from "./Routes";
import "./App.css";

function App() {
  // useEffect(() => {
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZmEwNTcwYjg5NDBhZjI1NWU3OSIsImlhdCI6MTY3ODMxNTIwOCwiZXhwIjoxNjc4MzMzMjA4fQ.x_UsLwX4RvFbqQw2xJjKXEgD1tmr_bZY5LdbI4lnDso"
  //   );
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     name: "Novotel Suites Ha Noi",
  //     address: "Lot R2 03-04. Golf Valley, Ward 2, Đà Lạt, Việt Nam",
  //     description:
  //       "Novotel Suites Hanoi cung cấp chỗ nghỉ nằm tại Khu đô thị mới của thành phố Hà Nội. Chỗ nghỉ có hồ bơi ngoài trời phục vụ quanh năm, nhà hàng trong khuôn viên và quầy bar. Những khách đi cùng trẻ em có thể sử dụng khu vực sân chơi trong nhà và ngoài trời. WiFi miễn phí được cung cấp trong tất cả các phòng.Tòa nhà Keangnam Hanoi Landmark Tower, nơi có trung tâm mua sắm và rạp chiếu phim cách chỗ nghỉ 2, 6 km (8 phút lái xe). Trung tâm thương mại Indochina Plaza Hanoi cách chỗ nghỉ 2 km. Chỗ nghỉ cách sân bay quốc tế Nội Bài 21 km. Novotel Suites Hanoi cung cấp dịch vụ đưa đón sân bay với một khoản phụ phí. Novotel Suites Hanoi có nhiều loại chỗ nghỉ, từ studio cho đến căn hộ 2 phòng ngủ. Tất cả các loại phòng đều được trang bị đầy đủ tiện nghi gồm bếp nhỏ và IPTV quốc tế.",
  //     province: "Hà Nội",
  //     kinds: "Airport",
  //     hotelFeatures: [
  //       "63ea37aaaed7d7c92c73391c",
  //       "63e6481feaa2b111b0f280b7",
  //       "63ea6cbf0117e3e38cd5025a",
  //       "63ea6d0b0117e3e38cd5025b",
  //       "63ea6d480117e3e38cd5025c",
  //       "63ea6d9f0117e3e38cd5025d",
  //     ],
  //   });

  //   var requestOptions = {
  //     method: "PATCH",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     "http://localhost:5000/api/admin/hotel/638b0af859a6cba87695aeb3",
  //     requestOptions
  //   )
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // }, []);
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
