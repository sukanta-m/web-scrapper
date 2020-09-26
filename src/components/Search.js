import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Search = ({onSearch}) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <StyledWrapper>
      <input onChange={onSearch} ref={inputRef} placeholder="Search"/>
    </StyledWrapper>
  )
};

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  input {
    width: 600px;
    padding: 20px 10px;
    border: 0;
    outline: 0;
  }
`;

export default Search;