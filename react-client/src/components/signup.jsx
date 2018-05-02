import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { Button, FormControl, Row, Col } from 'react-bootstrap';


class SignUpForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {states:{
        CompanyName: '',
        userName: '',
        password: '',
        email: '',
        gender: '',
        phoneNumber: '',
        address: '',
        age: '',
        nationality: ''},
      message:''
    }

    this.onChange = this.onChange.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
  }
    onChange(e) {
      var states = this.state.states;
      var name = e.target.name;
      var value = e.target.value;
      console.log(e.target.value)
      states[name] = value;
      this.setState({states:states});
    };

    handleSubmit(event) {
      var that=this;
         event.preventDefault();
        axios.post('/signup', this.state.states)
          .then(function (response) {
         that.setState({message:"User Added"});
          //window.location.href = "/";
        })
          .catch(function (error) {
            console.log(error);
        });
    };



 render() {
    return (
      <div id="signUpPage" className="container-fluid">
    <div id='signup2' className="container wrapper well"><br />

  <form onSubmit = {this.handleSubmit}>
  <Row>
  <Col md={4}>
  <label id='signlable'>*Company Name
      <FormControl type="text" name="name" placeholder="Company Name" autoFocus required
      onChange = {this.onChange}
      />
    </label>
    </Col>
    <Col md={4}>
    <label id='signlable'>*User Name
          <FormControl type="text" name="userName" placeholder="User Name" required
          onChange = {this.onChange}
          />
        </label><br />
  </Col>
  <Col md={4}>
     <label id='signlable'>*Email:
      <FormControl type="email" name="email" placeholder="Email" required
        onChange={this.onChange} />
      </label><br />
  </Col>
  </Row><br />
  <Row>

  <Col md={4}>
  <label id='signlable'>*Password
        <FormControl type="password" name="password" placeholder="Password" autoFocus required
        onChange = {this.onChange}
        />
      </label><br />
  </Col>
  <Col md={4}>
  <label id='signlable'>*Phone Number
  <FormControl type="text" name="phoneNumber" placeholder="Phone Number" required
    onChange={this.onChange}/>
  </label><br />
  </Col>
  <Col md={3}>
  <label >*Gender
  <div className="form-group">
    <select name = "gender" className="form-control selectpicker btn btn-default" id="gend" onChange={this.onChange}>
      <option value="Select">Sellect The Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
    </div>
  </label>
  </Col>
  </Row><br />
  <Row>
  <Col md={4}>
    <label id='signlable'>*Age
     <FormControl type="number" name="age" placeholder="Age" required
      onChange={this.onChange} />
    </label><br />
  </Col>
    <Col md={4}>
    <label id='signlable'>Nationality
   <FormControl type="text" name="nationality" placeholder="Nationality"
    onChange={this.onChange} />
  </label><br />
  </Col>
  <Col md={4}>
    <label id='signlable'>Address
    <FormControl type="text" name="address" placeholder="Address"
      onChange={this.onChange}  />
    </label><br />
  </Col>
  </Row><br /><br />
    <Col md={3}>
<span id="req" className="wrapper"> *required</span>
  </Col>
  <Row>
  <Col md={4}>
  </Col>
    <Col md={4}>


      <Button type="submit" bsStyle="primary" bsSize="large">SignUp</Button>
      <h3 className="SuccessMessage">{this.state.message}</h3>
  </Col>
  </Row>
  </form>
</div>
</div>
    )
  }
}


export default SignUpForm;
