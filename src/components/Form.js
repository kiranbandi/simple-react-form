import React, {Component} from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
    }
  	render() {
  	    
  	    const { metaData } = this.props;

		return (
		      <div className='form-container'>
		        <form>
		      {metaData.map((element,index) => {
		      
		      //This should ideally be a swtich statement over of the inputType and return different things based
		      // on that ..
		 
		      if( element.inputType =='customExamScoreInput' || element.inputType=='customExperienceInput' ){
		          return null;
		      }
		      else if (element.inputType == 'subHeading') {
		      	return <h4 className='text-left text-success' key={index}>{element.label}</h4>;
		   
		      }
	
		      return  <div key={index} className="form-group">
                            <label htmlFor={element.key}>{element.label} : </label>
                            <input type={element.inputType} className="form-control" id={element.key}/>
                          </div>
    		      
		      })}
		      </form>
              </div>
		);
	}
}  