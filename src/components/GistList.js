import React, { useCallback, useEffect, useState } from "react";
import { getPublicGists } from "../services/gistService";

import {
  FaCodeBranch,
  FaRegStar,
  FaCode,
  FaRegCommentDots,
  FaRegFileAlt,
} from "react-icons/fa";
import moment from "moment/moment";
import Loader from "./loader";
import NotFound from "./NotFound";

const GistList = ({
  gistUsers,
  setGistUsers,
  setIsLoading,
  isLoading,
  searchValue,
  isError,
  setIsError,
}) => {
  const [prevData, setPrevData] = useState([]);
  const getGist = useCallback(() => {
    setIsLoading(true);

    getPublicGists()
      .then((publicGists) => {
        // Handle the response here
        setGistUsers(publicGists);
        setPrevData(publicGists);
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occurred during the API request
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  useEffect(
    () => {
      //getting the list data on first render
      if (!searchValue) {
        setGistUsers(prevData);
        setIsError(false);
        console.log(prevData, "precvvvvvvvvvvvv");
      }
      console.log(searchValue, "search");
      getGist();
    },
    // dependency array to avoid unessessary rerenders
    [searchValue],
  );
  const renderGistProperties = (gistObject) => {
    const gistElements = [];

    for (const [key, value] of Object.entries(gistObject)) {
      const gist = value;
      gistElements.push(
        <p key={key}>
          <FaRegFileAlt size="20" /> {gist.filename}
        </p>,
      );
    }

    return gistElements;
  };

  return (
    <div className="user-list">
      {isError && !isLoading ? <NotFound /> : null}
      {isLoading && !isError ? <Loader /> : null}
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
            );
          })
        : null}
    </div>
  );
};

export default GistList;
