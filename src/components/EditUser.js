import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            phone: this.props.userEditObject.phone,
            permission: this.props.userEditObject.permission
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        })        
    }

    saveUserEdit = () => {
        this.props.changeEditUser();

        var infoUser = {};
        infoUser.id = this.state.id;
        infoUser.name = this.state.name;
        infoUser.phone = this.state.phone;
        infoUser.permission = this.state.permission;
        this.props.getUserEditInfo(infoUser);
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <form>
                        <div className="card text-center mb-3">
                            <div className="card border-primary text-white bg-warning">
                                <div className="card-header text-uppercase text-white">Sửa thông tin User</div>
                                <div className="card-body">
                                    <div className="form-group text-left">
                                        <input 
                                            defaultValue={this.props.userEditObject.name} 
                                            onChange={(event) => this.isChange(event)}
                                            name="name" type="text" className="form-control" placeholder="Tên User" 
                                        />
                                    </div>
                                    <div className="form-group text-left">
                                        <input 
                                            defaultValue={this.props.userEditObject.phone} 
                                            onChange={(event) => this.isChange(event)}
                                            name="phone" type="text" className="form-control" placeholder="Điện thoại" 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <select 
                                            defaultValue={this.props.userEditObject.permission} 
                                            onChange={(event) => this.isChange(event)}
                                            name="permission" className="custom-select"
                                        >
                                            <option value>Chọn quyền mặc định</option>
                                            <option value={"Admin"}>Admin</option>
                                            <option value={"Moderator"}>Moderator</option>
                                            <option value={"User"}>User</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="button" className="btn btn-block btn-danger" value="Lưu"   
                                            onClick={() => this.saveUserEdit()}                                     
                                        />                                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;