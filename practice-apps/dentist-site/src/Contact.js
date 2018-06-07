import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <h3>Address</h3>
        <p>123 Some Street</p>
        <p>Anytown, ON</p>
        <p>Canada</p>
        <h3>Phone</h3>
        <p>(123)456-7890</p>
        <h3>Website</h3>
        <a href="./">You're on it, silly</a>
      </div>
    );
  }
}

export default Contact;
