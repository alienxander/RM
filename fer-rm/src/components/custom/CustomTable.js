import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DataGrid} from '@mui/x-data-grid';
import './css/BstCustomTable.scss'
class CustomTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: props.dataList,
            columns: props.columns
        }
        
        this.handleClickRow = this.handleClickRow.bind(this);
        console.log("Props: ", props);
        console.log(this.state.dataList);
    }

    

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps", props, state);
        state.dataList = props.dataList;
    }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps !== this.props){
    //         this.props = nextProps;
    //     }
    // }  

    handleClickRow(row){
        this.props.onRowSelect(row);
    }

    render() {      

        return (
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid 
                    rows={this.state.dataList} 
                    columns={this.state.columns}
                    pageSize={5}
                    pagination
                    onCellClick={(params, event) => {
                        if (!event.ctrlKey) {
                          event.defaultMuiPrevented = true;
                          this.handleClickRow(params.row)
                        }
                    }}
                />
            </div>
        );
    }
}

CustomTable.propTypes = {
    dataList: PropTypes.array,
    columns: PropTypes.array,
    onRowSelect: PropTypes.func,
    columns: PropTypes.array
};

export default CustomTable;