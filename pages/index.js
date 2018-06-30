import React from 'react'
import { Segment, Sidebar, Button, Icon, Menu, Table, Input } from 'semantic-ui-react'
import axios from 'axios'
import host from './host'

const url = host.node

export default class extends React.Component { 
  constructor (props) {
    super(props)
    this.state = { 
      blocks: [], 
      transactions: [],
      transactionAdrs: [],
      transactionHash: [],
      page: 1,
      itemsPerPage: 10,
      totalItems: 0,
      index: null,
      show: 'blocks',
      search: '',
      address: '',
      safebalance: '',
      confirmedbalance: '',
      pendingbalance: '',
      hash: '',
      load: true,
      visible: false
    }
    this.getAllBlocks = this.getAllBlocks.bind(this);
    this.srchChange = this.srchChange.bind(this); 
    this.search = this.search.bind(this);
    this.getTransactionsandBalanceofAddress = this.getTransactionsandBalanceofAddress.bind(this);
    this.getTransactionbyHash = this.getTransactionbyHash.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  // handling escape close
  componentDidMount () {
   this.getAllBlocks();
  }

  async getAllBlocks() {
      const response = await axios.get(url+'/blocks/');
      if(response){
        this.setState({
          blocks: response.data,
          show: 'blocks',
          load: false,
          totalItems: response.data.length
        })
      }   
  }

  async getBlocksTransactions(index) {
      console.log(index);
      const response = await axios.get(url+'/blocks/'+index);
      if(response){
        this.setState({
          transactions: response.data.transactions,
          load: false,
        })
      }      
  }

  async getTransactionsandBalanceofAddress(address) {
      const response = await axios.get(url+'/address/'+address+'/transactions');
      if(response){
        console.log(response.data);
        this.setState({
          transactionAdrs: response.data.transactions,
          load: false,
        })
      } 

      const balance = await axios.get(url+'/address/'+address+'/balance');
      if(balance){
        console.log(balance.data);
        this.setState({
          safebalance: balance.data.safeBalance,
          confirmedbalance: balance.data.confirmedBalance,
          pendingbalance: balance.data.pendingBalance,
          address: address
        })
      } 
  }

  async getTransactionbyHash(txhash) {
      const response = await axios.get(url+'/transactions/'+txhash);
      if(response){
        console.log(response.data);
        this.setState({
          transactionHash: response.data,
        })
      }  
  }

  srchChange(e) {
      this.setState({search: e.target.value})
  }

  search() {
      if(!isNaN(this.state.search) && this.state.search != '' && this.state.search.length != 41){
        this.getBlocksTransactions(this.state.search);
        this.setState({show: 'transactions', index: this.state.search, load: true});
      }
      else if(this.state.search.length == 40 || this.state.search.length == 41){
        this.getTransactionsandBalanceofAddress(this.state.search);
        this.setState({show: 'transactionsAdrs', load: true});
      }
      else if(this.state.search.length == 64){
        this.getTransactionbyHash(this.state.search);
        this.setState({show: 'transactionsHash', hash: this.state.search, load: true});
      }
      else if(this.state.search == ''){
        alert('Fill out search box');
      }
      else{
        console.log('Error');
      }
  }

  toggleSidebar() {
    this.setState({
      visible: !this.state.visible
    })
  }

  render () {
    const visible = this.state.visible;

    let allblocks = (
                    <div style={{overflow: 'auto', 'max-width': '100%', 'margin-top': '15px'}}>
                    <Table celled>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Index</Table.HeaderCell>
                          <Table.HeaderCell>Transactions</Table.HeaderCell>
                          <Table.HeaderCell>Difficulty</Table.HeaderCell>
                          <Table.HeaderCell>MinedBy</Table.HeaderCell>
                          <Table.HeaderCell>BlockDataHash</Table.HeaderCell>
                          <Table.HeaderCell>Nonce</Table.HeaderCell>
                          <Table.HeaderCell>Date Created</Table.HeaderCell>
                          <Table.HeaderCell>BlockHash</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                      {
                        this.state.blocks.map((block) => 
                          (parseInt(block.index) <= (this.state.page * this.state.itemsPerPage)) && (parseInt(block.index) > ((this.state.page * this.state.itemsPerPage) - 10))?
                            <Table.Row key={block.index}>
                              <Table.Cell>{block.index}</Table.Cell>
                              <Table.Cell><p style={{color: '#3498db'}} onClick={()=>{this.setState({index: block.index, show: 'transactions', load: true}); this.getBlocksTransactions(block.index)}}>{block.transactions.length}</p></Table.Cell>
                              <Table.Cell>{block.difficulty}</Table.Cell>
                              <Table.Cell>{block.minedBy}</Table.Cell>
                              <Table.Cell>{block.blockDataHash}</Table.Cell>
                              <Table.Cell>{block.nonce}</Table.Cell>
                              <Table.Cell>{block.dateCreated}</Table.Cell>
                              <Table.Cell>{block.blockHash}</Table.Cell>
                            </Table.Row>
                            :null)
                      }
                      </Table.Body>
                      <Table.Footer>
                        <Table.Row>
                          <Table.HeaderCell colSpan='8'>
                            <Menu floated='right' pagination>
                              <Menu.Item as='a' icon>
                                <Icon name='chevron left' onClick={() => {this.setState({
                                  page: this.state.page - 1 <= 1 ? 1 : this.state.page - 1
                                })}} />
                              </Menu.Item>
                              <Menu.Item as='a'>
                                {this.state.page}
                              </Menu.Item>
                              <Menu.Item as='a' icon>
                                <Icon name='chevron right' onClick={() => {this.setState({
                                  page: ((this.state.page + 1) <= Math.ceil(this.state.totalItems/this.state.itemsPerPage)) ? this.state.page + 1: this.state.page
                                })}} />
                              </Menu.Item>
                            </Menu>
                          </Table.HeaderCell>
                        </Table.Row>
                      </Table.Footer>
                    </Table>
                    </div>);

    let transactions = (
                        <div style={{overflow: 'auto', 'max-width': '100%', 'margin-top': '15px'}}>
                        <h3>Transactions for Block: {this.state.index}</h3>
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
                            this.state.transactions.map((trans) => 
                                <Table.Row key={trans.transactionDataHash}>
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

    let transactionsAdrs = (
                      <div style={{'margin-top': '15px'}}>
                      <h3>Address: {this.state.address}</h3>
                      <h4>Safe balance: {this.state.safebalance}</h4>
                      <h4>Confirmed balance: {this.state.confirmedbalance}</h4>
                      <h4>Pending balance: {this.state.pendingbalance}</h4>
                      <h3>Transactions</h3>
                      <div style={{overflow: 'auto', 'max-width': '100%'}}>
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
                          this.state.transactionAdrs.map((trans) => 
                              <Table.Row key={trans.transactionDataHash}>
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
                      </div>
                      </div>);     
                      
    let transactionsbyhash = (
                        <div style={{'margin-top': '15px'}}>
                        <h3>Transaction Hash: {this.state.hash}</h3>
                        <div style={{overflow: 'auto', 'max-width': '100%'}}>
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
                                <Table.Row>
                                  <Table.Cell>{this.state.transactionHash.from}</Table.Cell>
                                  <Table.Cell>{this.state.transactionHash.to}</Table.Cell>
                                  <Table.Cell>{this.state.transactionHash.value}</Table.Cell>
                                  <Table.Cell>{this.state.transactionHash.fee}</Table.Cell>
                                  <Table.Cell>{this.state.transactionHash.dateCreated}</Table.Cell>
                                  <Table.Cell>{this.state.transactionHash.data}</Table.Cell>
                                  <Table.Cell>{this.state.transactionHash.senderPubKey}</Table.Cell>
                                  <Table.Cell>{this.state.transactionHash.transferSuccessful}</Table.Cell>
                                  <Table.Cell>{this.state.transactionHash.transactionDataHash}</Table.Cell>
                                </Table.Row>
                          }
                          </Table.Body>                      
                        </Table>
                        </div>
                        </div>);

    const content = (
      <div className="row" style={{'margin-top': '14px'}}>
        <div className="col-sm-6">
        <div style={{height: '6px'}}>
        </div>
        <span onClick={this.getAllBlocks} style={{'font-family': 'Paytone One', 'font-size': '40px', 'height': '200px'}}>
          <Icon name="list layout" onClick={this.toggleSidebar} /> Mccoin Explorer
        </span>
        </div>
        <div className="col-sm-6">
          <div className="container" style={{'margin-right': '0'}}>
          <div className="row">
          <div className="col-9">
          <Input fluid placeholder='Search by Block Number/ Address/ TxHash' onChange={this.srchChange}/>
          </div>
          <div className="col-3" style={{'padding': '0'}}>
          <Button secondary style={{'width': '100%'}} onClick={this.search}>Search</Button>
          </div>
          </div>
          </div>
        </div>
      </div>   
    );

    const app = (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={this.toggleSidebar}
          vertical
          visible={visible}
          width='thin'
        >
          <Menu.Item as='a'>
            <Icon name='list' onClick={() => {window.location.replace('/pending')}} />
            Pending Transactions
          </Menu.Item>
          <Menu.Item as='a' onClick={() => {window.location.replace('/confirmed')}}>
            <Icon name='list alternate' />
            Confirmed Transactions
          </Menu.Item>
          <Menu.Item as='a' onClick={() => {window.location.replace('/wallet')}}>
            <Icon name='id card outline' />
            Wallet
          </Menu.Item>
          <Menu.Item as='a' onClick={() => {window.location.replace('/faucet')}}>
            <Icon name='tint' />
            Faucet
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <Segment style={{'paddingBottom': '10%'}}>
            {content}
            {this.state.show == 'blocks'?allblocks:this.state.show == 'transactions'?transactions:this.state.show == 'transactionsAdrs'?transactionsAdrs:transactionsbyhash}
          </Segment>
        </Sidebar.Pusher>
    </Sidebar.Pushable>
    );

    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossOrigin="anonymous"/>
		    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan|Paytone+One" rel="stylesheet"/>
        <div className="container" style={{'max-width': '97%'}}>
          {app}
        </div>
      </div>
    )
  }
}