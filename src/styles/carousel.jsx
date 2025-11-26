import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/scrollbar"
import { Scrollbar, Mousewheel } from "swiper/modules"

export const Carousel = ({ data, renderItem }) => {
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
                    >
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </CarouselWrapper>
    )
}

// Styled component below

const CarouselWrapper = styled.div`
    margin-top: 40px;
    padding-right: 40px;

    .swiper {
        padding-bottom: 40px;
    }

    .swiper-scrollbar {
        position: relative;
        bottom: -20px;
        background-color: #e5e5e5;
        border-radius: 20px;
        height: 18px;
        width: 80%;
        margin: 24px auto 0;
    }

    .swiper-scrollbar-drag {
        background-color: #fd6f00;
        border-radius: 20px;
        height: 18px;
    }
`