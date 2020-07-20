import React, { Component } from 'react';
import './../css/App.css';
import Header from './Header';
import Search from './Search';
import TableUser from './TableUser';
import AddUser from './AddUser';
import Data from './Data.json';

const { v4: uuidv4 } = require('uuid');

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            hienThiForm: false,
            data: [],
            searchText:'',
            editUserStates: false,
            userEditObject:{}
        }
    }

    doiTrangThai = () => {
        this.setState({
            hienThiForm: !this.state.hienThiForm
        })
    }

    xuLyTimKiem = (textSearch) => {
        this.setState({
            searchText: textSearch
        })      
    }

    // Dùng npm install uuid để tạo id tự động khác nhau theo thời gian 
    getNewUserData = (name, phone, permission) => {
        var item = {};
        item.id= uuidv4();
        item.name = name;
        item.phone = phone;
        item.permission = permission;

        var items = this.state.data;
        items.push(item);

        this.setState({
            data: items
        })
        //Cập nhật dữ liệu vào localStotage
        localStorage.setItem('userData',JSON.stringify(items));
    }

    editUser = (user) => {
        this.setState({
            userEditObject: user
        })
    }

    changeStateEditUser = () => {
        this.setState({
            editUserStates: ! this.state.editUserStates
        })
    }

    getUserEditInfoForApp = (info) => {    
        // Cập nhật nội dung đã chỉnh sửa 
        this.state.data.forEach((value, key) => {
            if (value.id === info.id) {
                value.name = info.name;
                value.phone = info.phone;
                value.permission = info.permission;
            }
        })
        //Cập nhật dữ liệu vào localStotage
        localStorage.setItem('userData',JSON.stringify(this.state.data));
    }

    deleteUser = (idUser) => {

        // Lấy các phần tử còn lại của data mà không có idUser
        var tempValue = this.state.data.filter(item => item.id !== idUser);
        this.setState({
            data: tempValue
        });
        //Cập nhật dữ liệu vào localStotage
        localStorage.setItem('userData',JSON.stringify(tempValue));
    }

    componentWillMount() {
        if(localStorage.getItem('userData') === null) {
            localStorage.setItem('userData',JSON.stringify(Data));
        }
        else {
            var temp = JSON.parse(localStorage.getItem('userData'));
            this.setState({
                data: temp
            });
        }
    }
    
    
    render() {

        var resultSearch=[];

        this.state.data.forEach((item) => {
            // Tìm có kết quả
            // Tìm kiếm theo trường name 
            if(item.name.indexOf(this.state.searchText) !== -1) {
                resultSearch.push(item);
            }
        })
        
        return (
            <div>
                <Header />
                <div className="searchForm">
                    <div className="container">
    
                        <Search 
                            timKiem = {(textSearch) => this.xuLyTimKiem(textSearch)}
                            ketNoi={() => this.doiTrangThai()} 
                            trangThaiNut={this.state.hienThiForm}
                            editUserStates = {this.state.editUserStates}
                            changeEditUser = {() => this.changeStateEditUser()}
                            userEditObject={this.state.userEditObject}
                            getUserEditInfoForApp = {(info) => this.getUserEditInfoForApp(info)}
                        >
                        </Search>
    
                        <div className="row">
                            <div className="col-12">
                                <hr/>
                            </div>
                        </div>

                        <div className="row">
                            <TableUser
                                dulieu={resultSearch} 
                                editFunc={(user) => this.editUser(user)}
                                changeStateEditUser = {() => this.changeStateEditUser()}
                                deleteUser = {(idUser) => this.deleteUser(idUser)}
                            >                                
                            </TableUser>

                            <AddUser 
                                addUser={(name, phone, permission) => this.getNewUserData(name, phone, permission)} 
                                trangThaiForm={this.state.hienThiForm}>
                            </AddUser>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
