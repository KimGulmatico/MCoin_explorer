import React from 'react'
import Router from 'next/router'
import Divider, { Button, Icon, Label, Menu, Table, Input } from 'semantic-ui-react'
import axios from 'axios'
import Link from 'next/link'
import Loader from 'react-loader-spinner'
import url from './host'

export default class extends React.Component { 
  constructor (props) {
    super(props)
    this.state = {
      confirmed: []
    }
    this.getPendingtxns = this.getPendingtxns.bind(this);
  }

  // handling escape close
  componentDidMount () {
      this.getPendingtxns();
  }

  componentWillUnmount () {
   
  }

  async getPendingtxns() {
      const response = await axios.get(url+'/transactions/confirmed');
      if(response){
        this.setState({
            confirmed: response.data,
        })

        console.log(response.data);
      }   
  }

  render () {
    
    let transactions = (
        <div style={{overflow: 'auto', 'max-width': '100%', 'margin-top': '15px'}}>
        <h3>Confirmed Transactions</h3>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>From</Table.HeaderCell>
              <Table.HeaderCell>To</Table.HeaderCell>
              <Table.HeaderCell>Value</Table.HeaderCell>
              <Table.HeaderCell>Fee</Table.HeaderCell>
              <Table.HeaderCell>Date created</Table.HeaderCell>
              <Table.HeaderCell>Data</Table.HeaderCell>
              <Table.HeaderCell>Sender public key</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Data hash</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {
            this.state.confirmed.map((trans) => 
                <Table.Row>
                  <Table.Cell>{trans.from}</Table.Cell>
                  <Table.Cell>{trans.to}</Table.Cell>
                  <Table.Cell>{trans.value}</Table.Cell>
                  <Table.Cell>{trans.fee}</Table.Cell>
                  <Table.Cell>{trans.dateCreated}</Table.Cell>
                  <Table.Cell>{trans.data}</Table.Cell>
                  <Table.Cell>{trans.senderPubKey}</Table.Cell>
                  <Table.Cell>{trans.transferSuccessful}</Table.Cell>
                  <Table.Cell>{trans.transactionDataHash}</Table.Cell>
                </Table.Row>)
          }
          </Table.Body>                      
        </Table>
        </div>);


    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossOrigin="anonymous"/>
		    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan|Paytone+One" rel="stylesheet"/>
        <div className="container" style={{'max-width': '97%'}}>
        <div className="row" style={{'margin-top': '14px'}}>
          <div className="col-sm-6">
          <div style={{height: '6px'}}>
          </div>
          <span style={{'font-family': 'Paytone One', 'font-size': '40px', 'height': '200px'}}>Mccoin Explorer</span>
          </div>
        </div>
        {transactions}
        </div>
        <br/>
        <center>
        
        </center>
      </div>
    )
  }
}