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
            <h4 className="title is-4" style={{textAlign:'center'}}>
              stay at home!! here are some stuff you can do when you're bored:
            </h4>
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
