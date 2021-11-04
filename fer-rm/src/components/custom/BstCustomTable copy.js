import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './css/BstCustomTable.scss'
class BstCustomTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: []
        }
        
        console.log("Props: ", props);
        console.log(this.state.dataList);
    }

    

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps", props, state);
        state.dataList = props.dataList;
    }

 


    

    render() {
        const selectRow = {
            mode: 'radio',
            clickToSelect: true,
            hideSelectAll: true,
            onSelect: this.props.onSelect
        };

        const { SearchBar } = Search;

        const paginationFactoryOptions = {
            // pageStartIndex: 0,
            sizePerPage: 5,
            hideSizePerPage: true,
            hidePageListOnlyOnePage: true
        };

        

        return (
            <div>
                {console.log("dataList CT: ", this.state.dataList)}
                <ToolkitProvider
                    data={this.state.dataList}
                    columns={this.props.columns}
                    search
                >
                    {
                        props => (
                            <div className="customTableSearch">
                                <h6>Ingrese texto a buscar</h6>
                                <SearchBar {...props.searchProps} />
                                <BootstrapTable
                                    onTableChange={this.handleTableChange}
                                    classes='table table-striped table-responsive'
                                    {...props.baseProps}
                                    keyField='stdNumber'
                                    pagination={ paginationFactory(paginationFactoryOptions) }
                                    defaultSorted={ this.props.defaultSorted } 
                                    selectRow={ selectRow }
                                    noDataIndication={ 'no results found' }
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div>
        );
    }
}

BstCustomTable.propTypes = {
    dataList: PropTypes.array,
    onSelect: PropTypes.func,
    columns: PropTypes.array,
    defaultSorted: PropTypes.array
};

export default BstCustomTable;