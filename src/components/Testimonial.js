import { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import img from "../assets/images/testimonial.jpg";
import img2 from "../assets/images/testmonial2.jpg";
import "../style/Testimonial.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      appendDots: (dots) => <ul>{dots}</ul>,
      customPaging: (i) => (
        <div className="ft-slick__dots--custom">
          <div className="loading" />
        </div>
      ),
    };
    return (
      <Container fluid className="testimonial testimonials-clean">
        <h3 className="testimonial_title text-center">Happy Customer </h3>
        <div className="testmonial_row people">
          <Slider {...settings}>
            <div className="">
              <div class="item">
                <div class="box">
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est.
                  </p>
                </div>
                <div class="author">
                  <img
                    class="rounded-circle"
                    alt="img"
                    src={img}
                    style={{ width: "120px" }}
                  />
                  <h5 class="name">Ben Johnson</h5>
                  <p class="title">CEO of Company Inc.</p>
                </div>
              </div>
            </div>
            <div>
              <div class="item">
                <div class="box">
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est.
                  </p>
                </div>
                <div class="author">
                  <img
                    class="rounded-circle"
                    alt="img"
                    src={img2}
                    style={{ width: "120px" }}
                  />
                  <h5 class="name">Ben Johnson</h5>
                  <p class="title">CEO of Company Inc.</p>
                </div>
              </div>
            </div>
            <div>
              <div class="item">
                <div class="box">
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est.
                  </p>
                </div>
                <div class="author">
                  <img
                    class="rounded-circle"
                    alt="img"
                    src={img}
                    style={{ width: "120px" }}
                  />
                  <h5 class="name">Ben Johnson</h5>
                  <p class="title">CEO of Company Inc.</p>
                </div>
              </div>
            </div>
            <div>
              <div class="item">
                <div class="box">
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                    finibus est.
                  </p>
                </div>
                <div class="author">
                  <img
                    class="rounded-circle"
                    alt="img"
                    src={img}
                    style={{ width: "120px" }}
                  />
                  <h5 class="name">Ben Johnson</h5>
                  <p class="title">CEO of Company Inc.</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}
