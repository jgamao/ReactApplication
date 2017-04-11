import React from 'react';

class TableRow extends React.Component {
   	render() {
      return (
         	<tr>
	            <td>{this.props.data.id}.</td>
	            <td>{this.props.data.fullName}</td>
	            <td>{this.props.data.age}</td>
	            <td onClick = {this.props.editStudent}> &#x270E; </td>
	            <td onClick = {this.props.deleteStudent}> &#x2716; </td>
         	</tr>
      );
   	}
}

export default TableRow;