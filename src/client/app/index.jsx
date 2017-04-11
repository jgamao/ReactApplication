import React from 'react';
import AwesomeComponent from './AwesomeComponent.jsx';
import TableRow from './TableRow.jsx';
import {render} from 'react-dom';

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
    	this.setState({id: newId});

      	var myArray = this.state.data;
      	myArray.push({ "id": newId, "fullName": name, "age": age })
      	this.setState(myArray)

      	console.log(myArray);
   	};

   	deleteStudent() {
   		console.log('Student Deleted');
   	};

   	editStudent() {
   		console.log('Student Updated');
   	}

  	render() {
  		let name;
  		let age;

    	return (
	        <div>
	        	<h2> Add Student </h2>
	        	<input ref={node => {name = node;}} />
	        	<input ref={node => {age = node;}} />

	        	<button onClick={() => {this.addStudent(name.value, age.value);
	        		name.value = '';age.value = '';}}>Add Student</button>

	        	<hr/>

	        	<h2> Student List </h2>

	            <table>
	               <tbody>
	                  	{this.state.data.map((person, i) => <TableRow editStudent={this.editStudent}
	                  	deleteStudent={this.deleteStudent} key = {i} data = {person} />)}
	               </tbody>
	            </table>
         	</div>
      	);
  	}
}
render(<App/>, document.getElementById('app'));
