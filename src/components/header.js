import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand"  style={{maxWidth: '800px'}}>
              <div className='title' style={{
                    width: '100vw', 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 0,
                }}
                >
                  <Link to="/" className="navbar-item"><strong>RoNA</strong></Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
