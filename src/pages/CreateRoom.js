import React from "react";

import { useState } from "react";

import "./EditHotel.css";
const CreateRoom = (props) => {
  const closeModalHandler = () => {
    console.log(props.id);
    props.onClose();
  };

  const [roomName, setRoomName] = useState("");
  const [roomPrice, setRoomPrice] = useState();
  const [roomDescription, setRoomDescription] = useState("");
  const [roomAdultsNum, setRoomAdultsNum] = useState();
  const [roomChildrenNum, setRoomChildrenNum] = useState();

  const [roomImageURL, setRoomImageURL] = useState("");

  const editRoomHandler = (e) => {
    e.preventDefault();
    let name = roomName;
    let price = roomPrice;
    let description = roomDescription;
    let image = roomImageURL;
    let adults = roomAdultsNum;
    let child = roomChildrenNum;
    let peopleAmount = { adults, child };

    fetch(`http://localhost:5000/api/admin/hotel/${props.id}/room`, {
      method: "post",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZmEwNTcwYjg5NDBhZjI1NWU3OSIsImlhdCI6MTY3ODMzNjQ2MSwiZXhwIjoxNjc4MzcyNDYxfQ.NIyKDkw93m4w_4O85pjocrr_fzToLpngWf1thcZspvM`,
      },

      body: JSON.stringify({
        name,
        price,
        description,
        image,
        peopleAmount,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Create room successfully");
          window.location.reload();
          console.log(data);
        } else {
          console.log(data.message);
        }
      });
  };

  return (
    <>
      <div className="modal">
        <button className="close-modal" onClick={closeModalHandler}>
          &times;
        </button>

        <form className="hotel-info-form">
          <div class="form-group">
            <label for="name" className="font-weight-bold">
              Room name
            </label>
            <input
              class="form-control"
              value={roomName}
              onChange={(e) => {
                setRoomName(e.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label for="name" className="font-weight-bold">
              Price
            </label>
            <input
              class="form-control"
              type="number"
              value={roomPrice}
              onChange={(e) => {
                setRoomPrice(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Adults Num
            </label>
            <input
              class="form-control"
              value={roomAdultsNum}
              type="number"
              onChange={(e) => {
                setRoomAdultsNum(e.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Children Num
            </label>
            <input
              class="form-control"
              value={roomChildrenNum}
              type="number"
              onChange={(e) => {
                setRoomChildrenNum(e.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label for="description" className="font-weight-bold">
              Room Description
            </label>
            <textarea
              class="form-control"
              id="hotel-description-text-area"
              value={roomDescription}
              rows="3"
              onChange={(e) => {
                setRoomDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <div class="form-group">
            <label for="address" className="font-weight-bold mt-3">
              Main image url
            </label>
            <input
              class="form-control mb-3"
              value={roomImageURL}
              placeholder={`main image url`}
              onChange={(e) => {
                setRoomImageURL(e.target.value);
              }}
            />
          </div>

          <button
            type="button"
            class="btn btn-secondary"
            onClick={editRoomHandler}
          >
            Create Room
          </button>
        </form>
      </div>
      <div className="overlay" onClick={closeModalHandler}></div>
    </>
  );
};

export default CreateRoom;
