import React from 'react'
import MaterialReactTable from 'material-react-table';


export default function TableNew({ columns, data }) {
    return (
        <MaterialReactTable
            columns={columns}
            data={data}
            enableFilterMatchHighlighting={true}
            enableColumnOrdering
            enableGlobalFilter={true}
        />
    )
}
