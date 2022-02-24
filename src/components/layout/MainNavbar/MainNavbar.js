import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Navbar } from "shards-react";

import NavbarSearch from "./NavbarSearch";
import NavbarNav from "./NavbarNav/NavbarNav";
import NavbarToggle from "./NavbarToggle";

//import action for get all assets
import { getAllAssets } from '../../../redux/asset/state/asset.actions';

const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  // const { search } = window.location;
  // const query = new URLSearchParams(search).get('s');
  // const [searchQuery, setSearchQuery] = useState(query || '');

  // const filteredPosts = filterPosts(posts, searchQuery);
  
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if(!dispatch) return;
  //   dispatch(getAllAssets());
  //   // dispatch(getAllAssets())
  // }, [dispatch])


  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          <NavbarSearch />
          <NavbarNav />
          <NavbarToggle />
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;
