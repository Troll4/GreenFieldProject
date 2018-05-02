import React from 'react';
import axios from 'axios';
import { Button, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';
class UserInfo extends React.Component {
   constructor(props) {
    super(props);
    this.state = {states:{
        name:'',
        email: '',
        gender: '',
        phoneNumber: '',
        address: '',
        age: '',
        nationality: ''}

    }

    this.onChange = this.onChange.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
  }
    onChange(e) {
      var states = this.state.states;
      var name = e.target.name;
      var value = e.target.value;
      states[name] = value;
      this.setState({states});

    };
   componentDidMount() {
   	  axios.get('/userInfo')
    .then(response => {
    const posts = response.data;
    console.log(posts);
    this.setState({states:posts});

  })
  .catch(function (error) {
    console.log(error);
  });
   }

    handleSubmit(event) {
         event.preventDefault();
        axios.put('/updateUser', this.state.states)
          .then(function (response) {
            console.log(response);
        })
          .catch(function (error) {
            console.log(error);
        });
    };

render() {

  return (
    <div>
    <div id='profileUpdate' className="container wrapper well"><br />
      <form onSubmit = {this.handleSubmit}>
      <Row>
		<Col md={4}>
	      <label id='signlable'>*Name
	        <FormControl type="text" name="name" placeholder="Name" autoFocus required
	        onChange = {this.onChange} value={this.state.states.name}
	        />
	      </label>
      	</Col>
      	<Col md={4}>
        <label id='signlable'>*Phone Number
          <FormControl type="text" name="phoneNumber" placeholder="Phone Number" required
            onChange={this.onChange} value={this.state.states.phoneNumber}/>
          </label><br />

	    </Col>
		<Col md={4}>
	       <label id='signlable'>*Email:
	        <FormControl type="email" name="email" placeholder="Email" required
	          onChange={this.onChange}  value={this.state.states.email} />
	        </label><br />
        </Col>
     </Row><br />
     <Row>
      	<Col md={4}>
        <label >*Gender
        <div className="form-group">
          <select name = "gender" className="form-control selectpicker btn btn-default" id="gend" onChange={this.onChange} value={this.state.states.gender}>
            <option value="Select">Sellect The Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          </div>
        </label><br />
        </Col>
		<Col md={4}>
    <label id='signlable'>Nationality
           <FormControl type="text" name="nationality" placeholder="Nationality"
            onChange={this.onChange} value={this.state.states.nationality} />
          </label><br />

	    </Col>
      	<Col md={4}>
	        <label id='signlable'>Address
	        <FormControl type="text" name="address" placeholder="Address"
	          onChange={this.onChange} value={this.state.states.address} />
	        </label><br />
	    </Col>
	  </Row><br />
	  <Row>
		<Col md={4}>
	        <label id='signlable'>*Age
	         <FormControl type="number" name="age" placeholder="Age" required
	          onChange={this.onChange} value={this.state.states.age}/>
	        </label><br />
	    </Col><br /><br /><br />
    <Col md={4}>
    </Col>
      	<Col md={4}>
	        <Button type = "submit" bsStyle="primary" bsSize="large">Update</Button>
		</Col>
	  </Row>
    <span id="req" className="wrapper">* required</span>
      </form>
	</div>
  </div>
    )
  }
}
export default UserInfo;
