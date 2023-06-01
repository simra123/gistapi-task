import React, { useState } from "react"
import styled from "styled-components"
import Octicon from "react-octicon"
import Search from "./Search"
//gist user list
import GistList from "./GistList"

function Gist() {
  //alllist data
  const [gistUsers, setGistUsers] = useState([])
  //loading state
  const [isLoading, setIsLoading] = useState(false)
  //input value
  const [searchValue, setSearchValue] = useState("")
  //error handling
  const [isError, setIsError] = useState(false)

  //components using the pattern "lifting up the state" to user minimum state
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
  )
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
`

export default Gist
