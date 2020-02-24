import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
 

  render() {
   
    return (
      <div className="card card-body mb-3">
        <h4>
          {}{' '}
          <i
            onClick={}
            className="fas fa-plus"
            style={{ cursor: 'pointer' }}
          />
          <i
            onClick={}
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          />
        </h4>
        { ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func
};

export default Contact;
