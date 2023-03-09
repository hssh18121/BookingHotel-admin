import React from "react";

import { useState } from "react";

import "./EditHotel.css";
const CreateHotel = (props) => {
  const imageLength = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const closeModalHandler = () => {
    console.log(props.id);
    props.onClose();
  };

  const [hotelName, setHotelName] = useState("");
  const [hotelAddress, setHotelAddress] = useState("");
  const [hotelDescription, setHotelDescription] = useState("");
  const [hotelProvince, setHotelProvince] = useState("");

  const [hotelImageURL, setHotelImageURL] = useState("");
  const [imageLibraryUrl1, setImageLibraryUrl1] = useState("");
  const [imageLibraryUrl2, setImageLibraryUrl2] = useState("");
  const [imageLibraryUrl3, setImageLibraryUrl3] = useState("");
  const [imageLibraryUrl4, setImageLibraryUrl4] = useState("");
  const [imageLibraryUrl5, setImageLibraryUrl5] = useState("");
  const [imageLibraryUrl6, setImageLibraryUrl6] = useState("");
  const [imageLibraryUrl7, setImageLibraryUrl7] = useState("");
  const [imageLibraryUrl8, setImageLibraryUrl8] = useState("");
  const [imageLibraryUrl9, setImageLibraryUrl9] = useState("");

  const changeImageLibraryURL = (e, stt) => {
    if (stt == 1) {
      setImageLibraryUrl1(e.target.value);
    } else if (stt == 2) {
      setImageLibraryUrl2(e.target.value);
    } else if (stt == 3) {
      setImageLibraryUrl3(e.target.value);
    } else if (stt == 4) {
      setImageLibraryUrl4(e.target.value);
    } else if (stt == 5) {
      setImageLibraryUrl5(e.target.value);
    } else if (stt == 6) {
      setImageLibraryUrl6(e.target.value);
    } else if (stt == 7) {
      setImageLibraryUrl7(e.target.value);
    } else if (stt == 8) {
      setImageLibraryUrl8(e.target.value);
    } else if (stt == 9) {
      setImageLibraryUrl9(e.target.value);
    }
  };

  const editHotelHandler = (e) => {
    e.preventDefault();
    let name = hotelName;
    let address = hotelAddress;
    let description = hotelDescription;
    let image = hotelImageURL;
    let province = hotelProvince;
    let imageLibrary = [
      imageLibraryUrl1,
      imageLibraryUrl2,
      imageLibraryUrl3,
      imageLibraryUrl4,
      imageLibraryUrl5,
      imageLibraryUrl6,
      imageLibraryUrl7,
      imageLibraryUrl8,
      imageLibraryUrl9,
    ];

    fetch(`http://localhost:5000/api/admin/system/hotel`, {
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
        address,
        description,
        image,
        imageLibrary,
        province,
        hotelFeatures: [
          "63ea37aaaed7d7c92c73391c",
          "63e6481feaa2b111b0f280b7",
          "63ea6cbf0117e3e38cd5025a",
          "63ea6d0b0117e3e38cd5025b",
          "63ea6d480117e3e38cd5025c",
          "63ea6d9f0117e3e38cd5025d",
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Create hotel successfully");
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
              Hotel name
            </label>
            <input
              class="form-control"
              value={hotelName}
              onChange={(e) => {
                setHotelName(e.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label for="name" className="font-weight-bold">
              Province
            </label>
            <input
              class="form-control"
              value={hotelProvince}
              onChange={(e) => {
                setHotelProvince(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Hotel Address
            </label>
            <input
              class="form-control"
              value={hotelAddress}
              onChange={(e) => {
                setHotelAddress(e.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlSelect2" className="font-weight-bold">
              Example multiple select
            </label>
            <select
              multiple
              class="form-control"
              id="exampleFormControlSelect2"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="description" className="font-weight-bold">
              Hotel Description
            </label>
            <textarea
              class="form-control"
              id="hotel-description-text-area"
              value={hotelDescription}
              rows="3"
              onChange={(e) => {
                setHotelDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <div class="form-group">
            <label for="address" className="font-weight-bold mt-3">
              Main image url
            </label>
            <input
              class="form-control mb-3"
              value={hotelImageURL}
              placeholder={`main image url`}
              onChange={(e) => {
                setHotelImageURL(e.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Image 1
            </label>
            <input
              class="form-control mb-3"
              placeholder={`url-1`}
              value={imageLibraryUrl1}
              onChange={(e) => {
                changeImageLibraryURL(e, 1);
              }}
            />
          </div>

          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Image 2
            </label>
            <input
              class="form-control mb-3"
              placeholder={`url-2`}
              value={imageLibraryUrl2}
              onChange={(e) => {
                changeImageLibraryURL(e, 2);
              }}
            />
          </div>

          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Image 3
            </label>
            <input
              class="form-control mb-3"
              placeholder={`url-3`}
              value={imageLibraryUrl3}
              onChange={(e) => {
                changeImageLibraryURL(e, 3);
              }}
            />
          </div>

          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Image 4
            </label>
            <input
              class="form-control mb-3"
              placeholder={`url-4`}
              value={imageLibraryUrl4}
              onChange={(e) => {
                changeImageLibraryURL(e, 4);
              }}
            />
          </div>

          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Image 5
            </label>
            <input
              class="form-control mb-3"
              placeholder={`url-5`}
              value={imageLibraryUrl5}
              onChange={(e) => {
                changeImageLibraryURL(e, 5);
              }}
            />
          </div>

          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Image 6
            </label>
            <input
              class="form-control mb-3"
              placeholder={`url-6`}
              value={imageLibraryUrl6}
              onChange={(e) => {
                changeImageLibraryURL(e, 6);
              }}
            />
          </div>

          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Image 7
            </label>
            <input
              class="form-control mb-3"
              placeholder={`url-7`}
              value={imageLibraryUrl7}
              onChange={(e) => {
                changeImageLibraryURL(e, 7);
              }}
            />
          </div>

          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Image 8
            </label>
            <input
              class="form-control mb-3"
              placeholder={`url-8`}
              value={imageLibraryUrl8}
              onChange={(e) => {
                changeImageLibraryURL(e, 8);
              }}
            />
          </div>

          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Image 9
            </label>
            <input
              class="form-control mb-3"
              placeholder={`url-9`}
              value={imageLibraryUrl9}
              onChange={(e) => {
                changeImageLibraryURL(e, 9);
              }}
            />
          </div>

          <button
            type="button"
            class="btn btn-secondary"
            onClick={editHotelHandler}
          >
            Create Hotel
          </button>
        </form>
      </div>
      <div className="overlay" onClick={closeModalHandler}></div>
    </>
  );
};

export default CreateHotel;
