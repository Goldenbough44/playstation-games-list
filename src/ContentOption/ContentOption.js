import styled from 'styled-components';
import './ContentOption.css'


import RadioList from '../RadioList/RadioList';
import RadioButton from '../RadioList/RadioButton/RadioButton';
import { useEffect, useState } from 'react';


const Title = styled.div`
    font-weight: 700;
    font-size: 1.2rem;
    margin: 1.5rem 1rem 0.5rem 1rem;
`


function ContentOption() {

    const [value,setValue] = useState("title_asc");

    return (
        <div>
            <Title>정렬</Title>
            <RadioList
                value={value}
                onChange={e => setValue(e.currentTarget.value)}
                name="sort"
            >
                <RadioButton value="title_asc">제목(오름차순)</RadioButton>
                <RadioButton value="title_desc">제목(내림차순)</RadioButton>
                <RadioButton value="release_asc">출시일(오름차순)</RadioButton>
                <RadioButton value="release_desc">출시일(내림차순)</RadioButton>
            </RadioList>
            <Title>기종</Title>
            <Title>장르</Title>
            <Title>기타 태그</Title>
        </div>
    )
}


export default ContentOption;