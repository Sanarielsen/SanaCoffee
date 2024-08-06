import styled from "styled-components";

export const InputRangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px;

  width: 80px;
  height: 38px;

  border-radius: 8px;

  background-color: #E6E5E5;

  border-color: transparent;

  input[type="number"] {
    -moz-appearance: textfield; /* Remove default Firefox styling */
    appearance: none; /* Remove default styling in other browsers */
    border: none; /* Remove border */
    outline: none; /* Remove outline */
    width: 20px; /* Adjust width as needed */
    text-align: center; /* Center the text */
    background-color: #E6E5E5;
  }

  &:hover {
    color: #E6E5E5;
    cursor: pointer; /* Change cursor to pointer on hover */
  }

  /* Remove the up and down arrows in WebKit browsers (Chrome, Safari) */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputRangeSubstractValue = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  padding-bottom: 2px;

  border: 0;
  background: none;

  color: #8047F8;

  &:focus {
    border: 2px solid #4B2995; /* Change border color on focus */
    outline: none;
    background: none;
    box-shadow: none;
  }

  &:hover {
    color: #C47F17;
    font-weight: bold;
    outline: none;
    background: none;
    box-shadow: none;
  }

`;

export const InputRangeAddValue = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background: none;

  width: 20px;
  height: 20px;

  color: #8047F8;

    &:focus {
    border: 2px solid #4B2995; /* Change border color on focus */
    outline: none;
    background: none;
    box-shadow: none;
  }

  &:hover {
    color: #C47F17;
    font-weight: bold;
    outline: none;
    background: none;
    box-shadow: none;
  }
`;
