import React, { useState, useEffect } from "react";
import { CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Users.css";
const Users = () => {
  const [usersDate, setUsersDate] = useState([{}]);
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    fetch("api/admin/system/users", {
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZmEwNTcwYjg5NDBhZjI1NWU3OSIsImlhdCI6MTY3ODMzNDk2MywiZXhwIjoxNjc4MzM4NTYzfQ.3S2H95XBQExPRxw4HN9b4NAHxkMRdqFtObI1vkkdv6w`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsersDate(data);
      });
  }, [isUpdate]);

  const blockUser = (id) => {
    let url = `/api/admin/system/block/${id}`;
    fetch(url, {
      method: "PATCH",
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
        alert("Block user successfully");
        setIsUpdate(!isUpdate);
      });
  };
  const activeUser = (id) => {
    let url = `/api/admin/system/activate/${id}`;
    fetch(url, {
      method: "PATCH",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZmEwNTcwYjg5NDBhZjI1NWU3OSIsImlhdCI6MTY3ODMzNjQ2MSwiZXhwIjoxNjc4MzcyNDYxfQ.NIyKDkw93m4w_4O85pjocrr_fzToLpngWf1thcZspvMw`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Active user successfully");
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
                <h3 className="font-weight-bold mb-5">All User List</h3>

                <CDBTable responsive>
                  <CDBTableHeader color="light">
                    <tr>
                      <th>Avatar</th>
                      <th>Username</th>
                      <th>Fullname</th>
                      <th>Phone</th>
                      <th className="address-description">Email</th>
                      <th>Active</th>
                      <th>Block</th>
                    </tr>
                  </CDBTableHeader>
                  <CDBTableBody>
                    {usersDate.data?.users.map((el) => (
                      <tr>
                        <td>
                          <img
                            className="user-avatar"
                            src={
                              el.avatar
                                ? el.avatar
                                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABtklEQVR4nO2ZPShFYRjHf5dEsriSrAwWGViUkiQMRh8Li7JZZVDko5QySBYGCzIZZRZyDcrHjUSxiluyuK7u0VvnLqeLc895OM/N+dV/fHuf3zmn932f80JISEhQ1ABDwBywAiwBE0ALECEP6ASOAeubHABRFDMPpH+QyOQBWAUaUMaoSwFn3oFhlFAOvHgUMUkB9Shg0IdEJmsoYFNA5BoFxAREPoDioEVuBERMyoIWuRUSKQ1a5EhAwqx6gbMjIHKKAqYFRJZRQI+ASC8KaBQQaUIBewIiuyjgUkDkAgVsCYhsoICOHPqQbDFj21FCtw+RLpRx50HCHG/UsehBxIxRRy2QzLEzrEMps/n+NjJEXO4r90Ahyom5EImTB5y4ELkiD4i7/EGnmiLg0YXIK1CCYqZyWLUWUEgUWPdw5jL/xCpRQBUw6fJz+ipPwAxQHYRAq/0033wIOJMEtoG2375DKbB76zPB4r/KOdBvzylK8x8JWFmEzNwijNgHPCugpOwafDHgs/uTShro83OB86xAwrKTACq8iIwrKN5yZMyLyKGCwi1H9r2IJBQUbmXZPENCQv4rn6Ej5y2yxDtPAAAAAElFTkSuQmCC"
                            }
                            alt="Hotel"
                          />
                        </td>
                        <td>
                          <div>{el.username}</div>
                        </td>
                        <td>
                          <div>{el.fullname}</div>
                        </td>
                        <td>
                          <div>{el.phone}</div>
                        </td>
                        <td>
                          <div>{el.email}</div>
                        </td>
                        <td>
                          <button
                            className={`btn-active ${
                              el.isActivated ? "blur" : ""
                            }`}
                            onClick={() => activeUser(el._id)}
                          >
                            active
                          </button>
                        </td>
                        <td>
                          <button
                            className={`btn-block ${
                              !el.isActivated ? "blur" : ""
                            }`}
                            onClick={() => blockUser(el._id)}
                          >
                            block
                          </button>
                        </td>
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
export default Users;
