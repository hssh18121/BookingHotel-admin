import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./EditHotel.css";
const EditHotel = (props) => {
  const [hotelData, setHotelData] = useState("");
  const imageLength = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const closeModalHandler = () => {
    console.log(props.id);
    props.onClose();
  };

  useEffect(() => {
    fetch(`/api/hotel/${props.id}`)
      .then((response) => response.json())
      .then((data) => {
        setHotelData(data.data);
        console.log(data);
      });
  }, []);

  const [hotelName, setHotelName] = useState(hotelData.hotel?.name);
  const [hotelAddress, setHotelAddress] = useState(hotelData.hotel?.address);
  const [hotelDescription, setHotelDescription] = useState(
    hotelData.hotel?.description
  );

  const [hotelImageURL, setHotelImageURL] = useState(hotelData.hotel?.image);
  const [imageLibraryUrl1, setImageLibraryUrl1] = useState(
    hotelData.hotel?.imageLibrary[0]
  );
  const [imageLibraryUrl2, setImageLibraryUrl2] = useState(
    hotelData.hotel?.imageLibrary[1]
  );
  const [imageLibraryUrl3, setImageLibraryUrl3] = useState(
    hotelData.hotel?.imageLibrary[2]
  );
  const [imageLibraryUrl4, setImageLibraryUrl4] = useState(
    hotelData.hotel?.imageLibrary[3]
  );
  const [imageLibraryUrl5, setImageLibraryUrl5] = useState(
    hotelData.hotel?.imageLibrary[4]
  );
  const [imageLibraryUrl6, setImageLibraryUrl6] = useState(
    hotelData.hotel?.imageLibrary[5]
  );
  const [imageLibraryUrl7, setImageLibraryUrl7] = useState(
    hotelData.hotel?.imageLibrary[6]
  );
  const [imageLibraryUrl8, setImageLibraryUrl8] = useState(
    hotelData.hotel?.imageLibrary[7]
  );
  const [imageLibraryUrl9, setImageLibraryUrl9] = useState(
    hotelData.hotel?.imageLibrary[8]
  );

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
    let name = hotelName ? hotelName : hotelData.hotel?.name;
    let address = hotelAddress ? hotelAddress : hotelData.hotel?.address;
    let description = hotelDescription
      ? hotelDescription
      : hotelData.hotel?.hotelDescription;
    let image = hotelImageURL ? hotelImageURL : hotelData.hotel?.hotelImageURL;
    let province = hotelData.hotel?.province;
    let kinds = "Airport";
    let imageLibrary = [
      imageLibraryUrl1 ? imageLibraryUrl1 : hotelData.hotel?.imageLibrary[0],
      imageLibraryUrl2 ? imageLibraryUrl2 : hotelData.hotel?.imageLibrary[1],
      imageLibraryUrl3 ? imageLibraryUrl3 : hotelData.hotel?.imageLibrary[2],
      imageLibraryUrl4 ? imageLibraryUrl4 : hotelData.hotel?.imageLibrary[3],
      imageLibraryUrl5 ? imageLibraryUrl5 : hotelData.hotel?.imageLibrary[4],
      imageLibraryUrl6 ? imageLibraryUrl6 : hotelData.hotel?.imageLibrary[5],
      imageLibraryUrl7 ? imageLibraryUrl7 : hotelData.hotel?.imageLibrary[6],
      imageLibraryUrl8 ? imageLibraryUrl8 : hotelData.hotel?.imageLibrary[7],
      imageLibraryUrl9 ? imageLibraryUrl9 : hotelData.hotel?.imageLibrary[8],
    ];

    fetch(`http://localhost:5000/api/admin/hotel/${props.id}`, {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZmEwNTcwYjg5NDBhZjI1NWU3OSIsImlhdCI6MTY3ODMzNjQ2MSwiZXhwIjoxNjc4MzcyNDYxfQ.NIyKDkw93m4w_4O85pjocrr_fzToLpngWf1thcZspvM`,
      },

      body: JSON.stringify({
        name,
        address,
        description,
        province,
        image,
        kinds,
        imageLibrary,
      }),

      redirect: "follow",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Edit hotel successfully");
          window.location.reload();
          console.log(data);
        } else {
          console.log(data.message);
        }
      });
  };

  const deleteHotelHandler = () => {
    fetch(`http://localhost:5000/api/admin/system/hotel/${props.id}`, {
      method: "delete",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGUxZmEwNTcwYjg5NDBhZjI1NWU3OSIsImlhdCI6MTY3ODMzNjQ2MSwiZXhwIjoxNjc4MzcyNDYxfQ.NIyKDkw93m4w_4O85pjocrr_fzToLpngWf1thcZspvM`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Delete hotel successfully");
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
              Hotel name
            </label>
            <input
              class="form-control"
              defaultValue={hotelData.hotel?.name}
              onChange={(e) => {
                setHotelName(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Hotel Address
            </label>
            <input
              class="form-control"
              defaultValue={hotelData.hotel?.address}
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
              defaultValue={hotelData.hotel?.description}
              value={hotelDescription}
              rows="3"
              onChange={(e) => {
                setHotelDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <div class="form-group">
            <label for="address" className="font-weight-bold">
              Hotel main image
            </label>
            <div className="main-img-container">
              <img
                src={
                  hotelData.hotel?.image
                    ? hotelData.hotel?.image
                    : "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png"
                }
                alt="hotel-img-1"
                className="main-hotel-img"
              />
            </div>
            <label for="address" className="font-weight-bold mt-3">
              Main image url
            </label>
            <input
              class="form-control mb-3"
              defaultValue={hotelData.hotel?.image}
              placeholder={`main image url`}
              onChange={(e) => {
                setHotelImageURL(e.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label for="description" className="font-weight-bold">
              Image Library
            </label>
            <div class="container mb-3">
              <div class="row">
                <div class="col-sm">
                  <img
                    src={
                      hotelData.hotel?.imageLibrary[0]
                        ? hotelData.hotel?.imageLibrary[0]
                        : "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png"
                    }
                    alt="hotel-img-1"
                    className="img-library"
                  />
                </div>
                <div class="col-sm">
                  <img
                    src={
                      hotelData.hotel?.imageLibrary[1]
                        ? hotelData.hotel?.imageLibrary[1]
                        : "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png"
                    }
                    alt="hotel-img-1"
                    className="img-library"
                  />
                </div>
                <div class="col-sm">
                  <img
                    src={
                      hotelData.hotel?.imageLibrary[2]
                        ? hotelData.hotel?.imageLibrary[2]
                        : "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png"
                    }
                    alt="hotel-img-1"
                    className="img-library"
                  />
                </div>
              </div>
            </div>

            <div class="container mb-3">
              <div class="row">
                <div class="col-sm">
                  <img
                    src={
                      hotelData.hotel?.imageLibrary[3]
                        ? hotelData.hotel?.imageLibrary[3]
                        : "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png"
                    }
                    alt="hotel-img-1"
                    className="img-library"
                  />
                </div>
                <div class="col-sm">
                  <img
                    src={
                      hotelData.hotel?.imageLibrary[4]
                        ? hotelData.hotel?.imageLibrary[4]
                        : "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png"
                    }
                    alt="hotel-img-1"
                    className="img-library"
                  />
                </div>
                <div class="col-sm">
                  <img
                    src={
                      hotelData.hotel?.imageLibrary[5]
                        ? hotelData.hotel?.imageLibrary[5]
                        : "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png"
                    }
                    alt="hotel-img-1"
                    className="img-library"
                  />
                </div>
              </div>
            </div>

            <div class="container mb-3">
              <div class="row">
                <div class="col-sm">
                  <img
                    src={
                      hotelData.hotel?.imageLibrary[6]
                        ? hotelData.hotel?.imageLibrary[6]
                        : "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png"
                    }
                    alt="hotel-img-1"
                    className="img-library"
                  />
                </div>
                <div class="col-sm">
                  <img
                    src={
                      hotelData.hotel?.imageLibrary[7]
                        ? hotelData.hotel?.imageLibrary[7]
                        : "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png"
                    }
                    alt="hotel-img-1"
                    className="img-library"
                  />
                </div>
                <div class="col-sm">
                  <img
                    src={
                      hotelData.hotel?.imageLibrary[8]
                        ? hotelData.hotel?.imageLibrary[8]
                        : "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png"
                    }
                    alt="hotel-img-1"
                    className="img-library"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label for="address" className="font-weight-bold">
                Image 1
              </label>
              <input
                class="form-control mb-3"
                placeholder={`url-1`}
                defaultValue={hotelData.hotel?.imageLibrary[0]}
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
                defaultValue={hotelData.hotel?.imageLibrary[1]}
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
                defaultValue={hotelData.hotel?.imageLibrary[2]}
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
                defaultValue={hotelData.hotel?.imageLibrary[3]}
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
                defaultValue={hotelData.hotel?.imageLibrary[0]}
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
                defaultValue={hotelData.hotel?.imageLibrary[5]}
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
                defaultValue={hotelData.hotel?.imageLibrary[6]}
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
                defaultValue={hotelData.hotel?.imageLibrary[7]}
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
                defaultValue={hotelData.hotel?.imageLibrary[8]}
                onChange={(e) => {
                  changeImageLibraryURL(e, 9);
                }}
              />
            </div>
          </div>
          <div className="edit-hotel-buttons-container">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={editHotelHandler}
            >
              Edit Hotel
            </button>
            <button
              type="button"
              class="btn btn-danger"
              onClick={deleteHotelHandler}
            >
              Delete this hotel
            </button>
          </div>
        </form>
      </div>
      <div className="overlay" onClick={closeModalHandler}></div>
    </>
  );
};

export default EditHotel;
