import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PlayerModal from './PlayerModal';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class App extends Component {

  constructor(props) { super(props); this.state = { DATA: undefined }; }

  componentDidMount() {

    axios.get('http://localhost:5000/api/players').then(response => { console.log(response.data); this.setState({DATA: response.data}); }).catch((error) => console.log(error)).finally(() => {});

  }

  render() {

    // fetchData('http://localhost:5000/api/players');

    if (this.state.DATA != null) {

      const modals = [];

      this.state.DATA.forEach(e => {

        modals.push(<PlayerModal name={e.name} country={e.country} searches={e.searches} />);

      });

      return <div>{modals}</div>

    } else {

      return <>aaaaaaaaaaaaaaaaaaa
      </>

    }
  }

}

export default App;
