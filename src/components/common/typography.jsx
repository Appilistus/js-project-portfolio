import styled from "styled-components"

export const Heading1 = styled.h1`
    font-size: 100px;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 32px;

    @media (max-width: 1440px) {
        font-size: 80px;
    }

    @media (max-width: 744px) {
        font-size: 60px;
    }
`

export const Heading2 = styled.h2`
    font-size: 80px;
    font-weight: 500;
    text-align: center;
    margin: 64px 0;

    @media (max-width: 1440px) {
        font-size: 60px;
    }

    @media (max-width: 744px) {
        font-size: 40px;
    }
`

export const Heading3 = styled.h3`
    font-size: 30px;
    font-weight: 400;

    @media (max-width: 1440px) {
        font-size: 24px;
    }
`

export const Heading4 = styled.h4`
    font-size: 20px;
`

export const Paragraph = styled.p`
    font-size: 18px;
    font-weight: 300;
    line-height: 1.8;

    @media (max-width: 1440px) {
        font-size: 16px;
    }
`