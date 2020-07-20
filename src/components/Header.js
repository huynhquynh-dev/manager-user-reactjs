import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">Quản lý thành viên với React JS</h1>                    
                    <hr className="my-2" />
                </div>
            </div>
        )
    }
}
