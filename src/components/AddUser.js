import React, { Component } from 'react'

export default class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            phone:"",
            permission:""
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    thayDoiTrangThaiForm = () => {
        if (this.props.trangThaiForm === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card text-center">
                            <div className="card border-primary">
                                <div className="card-header text-uppercase text-dark">Thêm mới User</div>
                                <div className="card-body">
                                    <div className="form-group text-left">
                                        <input name="name" onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Tên User" />
                                    </div>
                                    <div className="form-group text-left">
                                        <input name="phone" onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Điện thoại" />
                                    </div>
                                    <div className="form-group">
                                        <select name="permission" onChange={(event) => this.isChange(event)} className="custom-select">
                                            <option value>Chọn quyền mặc định</option>
                                            <option value={"Admin"}>Admin</option>
                                            <option value={"Moderator"}>Moderator</option>
                                            <option value={"User"}>User</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="reset" className="btn btn-block btn-primary" value="Thêm mới"
                                            onClick={(name,phone, permission) => this.props.addUser(this.state.name, this.state.phone, this.state.permission)} 
                                        />                                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.thayDoiTrangThaiForm()}
            </div>            
        )
    }
}
