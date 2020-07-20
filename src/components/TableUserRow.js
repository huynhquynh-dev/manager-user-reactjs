import React, { Component } from 'react'

export default class TableUserRow extends Component {
    
    editClick = () => {
        this.props.editFuncClick();
        this.props.changeStateEditUser();
    }

    deleteClick = (idUser) => {
        this.props.deleteUser(idUser); 
    }

    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.ten}</td>
                <td>{this.props.sdt}</td>
                <td>{this.props.quyen}</td>
                <td>
                    <div className="btn btn-group">
                        <button 
                            onClick = {() => this.editClick()}                            
                            type="button" className="btn btn-warning">
                                <i className="fa fa-edit">Sửa</i>
                        </button>
                        <button 
                            onClick={(idUser) => this.deleteClick(this.props.id)}
                            type="button" className="btn btn-danger"
                        >
                                <i className="fa fa-trash">Xóa</i>
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
}
