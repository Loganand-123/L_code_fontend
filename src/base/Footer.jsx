import React from "react";

function Footer() {
  return (
    <section className="footer fb">
      <div className="share">
        <a href="#" className="btn">
          facebook
        </a>
        <a href="#" className="btn">
          twitter
        </a>
        <a href="#" className="btn">
          instagram
        </a>
        <a href="#" className="btn" >
          linkedin
        </a>
      </div>
      <h4
        className="credit"
        // style={{fontSize:"16px", color:"white"}}
      >
        created by <span> Loganand Palanisamy </span> | all rights reserved!
      </h4>
    </section>
  );
}

export default Footer;
