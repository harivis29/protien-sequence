import { GENE_SYMBOL } from './common/constants';
const config = {
    api: {
        host: 'http://rest.ensembl.org',
        path: '/'
    },
    endPoints: {
        transcript_list: `lookup/symbol/homsap/${GENE_SYMBOL}.json?;expand=`,
        transcript_detail:`sequence/id/`
    }
}
export default config;