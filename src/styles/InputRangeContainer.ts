import styled from "styled-components";

export const InputRangeContainer = styled.div`
  display: flex;
  justify-content: space-between;

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

  color: #8047F8;

  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 5px;

  border-color: transparent;

  &:hover {
    color: #4B2995; /* Change background color on hover */
    cursor: pointer; /* Change cursor to pointer on hover */
  }

  /* Remove all default style of this button */
  border: none;
  background: none;
  margin: 0;
  outline: none;
  box-shadow: none;
  appearance: none;

  &:focus {
    border: 0;
    font-weight: bold; /* Change font weight on focus */
  }
`;

export const InputRangeAddValue = styled.button`
  display: flex;
  align-items: center;

  padding-left: 3px;
  padding-right: 3px;

  color: #8047F8;

  /* Remove all default style of this button */
  border: none;
  background: none;
  margin: 0;
  outline: none;
  box-shadow: none;
  appearance: none;

  &:hover {
    color: #4B2995; /* Change background color on hover */
    cursor: pointer; /* Change cursor to pointer on hover */
  }

  &:focus {
    border: 0;
    font-weight: bold; /* Change font weight on focus */
  }
`;
