import React from "react";
import Navigation from "../Navigation";
import {Link} from "react-router-dom";
const HomeScreen = () => {
  return(
      <>
        <div className="all-content mt-3">

          <div className="col-lg-8 mx-auto align-content-center">
            <h1>Poems</h1>
            <Link to={"/poem1"}>
              <div className={"row align-content-center"}>
                <p className={'poem-name align-center'}>Threading Exercise</p>
              </div>

            </Link>
            <Link to={"/poem2"}>
              <div className={"row align-content-center"}>
                <p className={'poem-name align-center'}>Rabbit Hole</p>
              </div>

            </Link>
            <Link to={"/poem3"}>
              <div className={"row align-content-center"}>
                <p className={'poem-name align-center'}>A Language Derived
                from Things I've Heard Before</p>
              </div>

            </Link>
          </div>

        </div>
      </>
  )
}
export default HomeScreen;