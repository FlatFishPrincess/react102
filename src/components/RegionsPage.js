import React, { Component } from 'react';
import {Regions, Loader} from '.'
import * as  WinesService from '../services/Wines'

export class RegionsPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      loading: false,
      regions: [],
    }
  }

    componentDidMount() {
      this.setState({ loading: true }, () => {
        WinesService.fetchRegions().then(regions => {
          this.setState({
            loading: false,
            regions,
          });
        });
      });
    }

    onSelectRegion = (region) => {
      this.props.history.push({
        pathname: `/regions/${region}`
      });
      console.log(region)
    };

    render() {
        if (this.state.loading) {
          return <div className="center-align"><Loader /></div>
        }
        return (
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
            <Regions
              onSelectRegion={this.onSelectRegion}
              regions={this.state.regions}
              region={this.state.region} />
          </div>
        );
    }
  }