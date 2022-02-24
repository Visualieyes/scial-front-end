import React, { useEffect, useState, useCallback, } from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Form,
  FormInput,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
} from "shards-react";

import { useDispatch, useSelector } from 'react-redux';
import { getAssetData } from "../../redux/asset/state/asset.actions";
import { getAllAssets } from '../../redux/asset/state/asset.actions';

const SearchBar = () => {
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

  return (
    <Card small className="mb-4">
            {/* <CardHeader className="border-bottom">
              <h6 className="m-0">Select an asset: </h6>
            </CardHeader> */}

            <ListGroup flush>
              <ListGroupItem className="px-3">
                <Form>
                  <strong className="text-muted d-block mb-2">
                    Select an asset
                  </strong>
                  <div>
                    <InputGroup seamless className="mb-3">
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
                    </InputGroup>
                </div>
                </Form>
              </ListGroupItem>
            </ListGroup>
          </Card>
)}

export default SearchBar;