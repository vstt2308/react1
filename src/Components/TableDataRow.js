import React, { Component } from 'react';

class TableDataRow extends Component {
    PermissionShow =()=>{
        if(this.props.Permission === "1"){
            return "Admin";
        }
        else if(this.props.Permission === "2"){
            return "Moderation";
        }
        else {
            return "Normal";
        }
    }
    editClick = ()=>{
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    deleteButtonclick= (idUser)=>{
    this.props.deleteButtonclick(idUser)
    }
    render() {
        return (
            <tr>
            <td >{this.props.stt+1}</td>
            <td> {this.props.username}</td>
            <td>{this.props.tel}</td>
            <td>{this.PermissionShow()}</td>
            <td>
                <div className="btn-group">
                    <div className="btn btn-warning sua" onClick={()=>this.editClick()}><i className="fa fa-edit    " />Sửa</div>
                    <div className="btn btn-danger xoa"onClick={(idUser)=>this.deleteButtonclick(this.props.id)}>
                        <i className="fa fa-delete    " />Xoá</div>
                </div>
            </td>
        </tr>
        );
    }
}

export default TableDataRow;