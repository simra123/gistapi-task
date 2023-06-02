import React, { useCallback } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { getGistForUser } from "../services/gistService";
import { debounce } from "lodash";

//props
const Search = ({
  setGistForUser,
  setIsLoading,
  setSearchValue,
  setIsError,
  searchValue,
}) => {
  //input handler memoized
  const onChangeHandler = useCallback(
    //delays till user is done typing to avoid unneccesary api calls
    debounce((val) => {
      const getInput = val.target.value;
      if (getInput) {
        setIsLoading(true);
        setSearchValue(getInput);

        getGistForUser(getInput)
          .then((gistUsers) => {
            // Handle the response here
            if (gistUsers?.length) {
              setGistForUser(gistUsers);
              setIsError(false);
            } else {
              setIsError(true);
            }
            setIsLoading(false);
          })
          .catch((error) => {
            // Handle any errors that occurred during the API request
            setIsLoading(false);
            setIsError(true);
          });
      } else {
        setSearchValue(null);
      }
    }, 500),

    [searchValue],
  );

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          onChange={(e) => onChangeHandler(e)}
          placeholder="Search Gists for the username"
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search;
