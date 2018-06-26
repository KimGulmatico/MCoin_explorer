import React from 'react'
import Router from 'next/router'
import {Card, Divider, Button, Icon, Label, Menu, Table, Input } from 'semantic-ui-react'
import axios from 'axios'
import Link from 'next/link'
import BurgerWallet from '../burgerWallet/burgerWallet'
import BurgerTransaction from '../burgerWallet/burgerTransaction'
import host from './host'

const url = host.node
const receiver = new BurgerWallet();

export default class extends React.Component { 
  constructor (props) {
    super(props)
    this.state = {
        show: 'home',
        burgerWallet: null,
        privateKey: null,
        rawTransaction: {
            "to": receiver.address,
            "value": 100,
            "fee": 10,
            "data": "",
        },
        safebalance: null,
        confirmedbalance: null,
        pendingbalance: null,
    }
    this.unlockWallet = this.unlockWallet.bind(this);
    this.generateWallet = this.generateWallet.bind(this);
    this.logout = this.logout.bind(this);
    this.sendTransaction = this.sendTransaction.bind(this);
    this.getBalance = this.getBalance.bind(this);
  }

  componentDidMount () {

  }

  componentWillUnmount () {
   
  }

  unlockWallet() {
    if(this.state.privateKey){
    let temp = new BurgerWallet(this.state.privateKey);
    this.setState({burgerWallet: temp, show: 'account'})
    this.getBalance(temp.address)
    console.log(temp);
    }
    else{
        alert('Enter private key');
    }
  }

  generateWallet() {
    let temp = new BurgerWallet();
    this.setState({burgerWallet: temp, show: 'account'})
    this.getBalance(temp.address)
    console.log(temp);
  }

  logout() {
      this.setState({show: 'home', burgerWallet: null})
  }

  async sendTransaction() {
    let dateCreated = new Date().toISOString();
    let senderPubKey = this.state.burgerWallet.publicKey;
    let _from = this.state.burgerWallet.address;

    const transaction = new BurgerTransaction(_from, this.state.rawTransaction.to, this.state.rawTransaction.value, this.state.rawTransaction.fee, dateCreated, this.state.rawTransaction.data, senderPubKey);
    const response = await this.state.burgerWallet.send(transaction);
    alert(response.data.transactionDataHash);
  }

  async getBalance(address) {
    const balance = await axios.get(url+'/address/'+address+'/balance');
      if(balance){
        this.setState({
          safebalance: balance.data.safeBalance,
          confirmedbalance: balance.data.confirmedBalance,
          pendingbalance: balance.data.pendingBalance,
        })
      } 
  }

  to=(e)=>{
    let rt = this.state.rawTransaction;
    rt.to = e.target.value;
    this.setState({rawTransaction: rt})
  }

  val=(e)=>{
    let rt = this.state.rawTransaction;
    rt.value = e.target.value;
    this.setState({rawTransaction: rt})
  }

  fee=(e)=>{
    let rt = this.state.rawTransaction;
    rt.fee = e.target.value;
    this.setState({rawTransaction: rt})
  }

  data=(e)=>{
    let rt = this.state.rawTransaction;
    rt.data = e.target.value;
    this.setState({rawTransaction: rt})
  }


  render () {

    let home =(
        <div className="container">
          <div className="container" style={{'max-width': '700px', 'margin-top': '150px'}}>
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col">
                <div className="container">
                    <div className="row">
                    <div className="col-1">
                        <i className="fas fa-wallet" style={{'font-size': '50px'}}></i>    
                    </div>
                    <div className="col">
                        <span style={{'font-family': 'Paytone One', 'font-size': '50px', position: 'absolute', 'margin-top': '13px', 'margin-left': '22px' }}>Mccoin Wallet</span>                 
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-2">
                </div>
            </div>
            <div className="row" style={{'height': '70px'}}>
            </div>
            <div className="row">
                <div className="col">
                <Input fluid focus onChange={(e)=>this.setState({privateKey: e.target.value})} placeholder='Enter private key' />
                </div>
            </div>
            <br/>
            <div className="row">
                <div align="center" className="col" style={{float: 'right'}}>
                <Button style={{width: '200px'}} secondary onClick={this.unlockWallet}>Unlock</Button>
                </div>
            </div>
            <br/>
            <center>
                or
            </center>
            <br/>
            <div align="center" className="row">
                <div className="col">
                <Button style={{width: '200px'}} secondary onClick={this.generateWallet}>Generate new wallet</Button>
                </div>    
            </div>
            </div>
            </div>)

    let account = (
                <div className="container" style={{'max-width': '97%'}}>
                  <div className="row" style={{'margin-top': '14px'}}>
                    <div className="col-sm-6">
                    <div style={{height: '6px'}}>
                    </div>
                    <span style={{'font-family': 'Paytone One', 'font-size': '40px', 'height': '200px'}}>Mccoin Wallet</span>
                    </div>
                    <div className="col-sm-6">
                    <div className="container" style={{'margin-right': '0'}}>
                    <div className="row">
                    <div className="col-9">
                    </div>
                    <div className="col-3" style={{'padding': '0'}}>
                    <Button secondary style={{'width': '100%', 'margin-top': '3px'}} onClick={this.logout}>Logout</Button>
                    </div>
                    </div>
                    </div>
                    </div>

                </div>
                <br/>
                <Card fluid style={{padding: '10px'}}>
                    <h2>Wallet Details</h2>
                    {
                    this.state.burgerWallet?
                    <div>
                    <p>Address: {this.state.burgerWallet.address}</p>
                    <p>Public Key: {this.state.burgerWallet.publicKey}</p>
                    <p>Private Key: {this.state.burgerWallet.privateKey}</p>
                    </div>
                    :null
                    }
                </Card>
                <Card fluid style={{padding: '10px'}}>
                    <h2>Balance</h2>
                    <p>Safe Balance: {this.state.safebalance}</p>
                    <p>Confirmed Balance: {this.state.confirmedbalance}</p>
                    <p>Pending Balance: {this.state.pendingbalance}</p>
                </Card>
                <Card fluid style={{padding: '10px'}}>
                    <h2>Send transaction</h2>
                    <Input style={{width: "500px"}} onChange={this.to} placeholder='To' />
                    <br/>
                    <Input style={{width: "500px"}} onChange={this.val} placeholder='Value' />
                    <br/>
                    <Input style={{width: "500px"}} onChange={this.fee} placeholder='Fee' />
                    <br/>
                    <Input style={{width: "500px"}} onChange={this.data} placeholder='Data' />
                    <Button style={{width: "200px", "margin-top": "20px"}} secondary onClick={this.sendTransaction}>Send</Button>
                </Card>
                </div>)

    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossOrigin="anonymous"/>
		    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan|Paytone+One" rel="stylesheet"/>
        {this.state.show == 'home'?home:account}
      </div>
    )
  }
}