import React from 'react'
import Router from 'next/router'
import { Message, Input, Button } from 'semantic-ui-react'
import axios from 'axios'

export default class extends React.Component { 
  constructor (props) {
    super(props)
    this.state = { 
      loading: false, 
    }
    this.requestMccoin = this.requestMccoin.bind(this);
    
  }

  // handling escape close
  componentDidMount () {
   //this.requestMccoin();
  }

  componentWillUnmount () {
   
  }

  async requestMccoin() {
      //9383deb8decad89faec764db2ab881358304b022
      console.log(this.state.address);
      this.setState({
        loading: true,
        response: null,
      })
      const response = await axios.get('http://localhost:3001/faucet/'+this.state.address+'/10');
      console.log(response.data);
      if(response){
        this.setState({
          loading: false,
          response: response.data,
          show: false,
          render: true,
        })
        if(response.data === 'Request accepted!'){
          this.setState({
            positive: true,
          })
        }
        else{
          this.setState({
            negative: true,
          })
        }
        setTimeout(function() { //Start the timer
            this.setState({render: false}) //After 1 second, set render to true
        }.bind(this), 5000)
      }
  }


  render () {
    let message = (<Message positive={this.state.positive} negative={this.state.negative} style={{position: 'absolute', top: 10, 'width': '700px'}}>
                    <Message.Header>{this.state.response}</Message.Header>
                  </Message>)

    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossOrigin="anonymous"/>
		    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Baloo+Chettan|Paytone+One" rel="stylesheet"/>
        <div className="container">
          <div className="container" style={{'max-width': '700px', 'margin-top': '150px'}}>
            {this.state.render?message:null}
            <div className="row">
              <div className="col-2">
              </div>
              <div className="col">
                <div className="container">
                  <div className="row">
                    <div className="col-1">
                      <i className="fas fa-shower" style={{'font-size': '50px'}}></i>    
                    </div>
                    <div className="col">
                      <span style={{'font-family': 'Paytone One', 'font-size': '50px', position: 'absolute', 'margin-top': '13px', 'margin-left': '22px' }}>Mccoin Faucet</span>                 
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
                <Input fluid focus disabled={this.state.loading} onChange={(e)=>this.setState({address: e.target.value})} placeholder='Address' />
              </div>
              <div>
                <Button secondary loading={this.state.loading} onClick={this.requestMccoin}>Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}