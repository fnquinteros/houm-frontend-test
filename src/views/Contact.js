import React, { Component } from "react";
import styled from 'styled-components';

class Contact extends Component {
  render() {
    return (
      <ContactPageContainer>
        <h2>LIKED THE WORK?</h2>
        <p>Contact me on my <a href="https://www.linkedin.com/in/fquinterosj/">LinkedIn</a>.
        </p>
      </ContactPageContainer>
    );
  }
}

const ContactPageContainer = styled.div`
  padding: 15px;
`;
 
export default Contact;