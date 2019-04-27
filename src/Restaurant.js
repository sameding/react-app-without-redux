import React, {Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import config from './config/config.js';

class Restaurant extends Component {

  constructor(props) {
      super(props)
      this.state = {
          ...props,
          data: null
      }
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.searchWord !== this.state.searchWord) {
      this.setState({
        searchWord : nextProps.searchWord
      });
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    if(this.props.searchWord && this.props.searchWord.length > 3){
        let url = config.api_url+this.props.searchWord+'&per_page=100';
        axios({method: "get", crossdomain: true, url: url})
        .then((result) => {
            this.setState({data: result.data});
        })
        .catch(err => {
            console.log(err)
        })
    } else {
      this.setState({
        data : null
      });
    }
  }

  renderfields() {
    let { data } = this.state;

    const columns = [{
      Header: 'Name',
      accessor: 'name',
      minWidth: 400,
      className: 'dt-body-right'
    },
    {
      Header: 'Address',
      accessor: 'address',
      minWidth: 300
    },
    {
      Header: 'Price',
      accessor: 'price',
      maxWidth: 50
    }];

    return data && data.restaurants && data.restaurants.length>0 ?
     <ReactTable data={data.restaurants} columns={columns} defaultPageSize={10} className="-striped -highlight"/> : null;
  }

  render() {
      return this.props.searchWord && this.props.searchWord.length > 0 ?
          <Grid container alignItems="center" justify="center" className="main-container-grid-table">
              {this.renderfields()} 
          </Grid> : null
    
  }

}

export default Restaurant;