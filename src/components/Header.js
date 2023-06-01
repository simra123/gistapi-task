import React, { useState } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import Search from "./Search";
//gist user list
import GistList from "./GistList";

function Header() {
  const [gistUsers, setGistUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <Wrapper>
        <Octicon name="mark-github" mega />
        <Search
          setIsLoading={setIsLoading}
          setSearchValue={setSearchValue}
          setGistForUser={setGistUsers}
          setIsError={setIsError}
        />
      </Wrapper>
      <GistList
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        searchValue={searchValue}
        setGistUsers={setGistUsers}
        gistUsers={gistUsers}
        isError={isError}
        setIsError={setIsError}
      />
    </>
  );
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export default Header;
