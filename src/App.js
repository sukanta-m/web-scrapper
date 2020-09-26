import React, { useState } from 'react';
import './App.css';
import Search from "./components/Search";
import Preview from "./components/Preview";
import getUrls from "get-urls";
import styled from "styled-components";

function App() {
  const [urls, setUrls] = useState([]);
  const handleSearch = e => {
    const matches = [...getUrls(e.target.value)];
    setUrls(matches);
  }

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      <StyledWrapper>
        {urls.map(url => <Preview url={url}/>)}
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  display: flex;
`;

export default App;
