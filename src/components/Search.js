import React, { Component } from 'react'
import EditUser from './EditUser'

export default class Search extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            tempValue:'',
            userEditObj:{}
        }
    }
    
    hienThiNut = () => {
        if(this.props.trangThaiNut === true) {
            return <div onClick={() => this.props.ketNoi()} className="btn btn-block btn-outline-danger">Đóng</div>;
        }
        else {
            return <div onClick={() => this.props.ketNoi()} className="btn btn-block btn-outline-info">Thêm mới</div>;
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        })
        this.props.timKiem(this.state.tempValue)
    }

    getUserEditInfo = (info) => {
        this.setState({
            userEditObj: info
        })
        this.props.getUserEditInfoForApp(info);
    }

    isShowEditForm = () => {
        if (this.props.editUserStates === true) {
            return <EditUser 
                        changeEditUser={() => this.props.changeEditUser()}
                        userEditObject={this.props.userEditObject}
                        getUserEditInfo = {(info) => this.getUserEditInfo(info)}
                    />
        }        
    }
    
    render() {
        return (
            <div>
                
               {this.isShowEditForm()}

                <div className="row">                
                    <div className="col-9">
                        <div className="form-group" style={{ marginBottom: 0 }}>
                            <div className="btn btn-group">
                                <input onChange={(event) => this.isChange(event)} style={{ width: 400 }} type="text" className="form-control" placeholder="Nhập từ khóa tìm kiếm"/>
                                <button onClick={(textSearch) => this.props.timKiem(this.state.tempValue)} className="btn btn-info">Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        {this.hienThiNut()}
                    </div>
                </div>
            </div>            
        );
    }
}
