import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Form from './Form';
import { hashHistory } from 'react-router';

class Forms extends Component {
  
  constructor(props) {
        super(props);
        this.state = {
          formData : this.props.formMetaData[this.props.params.formIndex]
        };
        this.nextForm = this.nextForm.bind(this);
        this.previousForm = this.previousForm.bind(this);
    }
    
  nextForm(){
    hashHistory.push('/Forms/'+(Number(this.props.params.formIndex)+1));
  }
  previousForm(){
    hashHistory.push('/Forms/'+(Number(this.props.params.formIndex)-1));
  }
  
  componentWillReceiveProps(nextProps) {
  // when form index updates we update the state too which holds the formData
  //maybe there is a better way to do this !!!!!
  if (nextProps.params.formIndex !== this.props.params.formIndex) {
    this.setState({ formData: this.props.formMetaData[nextProps.params.formIndex] });
  }
}

  render () {

      const { formData } = this.state ,
           { params, formMetaData } = this.props,
           { formIndex } = params;
            
    return (
          <div className='form-root-container'>
            <h2 className='text-center text-primary text-bold'>{formData.name}</h2>
            <Form formIndex={formIndex} metaData={formData.elements}/>
            <div className="text-center form-button-container">
             { formIndex>0 && <button className="btn btn-primary btn-lg" onClick={this.previousForm}> &#8810; PREVIOUS</button> }
              <button className="btn btn-primary btn-lg">SAVE</button>
             { formIndex<(formMetaData.length-1) && <button className="btn btn-primary btn-lg" onClick={this.nextForm}>NEXT &#8811; </button> }
            </div>
          </div>
    );
  }
}

function mapStateToProps(state, ownProps) {  
  return {formMetaData: state.form.metaData};
}

export default connect(mapStateToProps)(Forms);