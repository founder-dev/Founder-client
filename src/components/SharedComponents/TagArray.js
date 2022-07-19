import styled from 'styled-components';
import { color } from '../../lib/theme';
import {ChipWrapper, Chip} from '../SharedComponents/ChipPresenter';

function TagArray({tag}){

    const arraytag = tag.split(',');

    return(
        <>
        <ChipWrapper>
            <Chip># {arraytag[0]}</Chip>
            <Chip># {arraytag[1]}</Chip>
            <Chip># {arraytag[2]}</Chip>
        </ChipWrapper>
        </>  
    )
    } 
     


export default TagArray;
