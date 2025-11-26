import styled from "styled-components"

export const Button = ({ href, children,variant,ariaLabel }) => {
    return (
        <StyledButton
            href={href}
            target="_blank"
            variant={variant}
            aria-label={ariaLabel}
        >
            {children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    padding: 10px 16px;
    margin-top: 10px;
    border: 2px solid #FD6F00;
    border-radius: 12px;
    text-decoration: none;
    cursor: pointer;

    background-color: ${(props) => 
        props.variant === "live"
            ? "#FD6F00"
            : "#fff"} ;

    color: ${(props) => 
        props.variant === "live"
            ? "#fff"
            : "#FD6F00"} ;

    width: ${(props) => 
        props.variant === "live" && props.variant === "demo"
            ? "192px"
            : "400px"} ;

    &:hover {
        background-color: ${(props) =>
            props.variant === "live" ? "#fff" : "#fd6f00"};
        color: ${(props) =>
            props.variant === "live" ? "#fd6f00" : "#fff"};    
        transition: 0.2s ease;
    }

    &:focus-visible {
        outline: 3px solid #000;
        outline-offset: 4px;
    }
`