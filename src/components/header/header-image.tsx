import React from 'react';

const HeaderImage = (props: any): React.ReactElement => {
  return (
    <div
      style={{backgroundImage: `url(${props.image})`}}
      className={`HeaderImage HeaderImage--${props.HeaderImageStyle}`}>
    </div>
  );
};

export default HeaderImage;
