import React from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Header from '../../components/Header';
import { userSelector } from '../../store/selectors';

const HomePage = () => {
  const user = useSelector(userSelector);
  console.log(user);

  return (
    <div>
      <Header/>
      <Typography style={{ margin: '50px auto 30px' }} variant="h5" component="h2" gutterBottom>Home Page</Typography>
    </div>
  );
};

export default HomePage;