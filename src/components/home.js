import React from 'react';
import GuestLayout from './guest-layout';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
require('typeface-montserrat');
import {info} from './fakedata';
import {articlesRef} from '../data/firestore'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    // Make a get call
    let articles = [];
    articlesRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log("Pushing data");
          articles.push(doc.data());
        });
      })
      .then(() => {
        console.log("ARTICLES: ", articles);
        this.setState(articles);
        console.log("STATE ARTICLES: ", this.state.articles);
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });

    // Call the firestore set listener
    // articlesRef.onSnapshot(snapshot => {
    //   snapshot.docChanges().forEach(change => {
    //     console.log("CHANGE");
    //     console.log(change.doc.data());
    //   });
    // }, error => {
    //   console.log(`Encountered error: ${error}`);
    // })
  }

  componentWillUnmount() {
    // Detach the listener
    // articlesRef.onSnapshot(() => {})();
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

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: info,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("COMPONENT DID UPDATE WOI");
    console.log("THIS: ", this.props.articles);
    console.log("PREV: ", prevProps.articles);
    if (this.props.articles !== prevProps.articles) {
      this.setState({
        articles: this.props.articles,
      })
    }
    console.log("NOW STATE: ", this.state.articles);
  }

  render() {
    const cardsArray = this.state.articles.map(article => {
      return (
        <div style={{marginBottom: '1rem'}}>
          <Card>
            <CardContent>
              <Typography style={{textAlign: 'center', fontFamily: 'Montserrat', fontWeight: '600'}} variant='h3'>{article.title}</Typography>
              <img src={article.image} alt={article.title}/>
              <Typography style={{textAlign: 'center', fontFamily: 'Montserrat'}}>{article.description}</Typography>
              <Typography style={{textAlign: 'end', fontFamily: 'Montserrat', marginTop: '10px', marginRight: '10px'}} color= 'textSecondary'><a href={`https://${article.link}/`} target="_blank">Link to Source</a></Typography>
            </CardContent>
          </Card>
        </div>
      )});

    return (
      <div>
        {cardsArray}
      </div>
    );
  }
}
