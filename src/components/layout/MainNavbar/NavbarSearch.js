import React, { useEffect, useState, useCallback, } from "react";

// import { useHistory } from 'react-router-dom'
import {
  Form,
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  ListGroup,
  ListGroupItem
} from "shards-react";

import { useDispatch, useSelector } from 'react-redux';
import { getAssetData } from "../../../redux/asset/state/asset.actions";
import { getAllAssets } from '../../../redux/asset/state/asset.actions';
// import { createUser } from '../../redux/asset/state/asset.actions.js'; 

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if(!dispatch) return;
    dispatch(getAllAssets());
  }, [dispatch])

  const assetStore = useSelector((state) => state.asset)

  const allAssets = assetStore.assets

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAssets, setFilteredAssets] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    setFilteredAssets(allAssets)
  }, [allAssets])

  // useEffect(()=>{
  //   console.log(assets.assets)
  // {name:'Apple', ticker:'appl'}, {name:'Tesla', ticker:'tsla'}
  //   setFilteredAssets(assets.assets)
  // }, [])


  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if(value.length){
      let filtered = allAssets.filter((a)=> a.name.toLowerCase().includes(value.toLowerCase()) ||  a.ticker.toLowerCase().includes(value.toLowerCase()))
      setFilteredAssets(filtered)
    }
  };


  const handleClick = useCallback(async (e) => {
    // setSearchQuery(e.target.value)
    console.log({e}, e.target.value)
    const value = e.target.value
    if(!dispatch) return;
    console.log({value})
    dispatch(getAssetData(value))
  }, [dispatch]);
  
  
  // (searchQuery) => {
  //   if(!dispatch) return;
  //   dispatch(getAssetData(searchQuery));
  // }

  const toggle = () => {
    setOpen(!open)
  }

  // const handleSubmit = (event) => {
  //   console.log("HELLO")
  // }

  // const { searchTerm, dispatch } = props
  // const searchQueryChangeHandler = (e) =>{
  //   const userInput = e.target.value;
  //   dispatch(setSearchQuery(userInput));
  // }

  // const history = useHistory();
  // const onSubmit = e => {
  //     console.log("HELLO")
  //     history.push(`?ticker=${searchQuery}`)
  //     e.preventDefault()
  // };
  

  return(
    //don't make this a whole ass form, just input field
    <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <InputGroup seamless className="ml-3">
      <Dropdown addonType="prepend" open={open} toggle={toggle}>
          <DropdownMenu>
            {filteredAssets.map(( listValue, index ) => {
              return (
                <DropdownItem onClick={handleClick} value={listValue.ticker}> {listValue.name} </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <i className="material-icons">search</i>
        </InputGroupText>
      </InputGroupAddon>
      <FormInput
        value={searchQuery}
        onChange={handleChange}
        onInput={e => setSearchQuery(e.target.value)}
        onClick={toggle}
        className="navbar-search"
        placeholder="Search for something..."
      />
      {/* <Collapse open={collapse}> */}
        {/* <ListGroup>
          {filteredAssets.map(( listValue, index ) => {
              return (
                <ListGroupItem onClick={handleClick}>{listValue}</ListGroupItem>
              );
            })}
        </ListGroup> */}
      {/* </Collapse> */}
      {/* <input
        className="navbar-search" 
        type="text" 
        name="navSearch" 
        value={searchQuery}
        onChange={handleChange}
        onInput={e => setSearchQuery(e.target.value)}
        placeholder="Search for something..." /> */}
    </InputGroup>
    </Form>
  )
};
