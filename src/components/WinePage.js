import React,{Component} from 'react'
import * as WinesService from '../services/Wines'
import { Wine } from './Wine';

export class WinePage extends Component {

    constructor(props){
      super(props)
      this.state = {
        wine:null
      }
    }
    componentDidMount() {
      this.setState({ loading: true }, () => {
        WinesService.fetchWine(this.props.match.params.wineId).then(wine => {
          this.setState({
            loading: false,
            wine,
          });
        });
      });
    }

    render() {
      console.log(this.props.history)
        if(!this.state.wine){
          return(null)
        }else{
          return(
            <Wine
              wine={this.state.wine}
            />
          )
        }

    }
  }