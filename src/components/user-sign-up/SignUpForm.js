import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  Button
} from "shards-react";
import { setConstantValue } from "typescript";
import axios from 'axios';
import { Redirect } from 'react-router';
import { createUser } from '../../redux/users/state/users.actions.js';
import { useDispatch, useSelector } from 'react-redux';


const SignUpForm = ({ title }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);


    const handleSubmit = useCallback(async () => {
      if(!dispatch) return;
      console.log(name)
      const payload = {
        name, username, email, password
      }
      console.log(payload);
      dispatch(createUser(payload))
    }, [dispatch, name, username, email, password]);

    if (isSignedUp){
      return <Redirect to = {{ pathname: "/scial-overview" }} />
    }

    return (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
          <Row form>
            {/* Name */}
            <Col md="6" className="form-group">
                <label htmlFor="feName">Name</label>
                <FormInput
                id="feName"
                placeholder="Name"
                value={ name }
                onChange={(e) => {
                setName(e.target.value)
                console.log(name)
                }
                }
                />
            </Col>
            </Row>
            <Row form>
            {/* Username */}
            <Col md="6" className="form-group">
                <label htmlFor="feFirstName">Username</label>
                <FormInput
                id="feUsername"
                placeholder="Username"
                value={ username }
                onChange={(e) => 
                setUsername(e.target.value)
                }
                />
            </Col>
            </Row>
            <Row form>
            {/* Email */}
            <Col md="6" className="form-group">
                <label htmlFor="feEmail">Email</label>
                <FormInput
                type="email"
                id="feEmail"
                placeholder="Email Address"
                value={ email }
                onChange={(e) => 
                    setEmail(e.target.value)
                }
                autoComplete="email"
                />
            </Col>
            </Row>
            <Row form>
            {/* Password */}
            <Col md="6" className="form-group">
                <label htmlFor="fePassword">Password</label>
                <FormInput
                type="password"
                id="fePassword"
                placeholder="Password"
                value={ password }
                onChange={(e) => 
                setPassword(e.target.value)
                }
                autoComplete="current-password"
                />
            </Col>
            </Row>
            <Row form>
            {/* State */}
            <Col md="4" className="form-group">
                <label htmlFor="feInputState">Country</label>
                <FormSelect id="feInputState">
                <option>Choose...</option>
                <option>...</option>
                </FormSelect>
            </Col>
            </Row>
            <Button onClick={handleSubmit} theme="accent">Create Account</Button>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
)};

SignUpForm.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SignUpForm.defaultProps = {
  title: "Sign Up"
};

export default SignUpForm;
