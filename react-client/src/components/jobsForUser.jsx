import React from 'react';
import { Button, FormControl, Row, Col, ButtonToolbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
class JobsForUser extends React.Component {
  constructor(props) {
    super(props);

  }



render() {

  return (
  <div className = 'container'>
    <div className = 'col-1'>
    <div className="jobsDiv"><br />
      <Link to = {`/UserJobs/${ this.props.item.jobTitle }/${ this.props.item.user }`} activeClassName = "is-active" >
        <div className = 'row' id="userjob">
          <div className = 'col-9'>
            <span><b>Name : </b></span>
            <span>{this.props.item.user}</span>
          </div>
          <div className = 'col-4'>
            <span><b>Job Title : </b></span>
            <span>{this.props.item.jobTitle}</span>
          </div>
          <div className = 'col-4'>
            <span><b>Job Category : </b></span>
            <span>{this.props.item.category}</span>
          </div>
        </div><br />

        <div id="userjob">
          <div className = 'col-4'>
            <span><b>From : </b></span>
            <span>{this.props.item.from}</span>
          </div>
          <div className = 'col-4'>
            <span><b>To : </b></span>
            <span>{this.props.item.to}</span>
          </div>
        </div><br />

        <div id="userjob">
          <div className='col-1'>
          </div>
          <div id="description" className = 'col-10'>
            <span><b>Description : </b></span>
            <span>{this.props.item.jobDescription}</span>
          </div>
          <div className = 'col-1'>
          </div>
        </div><br />

        <div>
          <div className = 'col-8'>
          </div>
          <div id='postTime' className = 'col-4'>
            <span><b>Posted at : </b></span>
            <span>{this.props.item.created_at.slice(0, 10)}</span>
          </div>
        </div>



      </Link>
    </div>
  </div>
  </div>

    )
  }
}
export default JobsForUser;
