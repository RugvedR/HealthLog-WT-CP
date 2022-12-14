// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';

//Styling
const styles = {
  textField: {
    marginTop: 50,
  },
  // Tell Material-UI what's the font-size on the html element is.
  typography: {
    htmlFontSize: 40,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#33658A',
  },
  formControl: {
    minWidth: 120,
    marginTop: 30,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#33658A',
    color: 'white',
  },
  formError: {
    color: 'red'
  },
  formSuccess: {
    color: 'green',
    marginTop: 10,
  }
};

class ClinicForm extends React.Component {
  // Keep track of what user selects from clinic state drop down menu so that input can be grabbed later.
  handleStateSelectChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    event.preventDefault();
    this.props.handleClinicStateChange(event);
  }

  state = {
    value: '',
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Add a clinic
            </Typography>
            <form noValidate autoComplete="off" id="clinic-form">
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="clinic-name">Name</InputLabel>
                <TextField
                  id="clinic-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  className={classes.textField}
                  value={this.props.clinicName}
                  onChange={this.props.handleClinicNameChange}
                />
                <Typography className={classes.formError} component="p">{this.props.clinicNameError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="clinic-address">Address</InputLabel>
                <TextField
                  id="clinic-address"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textField}
                  value={this.props.clinicAddress}
                  onChange={this.props.handleClinicAddressChange}
                />
                <Typography className={classes.formError} component="p">{this.props.clinicAddressError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="clinic-city">City</InputLabel>
                <TextField
                  id="clinic-city"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textField}
                  value={this.props.clinicCity}
                  onChange={this.props.handleClinicCityChange}
                />
                <Typography className={classes.formError} component="p">{this.props.clinicCityError}</Typography>
              </FormControl>
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="select-state-dropdown">State</InputLabel>
                <TextField
                  select
                  className={classes.textField}
                  value={this.state.value}
                  onChange={this.handleStateSelectChange}
                  inputProps={{
                    state: '',
                    id: 'select-clinic-state',
                  }}
                  SelectProps = {
                    {name: 'value'}
                  }
                >
                  <MenuItem value='' />
                  <MenuItem value='DL'>Delhi</MenuItem>
                  <MenuItem value='GO'>Goa</MenuItem>
                  <MenuItem value='KN'>Karnatak</MenuItem>
                  <MenuItem value='KL'>Kerela</MenuItem>
                  <MenuItem value='KO'>Kolkata</MenuItem>
                  <MenuItem value='MH'>Maharashtra</MenuItem>
                  <MenuItem value='MP'>Madhya Pradesh</MenuItem>
                  <MenuItem value='TN'>Tamil Nadu</MenuItem>
                  {/* <MenuItem value='MH'>Maharashtra</MenuItem> */}


                  
                </TextField>
                <Typography className={classes.formError} component="p">{this.props.clinicStateError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="clinic-zip-code">Zip code</InputLabel>
                <TextField
                  id="clinic-zip-code"
                  InputLabelProps={{
                      shrink: true,
                  }}
                  className={classes.textField}
                  value={this.props.clinicZip}
                  onChange={this.props.handleClinicZipChange}
                />
                <Typography className={classes.formError} component="p">{this.props.clinicZipError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="clinic-phone">Phone number</InputLabel>
                <TextField
                  id="clinic-phone"
                  InputLabelProps={{
                      shrink: true,
                  }}
                  className={classes.textField}
                  value={this.props.clinicPhone}
                  onChange={this.props.handleClinicPhoneChange}
                />
                <Typography className={classes.formError} component="p">{this.props.clinicPhoneError}</Typography>
              </FormControl>

              <Button 
                size="large" 
                className={classes.button} 
                onClick={this.props.handleClinicFormSubmit}
                color="primary" 
                variant="raised"
              >
                Add clinic
              </Button>
              <Typography className={classes.formSuccess} component="p">{this.props.clinicFormSuccessMessage}</Typography>
            </form>
          </CardContent>
        </Card>
      </div >
    );
  }
}

// Export clinic form component with styling.
export default withStyles(styles)(ClinicForm);
