import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    deleteButtonclick=(idUser)=>{
         this.props.deleteUser(idUser)
    }
mappingDataUser = ()=> this.props.dataUserProps.map((value,key)=>(
    <TableDataRow 
    deleteButtonclick = {(idUser)=>this.deleteButtonclick(idUser)}
    changeEditUserStatus={()=>this.props.changeEditUserStatus()}
    editFunClick={(user)=>this.props.editFun(value)}
    username = {value.name}
    key = {key} 
    stt={key} 
    tel ={value.tel} 
    Permission ={value.Permission}
    id = {value.id} />
))
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>SĐT</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        
              {this.mappingDataUser()}
                      
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;