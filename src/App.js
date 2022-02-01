import React from "react";
import { useGetAllUsersQuery, useGetAllUsersByIdQuery } from "./services/Posts";

const App = () => {
  // const respone = useGetAllUsersQuery();
  const response = useGetAllUsersByIdQuery(5);

  console.log("Resposne Information: ", response.currentData.address);
  return (
    <>
      {/* {response.data.map((posts) => {
        return (
          <>
            <h1>{posts.id}</h1>
          </>
        );
      })} */}
      {/* <h1>{response.data.address}</h1> */}
    </>
  );
};
export default App;
