import React from 'react';

const style = {
	action: {
		width: '50px',
		textAlign: 'center'
	},

	nodata: {
		textAlign: 'center'
	}	
}

class TableComponent extends React.Component {
   	render() {
   		let editStudent = this.props.editStudent;
  		let deleteStudent = this.props.deleteStudent;

   		if(this.props.data.length > 0) {
   			return (
	   			<tbody>
	               	<tr>
		      			<td>id</td>
		      			<td>Name</td>
		      			<td>Age</td>
		      			<td></td>
		      			<td style={style.action} onClick={this.props.deleteAllStudent}>&#x2716;</td>
		      		</tr>

		      		{
		      			this.props.data.map(function(item, i) {
					      	return <tr key = {i}>
						            <td>{item.id}.</td>
						            <td>{item.fullName}</td>
						            <td>{item.age}</td>
						            <td style={style.action} onClick={() => {editStudent(item.id);}}> &#x270E; </td>
						            <td style={style.action} onClick={() => {deleteStudent(item.id);}}> &#x2716; </td>
						     	</tr>
				      	})
		      		}
		      	</tbody>
	      	)
      	}

      	return (
      		<tbody>
      			<tr><td style={style.nodata} colSpan="5">No Data</td></tr>
  			</tbody>
  		)
   	}
}

export default TableComponent;