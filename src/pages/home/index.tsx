import React, {
  useState
} from 'react';
import {
  HorizontalSpace
} from 'rrmc';
import { Link } from 'react-router-dom';
import NavBar from 'src/components/_core/nav-bar';
import Footer from 'src/components/_core/footer';
import Header from 'src/components/header/header';

const Home = (): React.ReactElement => {
  const [sectionMenu, setSectionMenu]: any = useState([]);

  return (
    <div className='page'>
      <NavBar
        setSectionMenu={setSectionMenu}
        sectionMenu={sectionMenu} />
      <div className='container'>
        <HorizontalSpace size='small' />
        <Header/>
        <HorizontalSpace size='small' />
        <Link to='/examples'>Samples</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
