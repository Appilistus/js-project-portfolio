import styled from "styled-components"

export const Button = ({ href, children,variant,ariaLabel }) => {
    return (
        <StyledButton
            href={href}
            target="_blank"
            $variant={variant}
            aria-label={ariaLabel || children}
        >
            {children}
        </StyledButton>
    )
}

// Styled component below

const StyledButton = styled.a`
    padding: 10px 16px;
    margin-top: 10px;
    border: 2px solid #1d5c5a;
    border-radius: 12px;
    text-decoration: none;
    cursor: pointer;
    display:inline-block;
    text-align: center;

    background-color: ${(props) => 
        props.variant === "live"
            ? "#1d5c5a"
            : "#fff"} ;

    color: ${(props) => 
        props.variant === "live"
            ? "#fff"
            : "#1d5c5a"} ;

    width: ${(props) => 
        props.variant === "live" && props.variant === "demo"
            ? "192px"
            : "400px"} ;

    &:hover {
        background-color: ${(props) =>
            props.variant === "live" ? "#fff" : "#1d5c5a"};
        color: ${(props) =>
            props.variant === "live" ? "#1d5c5a" : "#fff"};    
        transition: 0.2s ease;
    }

    &:focus-visible {
        outline: 3px solid #000;
        outline-offset: 4px;

    }
    
    @media (max-width: 744px) {
        width: 300px;
    }
`