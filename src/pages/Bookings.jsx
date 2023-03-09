import React, { useState, useEffect } from "react";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Booking.css";
const Bookings = () => {
  const [hotelsData, setHotelsData] = useState([{}]);
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    fetch("/api/admin/system/bookings", {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZmEwNTcwYjg5NDBhZjI1NWU3OSIsImlhdCI6MTY3ODMzNjQ2MSwiZXhwIjoxNjc4MzcyNDYxfQ.NIyKDkw93m4w_4O85pjocrr_fzToLpngWf1thcZspvM`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHotelsData(data);
      });
  }, [isUpdate]);

  const changeStatus = (hotelId, roomId, bookingId, status) => {
    let url = `/api/admin/hotel/${hotelId}/booking`;
    let body = {
      roomId: roomId,
      bookingId: bookingId,
      status: status,
    };
    fetch(url, {
      method: "PATCH",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZmEwNTcwYjg5NDBhZjI1NWU3OSIsImlhdCI6MTY3ODMzNjQ2MSwiZXhwIjoxNjc4MzcyNDYxfQ.NIyKDkw93m4w_4O85pjocrr_fzToLpngWf1thcZspvM`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Change status successfully");
        setIsUpdate(!isUpdate);
      });
  };
  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <Navbar />
        <div style={{ height: "100%" }}>
          <div
            style={{
              padding: "20px 5%",
              height: "calc(100% - 64px)",
              overflowY: "scroll",
            }}
          >
            <div
              style={{
                gridTemplateColumns: "repeat(1, minmax(200px, 700px))",
              }}
            >
              <div className="mt-5">
                <h3 className="font-weight-bold mb-5">All Booking List</h3>

                <CDBTable responsive>
                  <CDBTableHeader color="light">
                    <tr>
                      <th>User</th>
                      <th>Phone</th>
                      <th>Price</th>
                      <th>Hotel</th>
                      <th>Checkin</th>
                      <th>Checkout</th>
                      <th>Status</th>
                    </tr>
                  </CDBTableHeader>
                  <CDBTableBody>
                    {hotelsData.data?.bookings.map((el) => (
                      <tr>
                        <td>
                          <div>{el.userInfo.name}</div>
                        </td>
                        <td>
                          <div>{el.userInfo.phone}</div>
                        </td>
                        <td>
                          <div>{el.price.toLocaleString() + "đ"}</div>
                        </td>
                        <td>
                          <div>{el.room.hotel.name}</div>
                        </td>
                        <td>
                          <div>{el.checkinAt.slice(0, 10)}</div>
                        </td>
                        <td>
                          <div>{el.checkoutAt.slice(0, 10)}</div>
                        </td>
                        <td>
                          <select
                            className="select"
                            name="status"
                            id="status"
                            onChange={function (e) {
                              changeStatus(
                                el.room.hotel._id,
                                el.room._id,
                                el._id,
                                e.target.value
                              );
                            }}
                          >
                            <option
                              selected={el.status === "processing"}
                              value="processing"
                            >
                              processing
                            </option>
                            <option
                              selected={el.status === "success"}
                              value="success"
                            >
                              success
                            </option>
                            <option
                              selected={el.status === "failure"}
                              value="failure"
                            >
                              failure
                            </option>
                          </select>
                        </td>
                        {/* <td><button className={`btn-active ${el.isActivated ? "blur" : ""}`} onClick={() => activeUser(el._id)}>active</button></td> */}
                        {/* <td><button className={`btn-block ${!el.isActivated ? "blur" : ""}`} onClick={() => blockUser(el._id)}>block</button></td> */}
                      </tr>
                    ))}
                  </CDBTableBody>
                </CDBTable>
              </div>
            </div>
            <footer className="mx-auto my-3 text-center">
              <small>&copy; Devwares, 2020. All rights reserved.</small>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bookings;
