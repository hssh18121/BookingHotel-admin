import React from "react";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import "./Hotels.css";
import EditHotel from "./EditHotel";
import CreateHotel from "./CreateHotel";
export const Rooms = () => {
  const [backendHotelData, setBackendHotelData] = useState([{}]);
  useEffect(() => {
    fetch("api/hotel/all")
      .then((response) => response.json())
      .then((data) => {
        setBackendHotelData(data);
      });
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [openCreateHotelModal, setOpenCreateHotelModal] = useState(false);
  const [currentHotelId, setCurrentHotelId] = useState("");
  const openModalHandler = (id) => {
    setOpenModal(true);
    setCurrentHotelId(id);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const openCreateHotelModalHandler = () => {
    setOpenCreateHotelModal(true);
  };

  const closeCreateHotelModalHandler = () => {
    setOpenCreateHotelModal(false);
  };
  return (
    <div className="d-flex">
      {openModal && (
        <EditHotel onClose={closeModalHandler} id={currentHotelId} />
      )}

      {openCreateHotelModal && (
        <CreateHotel onClose={closeCreateHotelModalHandler} />
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
              <div className="mt-5">
                <h3 className="font-weight-bold mb-5">
                  Available Hotels In The System
                </h3>

                <CDBTable responsive className="hotel-table">
                  <CDBTableHeader color="light">
                    <tr>
                      <th>Hotel Image</th>
                      <th>Hotel Name</th>
                      <th>Province</th>
                      <th className="address-description">Address</th>
                      <th>Edit</th>
                    </tr>
                  </CDBTableHeader>
                  <CDBTableBody>
                    {backendHotelData.data?.hotels.map((el) => (
                      <tr>
                        <td>
                          <img
                            className="hotel-image"
                            src={el.image}
                            alt="Hotel"
                          />
                        </td>
                        <td>
                          <div>{el.name}</div>
                        </td>
                        <td>
                          <div>{el.province}</div>
                        </td>
                        <td>
                          <div>{el.address}</div>
                        </td>
                        <td>
                          <div
                            className="edit-icon"
                            onClick={() => openModalHandler(el._id)}
                          >
                            <FaEdit />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </CDBTableBody>
                </CDBTable>
              </div>
              <h3
                onClick={openCreateHotelModalHandler}
                className="create-new-hotel-link"
              >
                Create new hotel
              </h3>
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
