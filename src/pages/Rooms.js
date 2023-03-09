import React from "react";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import "./Hotels.css";
import EditHotel from "./EditHotel";
import CreateHotel from "./CreateHotel";
import CreateRoom from "./CreateRoom";
import EditRoom from "./EditRoom";
export const Rooms = () => {
  const [backendHotelData, setBackendHotelData] = useState([{}]);
  const [backendRoomData, setBackendRoomData] = useState([{}]);
  useEffect(() => {
    fetch("api/room/all")
      .then((response) => response.json())
      .then((data) => {
        setBackendRoomData(data);
      });
  }, []);

  useEffect(() => {
    fetch("api/hotel/all")
      .then((response) => response.json())
      .then((data) => {
        setBackendHotelData(data);
      });
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [openCreateRoomModal, setOpenCreateRoomModal] = useState(false);
  const [currentHotelId, setCurrentHotelId] = useState("");
  const [currentRoomId, setCurrentRoomId] = useState("");
  const openModalHandler = (id, hotelId) => {
    setOpenModal(true);
    setCurrentRoomId(id);
    setCurrentHotelId(hotelId);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const openCreateRoomModalHandler = (id) => {
    setOpenCreateRoomModal(true);
    setCurrentHotelId(id);
  };

  const closeCreateRoomModalHandler = () => {
    setOpenCreateRoomModal(false);
  };
  return (
    <div className="d-flex">
      {openModal && (
        <EditRoom
          onClose={closeModalHandler}
          id={currentRoomId}
          hotelId={currentHotelId}
        />
      )}

      {openCreateRoomModal && (
        <CreateRoom onClose={closeCreateRoomModalHandler} id={currentHotelId} />
      )}
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
              {backendHotelData.data?.hotels.map((el) => (
                <div className="mt-5">
                  <h3 className="font-weight-bold mb-5">
                    {el.name} - Rooms Available:
                  </h3>

                  <CDBTable responsive className="hotel-table">
                    <CDBTableHeader color="light">
                      <tr>
                        <th>Room Image</th>
                        <th>Room Name</th>
                        <th>Suitable For</th>
                        <th className="address-description">Price</th>
                        <th>Edit</th>
                      </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                      {backendRoomData.data?.rooms.map((room_el) =>
                        room_el.hotel == el._id ? (
                          <tr>
                            <td>
                              <img
                                className="hotel-image"
                                src={room_el.image}
                                alt="Hotel"
                              />
                            </td>
                            <td>
                              <div>{room_el.name}</div>
                            </td>
                            <td>
                              <div>{room_el.peopleAmount.adults}</div>
                            </td>
                            <td>
                              <div>{room_el.price}</div>
                            </td>
                            <td>
                              <div
                                className="edit-icon"
                                onClick={() =>
                                  openModalHandler(room_el._id, el._id)
                                }
                              >
                                <FaEdit />
                              </div>
                            </td>
                          </tr>
                        ) : (
                          ""
                        )
                      )}
                    </CDBTableBody>
                  </CDBTable>
                  <h5
                    onClick={() => openCreateRoomModalHandler(el._id)}
                    className="create-new-hotel-link mb-7"
                  >
                    Create new room for this hotel
                  </h5>
                </div>
              ))}
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
