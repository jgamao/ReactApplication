import React from 'react';
import AwesomeComponent from './AwesomeComponent.jsx';
import TableComponent from './TableComponent.jsx';
import FieldComponent from './FieldComponent.jsx';
import {render} from 'react-dom';

const style = {
	table: {
		width: '100%',
		border: '1px solid black'
	}
}

class App extends React.Component {
 	constructor() {
      	super();
		
      	this.state = {
      		id: 0,
         	data: []
      	}

      	this.addStudent = this.addStudent.bind(this);
      	this.deleteStudent = this.deleteStudent.bind(this);
      	this.editStudent = this.editStudent.bind(this);
   	}	

   	addStudent(name, age) {
   		var newId = this.state.id + 1;
   		const datas = { "id": newId, "fullName": name, "age": age };
      	var myArray = this.state.data;

      	myArray.push(datas)

      	this.setState({id: newId});
      	this.setState(myArray);
   	};

   	deleteStudent(id) {
   		// Filter all todos except the one to be removed
	    const remainder = this.state.data.filter((datas) => {
	      if(datas.id !== id) return datas;
	    });
	    // Update state with filter
	    this.setState({data: remainder});
   	};

   	editStudent() {
   		console.log('Student Updated');
   	}

  	render() {
    	return (
	        <div>
	        	<h2> Register Student </h2>
	        	
	        	<FieldComponent addStudent={this.addStudent} />

	        	<hr/>

	        	<h2> Student List </h2>

	            <table style={style.table}>
	               <tbody>
		               <tr>
			      			<td>id</td>
			      			<td>Name</td>
			      			<td>Age</td>
			      			<td></td>
			      			<td></td>
			      		</tr>

	                  	{this.state.data.map((person, i) => <TableComponent editStudent={this.editStudent}
	                  	deleteStudent={this.deleteStudent} key = {i} data = {person} />)}
	               </tbody>
	            </table>
         	</div>
      	);
  	}
}
render(<App/>, document.getElementById('app'));
