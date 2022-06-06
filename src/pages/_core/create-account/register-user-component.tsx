import React, {
  useState
} from 'react';
import { useSelector } from 'react-redux';
import { HorizontalSpace } from 'rrmc';
import './register-user.scss';
import EmailRegistration from './email-registration';
// import FacebookRegistration from 'src/modules/register-user/facebook-registration';
import ParallaxHeaderImage from 'src/components/_core/parallax-header-image';

const headerPictureFile = '/assets/register.jpg';

const RegisterUser = (): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(false);
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const headerPictureURL = `${prefix}${headerPictureFile}`;

  return (
    <>
      <ParallaxHeaderImage
        image={headerPictureURL}
        gradientOpacity='0.2'
        size='x-small'
        title='Registro' />
      <div className='container row RegisterUser'>
        <div className='col m1 l2'></div>
        <div className='col s12 m10 l8 row'>
          {/* <div className='col s12'><HorizontalSpace size='medium' /></div>
          <FacebookRegistration isLoading={isLoading} setIsLoading={setIsLoading} /> */}
          <div className='col s12'><HorizontalSpace size='medium' /></div>
          <EmailRegistration isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
        <div className='col m1 l2'></div>
      </div>
    </>
  );
};

export default RegisterUser;
