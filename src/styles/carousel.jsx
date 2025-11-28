import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/scrollbar"
import { Scrollbar, Mousewheel } from "swiper/modules"

export const Carousel = ({ data, renderItem, index }) => {
    return (
        <CarouselWrapper>
            <Swiper
                modules={[Scrollbar, Mousewheel]}
                scrollbar={{ draggable: true}}
                mousewheel={{forceToAxis: true}}
                spaceBetween={64}
                slidesPerView="auto"
                speed={700}
                watchOverflow={false}
            >
                {data.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ width: "400px"}}
                        className="slide"
                        tabIndex={0}
                    >
                        {renderItem(item, index)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </CarouselWrapper>
    )
}

// Styled component below

const CarouselWrapper = styled.div`
    margin-top: 60px;
    padding: 0 40px;

    @media (max-width: 1440px) {
        margin: 0;
        padding: 0;
    }

    .swiper {
        padding-bottom: 64px;
    }

    .swiper-scrollbar {
        position: relative;
        bottom: -20px;
        background-color: #e5e5e5;
        border-radius: 20px;
        height: 18px;
        width: 80%;
        margin: 70px auto 0;
    }

    .swiper-scrollbar-drag {
        background-color: #1d5c5a;
        border-radius: 20px;
        height: 18px;
    }

    .slide {
        width: 400px;
    }

    @media (max-width: 744px) {
        .slide {
            width: 300px !important;
        }
    }
`