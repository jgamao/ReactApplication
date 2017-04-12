import React from 'react';

class FieldComponent extends React.Component {
   	render() {
   		let name;
  		let age;

   		return (
	   		<div>
		      	<input placeholder="Name" ref={node => {name = node;}} />
		    	<input placeholder="Age" ref={node => {age = node;}} />

		    	<button onClick={() => {this.props.addStudent(name.value, age.value);
		    		name.value = '';age.value = '';}}>Add Student</button>
			</div>
		);

   	}
}

export default FieldComponent;