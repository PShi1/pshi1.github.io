import React, {useState} from "react";
import "../Stylesheets/Gallery.scss";
import LeftArrow from '../Assets/LeftArrow.svg';
import RightArrow from '../Assets/RightArrow.svg';
import CircleUnfilled from '../Assets/CircleUnfilled.svg';
import CircleFilled from '../Assets/CircleFilled.svg';

export const Gallery = ({className, images, uniquePrefix}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCircleClick = (index) => {
    for (let i = 0; i < images.length; i++) {
      let el = document.getElementById(uniquePrefix + "-circle" + i);
      if (i !== index) {
        if (el) {
          el.src = CircleUnfilled;
        }
      } else {
        if (el) {
          el.src = CircleFilled;
        }
      }
    }
    setActiveIndex(index);
    let container = document.getElementById(uniquePrefix + "-images-container");
    if (container) {
      container.scrollLeft = container.clientWidth * index;
    }
  }

  const handleNextImage = () => {
    let resetToBeginning = false;
    if (activeIndex === images.length - 1) {
      resetToBeginning = true;
    }

    let nextIndex = (activeIndex + 1) % images.length;
    handleCircleClick(nextIndex);
    let container = document.getElementById(uniquePrefix + "-images-container");
    if (container) {
      if (resetToBeginning) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = container.clientWidth * nextIndex;
      }
    }
  }

  const handlePrevImage = () => {
    let resetToEnd = false;
    if (activeIndex === 0) {
      resetToEnd = true;
    }

    let nextIndex = (activeIndex - 1 + images.length) % images.length;
    handleCircleClick(nextIndex);
    let container = document.getElementById(uniquePrefix + "-images-container");
    if (container) {
      if (resetToEnd) {
        container.scrollLeft = container.scrollWidth;
      } else {
        container.scrollLeft = container.clientWidth * nextIndex;
      }
    }
  }

  return (
    <div className={"gallery " + className}>
      <div className="images-container" id={uniquePrefix + "-images-container"}>
        {images.map((image, index) => {
          return (
            <img src={images[index]} id={uniquePrefix + "-gallery-image" + index} className="gallery-image" alt=""
                 key={uniquePrefix + "-gallery-image" + index}/>
          )
        })}
      </div>

      <div className="bottom-circles-container">
        {images.map((image, index) => {
          if (index === 0) {
            return (
              <img src={CircleFilled} className="gallery-circle clickable" id={uniquePrefix + "-circle" + index}
                   key={uniquePrefix + "-circle" + index}
                   alt="" onClick={() => {
                handleCircleClick(index);
              }}/>
            )
          } else {
            return (
              <img src={CircleUnfilled} className="gallery-circle clickable" id={uniquePrefix + "-circle" + index}
                   key={uniquePrefix + "-circle" + index}
                   alt="" onClick={() => {
                handleCircleClick(index);
              }}/>
            )
          }
        })}
      </div>
      <div className="left-arrow-container clickable">
        <img src={LeftArrow} alt="" onClick={() => {
          handlePrevImage()
        }}/>
      </div>
      <div className="right-arrow-container clickable">
        <img src={RightArrow} alt="" onClick={() => {
          handleNextImage()
        }}/>
      </div>
    </div>
  )
}
