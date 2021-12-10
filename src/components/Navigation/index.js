import React from "react";
import {Link} from "react-router-dom";
 const Navigation = (
    {
      active = 'intro'
    }) => {
  return(
      <>

        <h1>Poems</h1>
        <Link to={"/poem1"}>
          <div className={"row"}>
            <p className={'poem-name'}>Threading Exercise</p>
          </div>
        </Link>
        {/*<div className={'row'}>*/}
        {/*    <div className="list-group">*/}
        {/*      <Link to="/"*/}
        {/*            className={`list-group-item ${active === 'intro' ? 'active' : ''}`}>*/}
        {/*        <i className="fa fa-home"></i>*/}
        {/*        <span className="d-none d-xl-inline">Home</span>*/}
        {/*      </Link>*/}
        {/*      <Link to="/explore"*/}
        {/*            className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>*/}
        {/*        <i className="fa fa-hashtag"></i>*/}
        {/*        <span className="d-none d-xl-inline">Explore</span>*/}
        {/*      </Link>*/}


        {/*  </div>*/}

        {/*</div>*/}

      </>
  );
}

export default Navigation;