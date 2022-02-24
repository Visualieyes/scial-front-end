import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from 'react-router';
import axios from 'axios';
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import config from '../../env';

const LoginForm = ({ title }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   axios.post('https://000.000.000:3000')
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // })

  const handleSubmit = () => {
    const user = {
      email: email,
      password: password
    }

    console.log(user)
    // array of data
    axios.post(`${config.API_URL}/api/users/login`, user)
    .then(res => {
      if (res.data.success != false){
        setIsLoggedIn(true);
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  if (isLoggedIn){
    return <Redirect to = {{ pathname: "/scial-overview"}} />;
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
                  value={password}
                  onChange={(e) => 
                    setPassword(e.target.value)
                  }
                  autoComplete="current-password"
                />
              </Col>
            </Row>
            <Row form>
              <Col md="6" className="form-group">
                <Button theme="accent" onClick={handleSubmit}
                //   () => {
                //   console.log({email, password})
                // }
                >Login</Button>
              </Col>
            </Row>
            <Row form>
            <Col md="6" className="form-group">
                <h7>Don't have an account yet? <a href="/sign-up/">Sign Up</a></h7>
              </Col>
            </Row>         
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
)};

LoginForm.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

LoginForm.defaultProps = {
  title: "Login"
};

export default LoginForm;