import React from 'react';

import Directory from '../../components/directory/directory.component';

import styled from 'styled-components';
// import './homepage.styles.scss';


// styles
export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
