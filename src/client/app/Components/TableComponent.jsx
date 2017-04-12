import React from 'react';

const style = {
	action: {
		width: '50px',
		textAlign: 'center'
	}	
}

class TableComponent extends React.Component {
   	render() {
   		console.log(this.props.data);
   		if(this.props.data.length != 0 ) {
	      	return (
		     	<tr>
		            <td>{this.props.data.id}.</td>
		            <td>{this.props.data.fullName}</td>
		            <td>{this.props.data.age}</td>
		            <td style={style.action} onClick={() => {this.props.editStudent(this.props.data.id);}}> &#x270E; </td>
		            <td style={style.action} onClick={() => {this.props.deleteStudent(this.props.data.id);}}> &#x2716; </td>
		     	</tr>
	      	);
   		}

   		return (
   			<tr>
   				<td colspan="5">No Data</td>
   			</tr>
		)
   	}
}

export default TableComponent;