import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactPageContainer>
      <h2>Enjoying PokedexLight?</h2>
      <p>
        Contact me on my{" "}
        <a href="https://www.linkedin.com/in/fquinterosj/">LinkedIn</a>.
      </p>
    </ContactPageContainer>
  );
};

const ContactPageContainer = styled.div`
  padding: 15px;
`;

export default Contact;
