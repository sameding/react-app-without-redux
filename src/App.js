import React, {Component} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Restaurant from './Restaurant';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  state = {
    searchWord: ''
  };


  handleChange = (event) => {
    this.setState({searchWord: event.target.value});
  };

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.searchWord !== this.state.searchWord) {
      this.setState({
        searchWord : nextState.searchWord
      });
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Grid container spacing={0} justify="center" alignItems="center" className="main-container-grid">
              <Grid item xs={12} sm={12} md={8} lg={8} className="main-container-grid">
                  <Grid container alignItems="center" justify="center" className="main-container-grid-search">
                    <Typography gutterBottom variant="h4">
                        Welcome To This Simple API Test
                    </Typography>
                    <TextField  
                      id="filled-full-width"
                      className="main-container-grid-input"  
                      value={this.state.searchWord}  
                      onChange={this.handleChange} 
                      placeholder="Please enter the city name"
                      margin="normal"
                      variant="filled"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    /> 
                  </Grid>
                  <Restaurant searchWord={this.state.searchWord}/>
              </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default App;
