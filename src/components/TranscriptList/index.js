import React, { useSelector } from "react-redux";
import TranscriptItem from '../TranscriptItem';
import {
    ID_LABEL,
    PARENT_LABEL,
    ASSEMBLY_LABEL,
    BIOTYPE_LABEL,
    SPECIES_LABEL
} from '../../common/constants';
import './styles/index.css';

const TranscriptList = () => {
    const transcriptList = useSelector(state => state.transcripts.list);
    const filteredIds = useSelector(state => state.transcripts.filteredIds);
    const page = useSelector(state => state.navigation.page);

    const getTranscriptItem = (transcript) => {
        const { Parent, assembly_name, biotype, species, id } = transcript;
        return [
            {
                heading: ID_LABEL,
                value: id
            },
            {
                heading: PARENT_LABEL,
                value: Parent
            },
            {
                heading: SPECIES_LABEL,
                value: species
            },
            {
                heading: ASSEMBLY_LABEL,
                value: assembly_name
            },
            {
                heading: BIOTYPE_LABEL,
                value: biotype
            }
        ]
    }
    let validTranscriptList = [];
    if (filteredIds.length) {
        transcriptList.forEach(transcript => {
            if (filteredIds.indexOf(transcript.id) > -1) {
                validTranscriptList.push(getTranscriptItem(transcript))
                validTranscriptList = validTranscriptList.slice(0, page);
            }
        })
    }
    return (
        <div className="transcript-container">{validTranscriptList.length > 0
            && validTranscriptList.map((transcript =>
                <TranscriptItem key={transcript.id} transcriptItems={transcript} />
            ))}</div>
    )
};

export default TranscriptList;
