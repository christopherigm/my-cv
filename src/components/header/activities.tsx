import React from 'react';

const activitiesItems = [
  {
    nombreitem: 'Correr',
    icono: 'home'
  },
  {
    nombreitem: 'Musica',
    icono: 'call'
  },
  {
    nombreitem: 'Jugar',
    icono: 'save'
  }
];

const Activities = (): React.ReactElement => {
  return (
    <>
      {activitiesItems.map((i: any, index: number) => {
        return (
          <div key={index}>
            <div>{i.nombreitem}</div>
            <i className="material-icons">{i.icono}</i>
          </div>
        );
      })}
    </>
  );
};

export default Activities;
