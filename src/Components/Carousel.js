import React, { Component } from "react";
import Slider from "../../node_modules/react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 10,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      width: "100%",
      arrows: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://unsplash.it/1365/400" alt="Text" />
          </div>
          <div>
            <img src="https://unsplash.it/1364/400" alt="Text" />
          </div>
          <div>
            <img src="https://unsplash.it/1363/400" alt="Text" />
          </div>
          <div>
            <img src="https://unsplash.it/1362/400" alt="Text" />
          </div>
          <div>
            <img src="https://unsplash.it/1366/400" alt="Text" />
          </div>
          <div>
            <img src="https://unsplash.it/700/400" alt="Text" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import Images from "./Images";
// import {
//   Gallery,
//   GalleryImage
// } from "../../node_modules/react-gesture-gallery";
// // const INTIAL_INDEX = 0;
// const Carousel = () => {
//   const [index, setIndex] = React.useState(0);
//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       if (index === Images.length - 1) {
//         setIndex(0);
//       } else {
//         setIndex(index + 1);
//       }

//       setIndex(index + 1);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, [index]);
//   return (
//     <Gallery
//       style={{
//         height: "50vh",
//         width: "100vw",
//         background: "black"
//       }}
//       index={index}
//       onRequestChange={i => {
//         setIndex(i);
//       }}
//     >
//       {Images.map(Image => (
//         <GalleryImage objectFit="contain" src={Image} />
//       ))}
//     </Gallery>
//   );
// };
// export default Carousel;

// import React from "react";
// import { UncontrolledCarousel } from "../../node_modules/reactstrap";
// import PropTypes from "prop-types";
// import "../Images/image6.svg";

// const items = [
//   {
//     src: "image6.svg",
//     altText: "Slide 1"
//     // caption: "Slide 1",
//     // header: "Slide 1 Header"
//   },
//   {
//     src:
//       "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
//     altText: "Slide 2"
//     // caption: "Slide 2",
//     // header: "Slide 2 Header"
//   },
//   {
//     src:
//       "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
//     altText: "Slide 3"
//     // caption: "Slide 3",
//     // header: "Slide 3 Header"
//   }
// ];

// UncontrolledCarousel.propTypes = {
//   items: PropTypes.array.isRequired,
//   indicators: PropTypes.bool,
//   controls: PropTypes.bool,
//   autoPlay: PropTypes.bool
// };

// const Example = () => {
//   return (
//     <UncontrolledCarousel
//       items={items}
//       style={{ width: "100%", height: "100%" }}
//     />
//   );
// };

// export default Example;
