import React from "react";

import { useState, useEffect } from "react";

import "./EditHotel.css";
const EditRoom = (props) => {
  const [roomData, setRoomData] = useState("");
  useEffect(() => {
    fetch(`/api/room/${props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setRoomData(data.data);
        console.log(data);
      });
  }, []);
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
    let name = roomName ? roomName : roomData.room?.name;
    let price = roomPrice ? roomPrice : roomData.room?.price;
    let description = roomDescription
      ? roomDescription
      : roomData.room?.description;
    let image = roomImageURL ? roomImageURL : roomData.room?.image;
    let adults = roomAdultsNum
      ? roomAdultsNum
      : roomData.room?.peopleAmount.adults;
    let child = roomChildrenNum
      ? roomChildrenNum
      : roomData.room?.peopleAmount.child;
    let peopleAmount = { adults, child };

    fetch(
      `http://localhost:5000/api/admin/hotel/${props.hotelId}/room/${props.id}`,
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZmEwNTcwYjg5NDBhZjI1NWU3OSIsImlhdCI6MTY3ODMzNjQ2MSwiZXhwIjoxNjc4MzcyNDYxfQ.NIyKDkw93m4w_4O85pjocrr_fzToLpngWf1thcZspvM`,
        },

        body: JSON.stringify({
          name,
          price,
          description,
          image,
          peopleAmount,
        }),
        redirect: "follow",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Edit room successfully");
          window.location.reload();
          console.log(data);
        } else {
          console.log(data.message);
        }
      });
  };

  const deleteRoomHandler = () => {
    fetch(
      `http://localhost:5000/api/admin/hotel/${props.hotelId}/room/${props.id}`,
      {
        method: "delete",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZmEwNTcwYjg5NDBhZjI1NWU3OSIsImlhdCI6MTY3ODMzNjQ2MSwiZXhwIjoxNjc4MzcyNDYxfQ.NIyKDkw93m4w_4O85pjocrr_fzToLpngWf1thcZspvM`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Delete room successfully");
          window.location.reload();
          console.log(data);
        } else {
          console.log(data.message);
        }
      });
    props.onClose();
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
              defaultValue={roomData.room?.name}
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
              defaultValue={roomData.room?.price}
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
              defaultValue={roomData.room?.peopleAmount.adults}
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
              defaultValue={roomData.room?.peopleAmount.child}
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
              defaultValue={roomData.room?.description}
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
              defaultValue={roomData.room?.image}
              placeholder={`main image url`}
              onChange={(e) => {
                setRoomImageURL(e.target.value);
              }}
            />
          </div>

          <div className="edit-hotel-buttons-container">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={editRoomHandler}
            >
              Edit room
            </button>
            <button
              type="button"
              class="btn btn-danger"
              onClick={deleteRoomHandler}
            >
              Delete this room
            </button>
          </div>
        </form>
      </div>
      <div className="overlay" onClick={closeModalHandler}></div>
    </>
  );
};

export default EditRoom;
