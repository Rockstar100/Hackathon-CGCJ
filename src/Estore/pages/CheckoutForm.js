import React from 'react';
import '../styles/partials/components/CheckoutForm.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

function CheckoutForm() {
    const inputStyle = {
        color: 'black',
        border: '2px solid black',
    };
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    return (
        <div>
            <form id="myform">
                <header>Shipping Order Form</header>
                <div className="area">
                    <div className="row">
                        <div className="col2">
                            <input type="text" name="firstname" style={inputStyle} />
                            <label htmlFor="firstname">First Name</label>
                        </div>
                        <div className="col2">
                            <input type="text" name="lastname" style={inputStyle} />
                            <label htmlFor="lastname">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <input type="text" name="phone" id="phone" style={inputStyle} />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="row">
                        <input type="text" name="email" id="email" style={inputStyle} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="row">
                        <input type="text" name="address" id="address" style={inputStyle} />
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="row">
                        <input type="text" name="postcode" id="postcode" style={inputStyle} />
                        <label htmlFor="postcode">Postcode</label>
                    </div>
                </div>
                <div className="row">
                        <input type="text" name="state" id="state" style={inputStyle} />
                        <label htmlFor="state">State</label>
                    </div>
                    <div className="row">
                        <input type="text" name="country" id="country" style={inputStyle} />
                        <label htmlFor="country">Country</label>
                    </div>

                   
              
              
                <div className="row">
                <button className="btn btn_primary btn_block btn_md">
                                      <Link to="/payment">Continue to Payment</Link>
                                            </button>
                                            
                </div>
            </form>
        </div>
    );
}

export default CheckoutForm;
