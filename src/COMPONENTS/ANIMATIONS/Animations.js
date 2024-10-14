import React from "react";
import "./animations.css";
import Marquee from "react-fast-marquee";

const Animations = () => {
  return (
    <div className="animations__full__div">
      <p className="Features">Features</p>
      <h3 className="what_i_do">What I Do</h3>
      <Marquee className="animation__div">
        <div className="images__div">
          <div>
            <img
              className="images__all"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjanMTRFb4vJDgb_7Zry5ijl8qpz_hsibdtg&s"
              alt="images"
            />
          </div>
          <div>
            <img
              className="images__all"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnYYa3LQVzW2MzR1FeVew1Avo196tu0UsUtw&s"
              alt="images"
            />
          </div>
          <div>
            <img
              className="images__all"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQdNo5bFSV6342iExrEarxqMRWAIGXlplsw&s"
              alt="images"
            />
          </div>
          <div>
            <img
              className="images__all"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTonUFgzj-7VAbRZpp028haLjf9lNcj4JkCug&s"
              alt="images"
            />
          </div>
          <div>
            <img
              className="images__all"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvtdqb6aGfdKAyp_NdUyEVOzgrbl2UgEnYpQ&s"
              alt="images"
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Animations;
