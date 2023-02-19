import { Box } from '@mui/system'
import React, { useEffect, useMemo, useState } from 'react'
import { Badge, Button, CardText } from 'reactstrap'
import CardNew from '../components/Card/index.js'
import Header from '../components/Navbar/index.js'
import TableNew from '../components/Table/index.js'
import API from '../configs/axiosConfig.js'
import { checkIfImageExists } from '../utils/utils.js'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { CSVExport } from '../utils/exportToCsv.js'

const Home = () => {
    const [banks, setBanks] = useState([])
    useEffect(() => {
        API.get('/api').then(({ data }) => {
            if (data) {
                setBanks(data)
            }
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    const handleExportData = async () => {
        await CSVExport(banks)
    };
    const columns = useMemo(
        () => [
            {
                header: 'Organization Name',
                accessorKey: 'organisationName',
                Cell: ({ row }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >

                        {
                            checkIfImageExists(row?.original?.logoUrl) && (
                                <img
                                    alt="Logo"
                                    height={20}
                                    src={row?.original?.logoUrl}
                                    loading="lazy"
                                    style={{ borderRadius: '5%' }}
                                />
                            )
                        }

                        <span><b>{row.original?.organisationName}</b></span>
                    </Box>
                ),


            },
            {
                header: 'Status',
                accessorKey: 'status',
                Cell: ({ row }) => (
                    <Badge color={row?.original?.status === 'Active' ? 'success' : 'danger'}>{row?.original?.status}</Badge>
                ),
            },
            {
                header: 'Open ID',
                accessorKey: 'openIDDiscoveryDocument',
                Cell: ({ row }) => (
                    <>
                        <Button color='primary' onClick={() => {
                            window.open(row?.original?.openIDDiscoveryDocument)
                        }}><OpenInNewIcon fontSize='11px' />  Abrir em nova guia</Button>
                        <div style={{ marginTop: '1%' }}>

                            <CopyToClipboard text={row?.original?.openIDDiscoveryDocument}>
                                <Button color='warning'>
                                    <ContentCopyIcon aria-placeholder='Copiar' fontSize='10' />Copiar URL

                                </Button>
                            </CopyToClipboard>
                        </div>
                    </>
                ),
            },
        ],
        [],
    );

    return (
        <>
            <Header />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                alignItems: 'center',
                marginTop: '3%'
            }}>
                <CardNew title={'Open Banking - Participants'}>
                    <CardText>

                        <b>Último update da base de dados</b>: {new Date(banks[0]?.createdAt).toLocaleDateString()} às {new Date(banks[0]?.createdAt).toLocaleTimeString()}
                        <div style={{
                            display: 'inline',
                            marginLeft: '10px'
                        }}>
                            <Button color='success' onClick={handleExportData}>
                                <ImportExportIcon fontSize='12' /> Exportar CSV
                            </Button>
                        </div>
                    </CardText>
                    <TableNew columns={columns} data={banks} />
                </CardNew>
            </div>
        </>
    )
}

export default Home