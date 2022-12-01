import React, { useContext } from "react";
import { UserContext } from "../../App";

const UserContextTest = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>UserContextTest</h2>
      <h3>{user.name}</h3>
    </div>
  );

  // <UserContext.Consumer>
  //     {context => {
  //         return (
  //             <div>
  //                 <h1>User Context Test</h1>
  //                 <h2>{context.name}</h2>
  //             </div>
  //         )
  //     }}
  // </UserContext.Consumer>
};

export default UserContextTest;
