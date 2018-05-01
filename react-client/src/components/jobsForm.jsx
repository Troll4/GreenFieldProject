import React from 'react';
import axios from 'axios';
import { Button, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';


class JobsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {states:{
			user: '',
			jobTitle: '',
			jobDescription: '',
			category: '',
			from: '',
			to: '',
		  salary: '',
			//urgentJob: ''
			lat:'',
			lng:''
			},
			message:''

		}
		this.baseState = this.state;
		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onChange(e) {
	  var states = this.state.states;
      var name = e.target.name;
      var value = e.target.value;
      states[name] = value;
      this.setState({states:states});
	};


	handleSubmit(event) {
		var that=this;
		event.preventDefault();
		axios.post('/job', this.state.states)
  			.then(function (response) {
  				that.setState({message:"Job Added"});

  			})
  			.catch(function (error) {
    		console.log(error);
  			});
		};

//how the message will be for the backend !!
// how it should be ?: /job or /job.....
	// handleSubmit2(event){
	// 	var that=this;
	// 	event.preventDefault();
	// 	axios.post('/job', this.state.states)
	// 				.then(function(response) {
	//   				that.setState({message:"Urgent Job"});
	//
	//   			})
	//   			.catch(function (error) {
	//     		console.log(error);
	//   			});
	// }	;





	render() {
		return (
			<center>
			<div id="jobform" className="container wrapper well"><br />
			<form onSubmit={this.handleSubmit}>
			<Row>
			<Col md={1}>
			</Col>
			<Col md={2}>
			<span>Job Title</span>
			</Col>
			<Col md={3}>
			<label >
			<FormControl maxLength={20} type="text" name="jobTitle" placeholder = "Job Title" autoFocus required onChange={this.onChange} />
			</label></Col>
			<Col md={2}>
			<span>Category</span>
			</Col>
			<Col md={3}>
			<label >
			<div className="form-group">
        <select name = "category" className="form-control selectpicker btn btn-default" id="catJ" onChange={this.onChange}>
          <option value="Select">Select Category</option>
          <option value="Driver">Driver</option>
          <option value="Home Maintenance">Home Maintenance</option>
          <option value="Computer Maintenance">Computer Maintenance</option>
          <option value="Babysitting">Babysitting</option>
          <option value="Tutoring">Tutoring</option>
        </select>
        </div>
			</label>
			</Col>
			<Col md={1}>
			</Col>
			</Row> <br />

			<Row>
			<Col md={1}>
			</Col>
			<Col md={2}>
			<span>Job Description</span>
			</Col>
			<Col md={8}>
			<label >
			<FormControl id="txtArea" componentClass="textarea"  maxLength={150} name="jobDescription" placeholder = "Job Description" autoFocus required onChange={this.onChange} />
			</label></Col>

			<Col md={1}>
			</Col>
			</Row><br />

			<Row>
			<Col md={1}>
			</Col>
			<Col md={2}>
			<span>From</span>
			</Col>
			<Col md={2}>
			<label >
			<FormControl type = "time" name = "from" placeholder = "From" autoFocus required onChange={this.onChange} />
			</label> </Col>
			<Col md={2}>
			<span>To</span>
			</Col>
			<Col md={2}>
			<label >
			<FormControl type = "time" name = "to" placeholder = "To" autoFocus required onChange={this.onChange} />
			</label></Col>
			<Col md={2}>
			<label >
			<div className="form-group">
				<select name = "category" className="form-control selectpicker btn btn-default" id="catJ" onChange={this.onChange}>
					<option value="FirstRange">Enter The Sallary</option>
					<option value="FirstRange">100-300</option>
					<option value="SecondRange">300-500</option>
					<option value="ThirdRange">500-700</option>
					<option value="FourthRange">700-1000</option>
				 </select>
				</div>
			</label></Col>
      <Col md={2}>
			<Button id="urgjob" className="btn btn-primary" type="submit" bsSize="large" >
					Urgent
			</Button>
			</Col>
			<Col md={1}>
			</Col>
			</Row><br/><br/>
<<<<<<< HEAD
=======


>>>>>>> fixing conflicts4
			<Row>
			<Col md={1}>
			</Col>
			<Col md={2}>
			<span>Location</span>
			</Col>
			<Col md={3}>

			<FormControl maxLength={20} type="text" name="lat" placeholder = "lat" autoFocus required onChange={this.onChange} />
			</Col>
			<Col md={2}>

			</Col>
			<Col md={3}>
				<FormControl maxLength={20} type="text" name="lng" placeholder = "lng" autoFocus required onChange={this.onChange} />

			</Col>
			<Col md={1}>
			</Col>
			</Row>
			<br />
			    <Button id="jobb" className="btn btn-primary" type="submit" bsSize="large" >
				     Add
			    </Button>
			    <h3 className="SuccessMessage">{this.state.message}</h3>

			</form>
			</div>
			</center>
		)
	}
}


export default JobsForm;
