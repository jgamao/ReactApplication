import React from 'react';

const style = {
	action: {
		width: '50px',
		textAlign: 'center'
	}	
}

class TableComponent extends React.Component {
   	render() {
      	return (
	     	<tr>
	            <td>{this.props.data.id}.</td>
	            <td>{this.props.data.fullName}</td>
	            <td>{this.props.data.age}</td>
	            <td style={style.action} onClick = {this.props.editStudent}> &#x270E; </td>
	            <td style={style.action} onClick={() => {this.props.deleteStudent(this.props.data.id);}}> &#x2716; </td>
	     	</tr>
      	);
   	}
}

export default TableComponent;