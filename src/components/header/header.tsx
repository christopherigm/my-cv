import React from 'react';
import './header.scss';
import HeaderImage from './header-image';
import {
  Title,
  StrongText,
  BasicText,
  TextAlignEnum
} from 'rrmc';
import { Link } from 'react-router-dom';
import Activities from './activities';

const Header = (): React.ReactElement => {
  return (
    <div className='row'>
      <div className='col s12 m4'>
        <HeaderImage image='https://cdn.pixabay.com/photo/2019/11/29/21/30/girl-4662159_960_720.jpg'/>
      </div>
      <div className='col s12 m8'>
        <Title
          text='Edgar Jonathan Guzman Monsalvo'
          Link={Link}
          align={TextAlignEnum.left}
          fullWidth={true} />
        <StrongText
          text='Perfil de usuario'
          align={TextAlignEnum.left}
          fullWidth={true} />
        <BasicText text='Ejemplo de descripción'/>
        <Activities/>
      </div>
    </div>
  );
};

export default Header;
