import React, {Component} from 'react'
import { WineList } from '.'
import * as WinesService from '../services/Wines'

export class WineListPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      loading: false,
      wines: [],
      region:""
    }
  }

    componentDidMount() {
      this.setState({ loading: true }, () => {
        WinesService.fetchWinesFrom(this.props.match.params.regionId).then(wines => {
          this.setState({
            loading: false,
            wines,
          });
        });
      });
    }

    onSelectWine = (wine) => {
      this.props.history.push({
        pathname: `/regions/${this.props.match.params.regionId}/wines/${wine}`
      })
    }

    render() {
      console.log(this.props.match)
      return [
        <div className="container">
          <h1 className="center-align">Open Wine Database</h1>
          <div className="center-align">
            You can read the Wines API documentation at{' '}
            <a href="https://bit.ly/rbw-api" target="_blank">
              https://wines-api.herokuapp.com
            </a>{' '}
            and try it{' '}
            <a href="https://bit.ly/rbw-api-swag" target="_blank">
              here
            </a>
          </div>
          <WineList 
            region={this.state.region}
            onSelectWine={this.onSelectWine}
            wines = {this.state.wines}
          />
      </div>
      ];
    }
  }