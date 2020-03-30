import React from 'react';
import GuestLayout from './guest-layout';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
require('typeface-montserrat');
import {articlesRef} from '../data/firestore'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    articlesRef.get()
      .then(snapshot => {
        let articles = [];
        snapshot.forEach(doc => {
          articles.push(doc.data());
        });
        return articles
      })
      .then(articles => {
        this.setState({articles});
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  }

  render() {
    return (
      <GuestLayout>
        <section className="m-t-lg">
          <div className="container p-l-md p-r-md">
            <h5 className="title is-6" style={{textAlign:'center'}}>
            These past few weeks of partial lockdowns have seen many small businesses on the verge of shutting down. We’d hate to see our favorite coffee shops, local cinemas and bakeries go, so let’s support them while still practising social distancing and staying at home! 
            </h5>
            <div>
              <CardList articles={this.state.articles} />
            </div>
          </div>
        </section>
      </GuestLayout>
    );
  }
}

const CardList = ({ articles }) => {
  const cardsArray = articles.map(article => {
    return (
      <div style={{marginBottom: '1rem'}} key={article.title}>
        <Card>
          <CardContent>
            <Typography style={{textAlign: 'center', fontFamily: 'Montserrat', fontWeight: '600'}} variant='h3'>{article.title}</Typography>
            <div style={{display: 'flex'}}>
              <img style={{margin: 'auto', maxHeight: '500px'}} src={article.image} alt={article.title} />
            </div>
            <Typography style={{textAlign: 'center', fontFamily: 'Montserrat'}}>{article.description}</Typography>
            <Typography style={{textAlign: 'end', fontFamily: 'Montserrat', marginTop: '10px', marginRight: '10px'}} color= 'textSecondary'><a href={`${article.link}`} target="_blank">Link to Source</a></Typography>
          </CardContent>
        </Card>
      </div>
    )});

  return (
    <div>
      {cardsArray}
    </div>
  );
};
