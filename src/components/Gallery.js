import { Close } from "@mui/icons-material";
import { useState } from "react";
import img1 from "../assets/images/gallery1.webp";
import img2 from "../assets/images/gallery2.webp";
import img3 from "../assets/images/gallery3.webp";
import "../style/Gallery.css";
function Gallery() {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 2,
      imgSrc: img2,
    },
  ];
  const [model, setModal] = useState(false);
  const [tempImgsrc, setTempImgsrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgsrc(imgSrc);
    setModal(true);
  };
  return (
    <div className="gallery_main">
      <h2 className="gallery_title">Pet Gallery</h2>

      <div className={model ? "model open" : "model"}>
        <img src={tempImgsrc} alt="dd" />
        <Close onClick={() => setModal(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} alt="gallery" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
