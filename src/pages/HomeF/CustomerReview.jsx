import React from "react";
// import pic1 from "public/assets/image/pic1.png";
// import pic2 from "public/assets/image/pic2.png";
// import pic3 from "public/assets/image/pic3.png";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function CustomerReviews() {
  return (
    <section className="review fb" id="review">
      <h1 className="heading">
        our customers <span>reviews</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <img src="assets/image/pic1.png" alt="pic 1" />
          <h3>Angeline</h3>
          <div className="stars">
            <StarIcon className="rs" color="warnimg" />
            <StarIcon className="rs" color="warnimg" />
            <StarIcon className="rs" color="warnimg" />
            <StarIcon className="rs" color="warnimg" />
            <StarIcon className="rs" color="warnimg" />
          </div>
          <p>
            "Outstanding food delivery service! Quick, efficient, and the taste
            was out of this world. Will definitely order again!"
          </p>
        </div>

        <div className="box">
          <img src="assets/image/pic2.png" alt="pic 2" />
          <h3>jack</h3>
          <div className="stars">
            <StarIcon className="rs" color="warnimg" />
            <StarIcon className="rs" color="warnimg" />
            <StarIcon className="rs" color="warnimg" />
            <StarIcon className="rs" color="warnimg" />
            <StarHalfIcon className="rs" />
          </div>
          <p>
            "I'm impressed! The food was delicious, arrived hot, and the
            portions were generous. A five-star experience all around."
          </p>
        </div>

        <div className="box">
          <img src="assets/image/pic3.png" alt="pice 3" />
          <h3>Nandy</h3>
          <div className="stars">
            <StarIcon className="rs" color="warnimg" />
            <StarIcon className="rs" color="warnimg" />
            <StarIcon className="rs" color="warnimg" />
            <StarIcon className="rs" color="warnimg" />
            <StarIcon className="rs" color="warnimg" />
          </div>
          <p>
            "Top-notch service! The food quality and taste were exceptional.
            They truly understand the meaning of customer satisfaction. Highly
            recommended!"
          </p>
        </div>
      </div>
    </section>
  );
}

export default CustomerReviews;
