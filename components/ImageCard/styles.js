import styled from "styled-components";

export const SelectDropdownContainer = styled.div`
    position: relative;
    background-color: rgb(118, 248, 176);
    width: 50%;
    border-radius: 2px;
    margin: 10px auto 20px auto;
    &:after {
        content: " ";
        position: absolute;
        top: 50%;
        margin-top: -2px;
        right: 8px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #aaa;
    }
`;

export const DropdownLabel = styled.div`
    width: 50%;
    margin: auto;
    text-align: center;
`;

export const SelectDropdown = styled.select`
    font-size: 1rem;
    font-weight: 200;
    width: 100%;
    padding: 8px 24px 8px 10px;
    border: none;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &:active,
    &:focus {
        outline: none;
        box-shadow: none;
    }
`;
