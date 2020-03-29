import React from 'react';
import GuestLayout from './guest-layout';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {info} from './fakedata';
require('typeface-montserrat')

import image2 from "../resources/img/netflixparty.jpg";  //TODO: figure out how to use images from DB

const CardList = ({ info }) => {
  
  const cardsArray = info.map(info => (
    <div style={{marginBottom: '1rem'}}>
      <Card>
        <CardContent>
          <Typography style={{textAlign: 'center', fontFamily: 'Montserrat', fontWeight: '600'}} variant='h3'>{info.title}</Typography>
          <img src={image2}></img>
          <Typography style={{textAlign: 'center', fontFamily: 'Montserrat'}}>{info.description}</Typography>
          <Typography style={{textAlign: 'end', fontFamily: 'Montserrat', marginTop: '10px', marginRight: '10px'}} color= 'textSecondary'><a href={`https://${info.link}/`} target="_blank">Link to Source</a></Typography>
        </CardContent>
      </Card>
    </div>
  ));

  return (
    <div>
      {cardsArray}
    </div>
  );
};

export default () => (
  <GuestLayout>
    <section className="m-t-lg">
      <div className="container p-l-md p-r-md">
        <h4 className="title is-4" style={{textAlign:'center'}}>
          stay at home!! here are some stuff you can do when you're bored:
        </h4>
        <div>
          <CardList info={info} />
        </div>
      </div>
    </section>
  </GuestLayout>
);
