import React, { Component } from 'react'
import TableUserRow from './TableUserRow'

export default class TableUser extends Component {

    deleteUser = (idUser) => {
        this.props.deleteUser(idUser);
    }

    hienThiBangUser = () => this.props.dulieu.map((value, key) => {
            return <TableUserRow 
                    key={key} 
                    id ={value.id}
                    stt={key + 1} 
                    ten={value.name} 
                    sdt={value.phone} 
                    quyen={value.permission} 
                    editFuncClick = {(user) => this.props.editFunc(value)}
                    changeStateEditUser = {() => this.props.changeStateEditUser()}
                    deleteUser = {(idUser) => this.deleteUser(idUser)}
                    />;
    })
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.hienThiBangUser()
                        }                 
                    </tbody>
                </table>
            </div>
        )
    }
}
