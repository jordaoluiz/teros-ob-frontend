import { ExportToCsv } from 'export-to-csv';

const CSVExport = async (data) => {
    const options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        showTitle: true,
        title: '',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: false,
        headers: ['openIDDiscoveryDocument', 'organisationName', 'status']
    };
    // eslint-disable-next-line
    const csvExporter = new ExportToCsv(options);
    // eslint-disable-next-line
    await csvExporter.generateCsv(data);
}

export { CSVExport };
