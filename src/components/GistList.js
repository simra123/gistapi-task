import React, { useCallback, useEffect, useState } from "react"
import { getPublicGists } from "../services/gistService"

import {
  FaCodeBranch,
  FaRegStar,
  FaCode,
  FaRegCommentDots,
  FaRegFileAlt
} from "react-icons/fa"
import moment from "moment/moment"
import Loader from "./loader"
import NotFound from "./NotFound"

//props
const GistList = ({
  gistUsers,
  setGistUsers,
  setIsLoading,
  isLoading,
  searchValue,
  isError,
  setIsError
}) => {
  //keeping the copy of first rendered api
  const [prevData, setPrevData] = useState([])

  //memoized function
  const getGist = useCallback(() => {
    setIsLoading(true)
    getPublicGists()
      .then((publicGists) => {
        setGistUsers(publicGists)
        setPrevData(publicGists)
        //setting the loader to hide
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        //setting the loader to hide
        setIsLoading(false)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(
    () => {
      //getting the list data on first render
      //search value onchange will not affect getgist perfomance
      getGist()

      //check if input is clear and retrun the prev stored data
      if (!searchValue) {
        setGistUsers(prevData)
        setIsError(false)
      }
    },
    // dependency array to avoid unessessary rerenders

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchValue]
  )

  //separate component to render multi file objects in loop
  const renderGistProperties = (gistObject) => {
    const gistElements = []

    for (const key in gistObject) {
      if (gistObject.hasOwnProperty(key)) {
        const gist = gistObject[key]
        gistElements.push(
          <p key={key}>
            <FaRegFileAlt size="20" /> {gist.filename}
          </p>
        )
      }
    }
    return gistElements
  }

  return (
    <div className="user-list">
      {/* not found page */}
      {isError && !isLoading ? <NotFound /> : null}
      {/* loader */}
      {isLoading && !isError ? <Loader /> : null}

      {/* rendering list if only both error and loading is cleared */}
      {!isError && !isLoading
        ? gistUsers?.map((val, index) => {
            return (
              <div key={val?.id} className="single-user">
                <div className="header">
                  <div style={{ display: "flex" }}>
                    <img src={val?.owner?.avatar_url} alt="user-avatar" />
                    <p className="name">{val?.owner?.login}</p>
                  </div>
                  <div className="icons" style={{ display: "flex" }}>
                    <p>
                      <FaCode size={20} /> {Object.keys(val?.files).length}{" "}
                    </p>
                    <p>
                      <FaCodeBranch size={20} /> forks
                    </p>
                    <p>
                      <FaRegCommentDots size={20} /> comments
                    </p>
                    <p>
                      <FaRegStar size={20} /> stars
                    </p>
                  </div>
                </div>
                <div className="date">
                  <p>
                    {" "}
                    created at : {moment(val?.created_at).format("MMM/DD/YYYY")}
                  </p>
                  <p>
                    {" "}
                    updated at : {moment(val?.updated_at).format("MMM/DD/YYYY")}
                  </p>
                </div>
                <h4>{val?.description}</h4>
                <div className="all-files icons">
                  {renderGistProperties(val?.files)}
                </div>
              </div>
            )
          })
        : null}
    </div>
  )
}

export default GistList
