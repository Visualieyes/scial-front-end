import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";

import { useSelector } from 'react-redux';

export default ({searchQuery, setSearchQuery}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = (target) => {
    const value = target;
    setSearchQuery(value);
  };

  // const handleSubmit = (event) => {
  //   console.log("HELLO")
  // }

  // const { searchTerm, dispatch } = props
  // const searchQueryChangeHandler = (e) =>{
  //   const userInput = e.target.value;
  //   dispatch(setSearchQuery(userInput));
  // }

  const asset = useSelector(state => state.selectedAsset)

  const history = useHistory();
  const onSubmit = e => {
      console.log("HELLO")
      history.push(`?ticker=${searchQuery}`)
      e.preventDefault()
  };
  

  return(
    //don't make this a whole ass form
    <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex" action="/" method="get" onSubmit={onSubmit}>
    <InputGroup seamless className="ml-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <i className="material-icons">search</i>
        </InputGroupText>
      </InputGroupAddon>
      <FormInput
        value={searchQuery}
        onChange={handleChange}
        onInput={e => setSearchQuery(e.target.value)}
        className="navbar-search"
        placeholder="Search for something..."
      />
    </InputGroup>
  </Form>
  )
};
