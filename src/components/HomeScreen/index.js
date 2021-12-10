import React from "react";
import {Link} from "react-router-dom";
const HomeScreen = () => {
  return(
      <>
        <div className={'row no-gutters m-0'}>

          <div className={'col-3 m-0'}></div>

          <div className="col-6 all-content mt-5 align-content-center">

            <h1 className={'text-center title'}>Digital Dwelling</h1>
            <h5 className={'text-center'}>by Ally Choung</h5>
            <hr/>
            <h4 className={'text-center'}>Pieces</h4>
            <Link to={"/threading"}>
              <h5 className={'content-name poem-name text-center'}>Threading Exercise</h5>
            </Link>
            <Link to={"/rabbit"}>
              <h5 className={'content-name poem-name text-center'}>Rabbit Hole</h5>

            </Link>
            <Link to={"/alanguage"}>
              <h5 className={'content-name poem-name text-center'}>A Language Derived
                from Things I've Heard Before</h5>

            </Link>
            <hr/>
            <Link to={"/arspoetica"}>
              <h5 className={'content-name text-center'}>Ars Poetica</h5>
            </Link>
            <Link to={"/workscited"}>
              <h5 className={'content-name text-center'}>Works Cited</h5>

            </Link>

          </div>

          <div className={'col-3'}></div>






        </div>

      </>
  )
}
export default HomeScreen;