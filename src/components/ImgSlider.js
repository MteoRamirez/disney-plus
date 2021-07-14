import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImgSlider = (props) =>{
        let settings = {
            dots: true,
            infinity: true,
            speed:500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        return(
            <Carousel { ...settings }>
                <Wrap>
                    <a href="">
                        <img src="/images/slider-badging.jpg" alt="slider1" />
                    </a>
                </Wrap>
                <Wrap>
                    <a href="">
                        <img src="/images/slider-scale.jpg" alt="slider2" />
                    </a>
                </Wrap>
                <Wrap>
                    <a href="">
                        <img src="/images/slider-badag.jpg" alt="slider3" />
                    </a>
                </Wrap>
                <Wrap>
                    <a href="">
                        <img src="/images/slider-scales.jpg" alt="slider4" />
                    </a>
                </Wrap>
            </Carousel>
        )

}

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before{
            font-size: 10px;
            color: rgb(150,158,171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -75px;
    }

    .slick-next {
        right: -75px;
    }
`;

const Wrap = styled.div `
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    }
    &:hover {
        width: 100%;
        z-index: 1;
        top: 0;
    }
  }
`;

export default ImgSlider;