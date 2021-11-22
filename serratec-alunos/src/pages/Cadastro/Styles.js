import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Form = styled.form`
    background-color: #D6C9E3;
    max-width: 90%;
    padding: 20px;
`;

const handleInputBgColor = isActive => {
    switch (isActive){
        case true:
            return "green";
        case false:
            return "red";
        case undefined:
            return "#C2C2C2";
    }
}

export const Input = styled.input`
    width: 200px;
    height: 50px;
    margin: 5px;

    border: 3px solid ${({isActive}) => handleInputBgColor(isActive)};
`;

export const Button = styled.button`
    background-color: #C2C2C2;
    width: 100px;
    height: 50px;
`;