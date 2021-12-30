import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getTranscripts } from '../../common/api';
import appConfig from "../../app.config";
import TranscriptList from "../../components/TranscriptList";
import Navigation from '../../components/Navigation';
import { Get } from "../../common/utilities/api-wrapper";
import { addTranscripts, addFilteredTranscriptIds } from '../../actions';
import { GENE_SYMBOL, POSITION_IN_SEQUENCE, AMINO_ACID_LETTER, LOADING_LABEL } from '../../common/constants';

const TranscriptListContainer = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { api: { host, path }, endPoints: { transcript_list, transcript_detail } } = appConfig;
    const page = useSelector(state => state.navigation.page);

    const filterTranscriptByAminoLetterPos = (transcriptDetailsList) => {
        let matchedIds = [];
        transcriptDetailsList.forEach(transcript => {
            if ((transcript.seq[POSITION_IN_SEQUENCE] === AMINO_ACID_LETTER) ||
                (transcript.seq[POSITION_IN_SEQUENCE - 10] === AMINO_ACID_LETTER)) {
                matchedIds.push(transcript.geneId)
            }
        });
        dispatch(addFilteredTranscriptIds(matchedIds));
        setLoading(false);
    }

    const getTranscriptAminoSequence = async (transcripts) => {
        const transcriptDetails = await Promise.all(
            transcripts.map(async ({ id }) => {
                const url = `${host}${path}${transcript_detail}${id}.json`
                const geneSequence = await Get(url);
                const { id: geneId, seq } = await geneSequence.json();
                return { geneId, seq }
            })
        );
        filterTranscriptByAminoLetterPos(transcriptDetails);
    }

    const getTranscriptsList = async () => {
        const url = `${host}${path}${transcript_list}${page}`;
        const geneInfo = await getTranscripts(url);
        const geneInfoObj = await geneInfo.json();
        const { Transcript } = geneInfoObj;
        dispatch(addTranscripts(Transcript));
        getTranscriptAminoSequence(Transcript)
    }
    useEffect(() => {
        getTranscriptsList();
    }, []);
    return (<div className="transcript-list">
        <h1>{`Protien Sequence: Symbol - ${GENE_SYMBOL}, Position - ${POSITION_IN_SEQUENCE} and 10th left, Amino acid letter - ${AMINO_ACID_LETTER}`}</h1>
        {loading ? (<div>{LOADING_LABEL}</div>) :
            (<><TranscriptList />
                <Navigation />
            </>)}
    </div>)
}

export default TranscriptListContainer;