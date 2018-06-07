import React from 'react'
import Router from 'next/router'
import {Button, Icon, Label, Menu, Table, Input } from 'semantic-ui-react'
import axios from 'axios'
import Link from 'next/link'

export default class extends React.Component { 
  constructor (props) {
    super(props)
    this.state = { 
      blocks: [], 
      page:10,
    }
    this.getAllBlocks = this.getAllBlocks.bind(this);
    
  }

  // handling escape close
  componentDidMount () {
   this.getAllBlocks();
  }

  componentWillUnmount () {
   
  }

  async getAllBlocks() {
      const response = await axios.get('http://localhost:3001/blocks/');
      if(response){
      //console.log(response.data);
      this.setState({
        blocks: response.data,
      })
      console.log(this.state.blocks[0]);
      console.log(this.state.blocks[0].index);
      }
      
  }


  render () {

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
          <div className="col-sm-6">
            <div className="container" style={{'margin-right': '0'}}>
            <div className="row">
            <div className="col-9">
            <Input fluid placeholder='Search...' />
            </div>
            <div className="col-3" style={{'padding': '0'}}>
            <Button secondary style={{'width': '100%'}}>Search</Button>
            </div>
            </div>
            </div>
          </div>
        </div>
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
            (parseInt(block.index) <= this.state.page)?
              <Table.Row key={block}>
                <Table.Cell>{block.index}</Table.Cell>
                <Table.Cell>{block.transactions.length}</Table.Cell>
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
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                {
                this.state.blocks.map((block) => {
                  if(parseInt(block.index) == this.state.page){
                    <Menu.Item as='a'>{block.index + 1}</Menu.Item>
                    //this.setState({page: this.state.page+10})
                  }
                  null
                })
                }
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
        </div>
      </div>
    )
  }
}