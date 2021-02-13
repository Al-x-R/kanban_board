import React from 'react';
import Typography from '@material-ui/core/Typography';
import Header from '../../components/Header';

const HomePage = () => {

  return (
    <div>
      <Header/>
      <Typography style={{ margin: '50px auto 30px' }} variant="h5" component="h2" gutterBottom>Home Page</Typography>
    </div>
  );
};

export default HomePage;