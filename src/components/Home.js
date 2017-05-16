import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Home extends Component {
  render () {
    return (
          <div>
            <h3 className='text-center text-success'>Welcome !! This is a simple example of a form application built using React and Redux</h3>
            <Link to='/Forms/0' className='button-center-link'>
               <button className='btn btn-primary btn-lg'> Click Here To Get Started </button>
             </Link>
          </div>
    );
  }
}
