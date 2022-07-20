import styled from 'styled-components';

import RadioList from '../RadioList/RadioList';
import RadioButton from '../RadioList/RadioButton/RadioButton';
import SelectionButton from '../SelectionButton/SelectionButton';
import React, { useState } from 'react';


const Title = styled.div`
    font-weight: 700;
    font-size: 1.2rem;
    margin: 1.5rem 1rem 0.5rem 1rem;
`

const SelectionList = styled.div((props) => {
    return {
        margin: "0 1rem",
        lineHeight: "2.4rem"
    }
})


function ContentOption() {

    const [sortingOptionvalue,setSortingOptionValue] = useState("title_asc");

    const [searchOption, setSearchOption] = useState({
        ps4: false,
        ps5: false,
        pc: false,
        fps: false,
        tps: false,
        roguelike: false,
        racing: false,
        rhythm: false,
        metroidvania: false,
        soulslike: false,
        sport: false,
        anime: false,
        action: false,
        adventure: false,
        openworld: false,
        interactivemovie: false,
        puzzle: false,
        platformer: false,
        notreleased: false,
        psspecial: false,
        psdeluxe: false,
        exclusive: false,
        consoleexclusive: false,
    });

    const handleOnChange = (e, op) => {
        setSearchOption({
            ...searchOption,
            [op]: e.currentTarget?.checked ?? false
        })
    }

    return (
        <div>
            <Title>정렬</Title>
            <RadioList
                value={sortingOptionvalue}
                onChange={e => setSortingOptionValue(e.currentTarget.value)}
                name="sort"
            >
                <RadioButton value="title_asc">제목(오름차순)</RadioButton>
                <RadioButton value="title_desc">제목(내림차순)</RadioButton>
                <RadioButton value="release_asc">출시일(오름차순)</RadioButton>
                <RadioButton value="release_desc">출시일(내림차순)</RadioButton>
            </RadioList>
            <Title>기종</Title>
            <SelectionList>
                <SelectionButton
                    name="option"
                    value="ps4"
                    checked={searchOption.ps4}
                    onChange={e => handleOnChange(e, "ps4")}
                >PS4</SelectionButton>
                <SelectionButton
                    name="option"
                    value="ps5"
                    checked={searchOption.ps5}
                    onChange={e => handleOnChange(e, "ps5")}
                >PS5</SelectionButton>
                <SelectionButton
                    name="option"
                    value="pc"
                    checked={searchOption.pc}
                    onChange={e => handleOnChange(e, "pc")}
                >PC</SelectionButton>
            </SelectionList>
            <Title>장르</Title>
            <SelectionList>
                <SelectionButton
                    name="option"
                    value="fps"
                    checked={searchOption.fps}
                    onChange={e => handleOnChange(e, "fps")}
                >FPS</SelectionButton>
                <SelectionButton
                    name="option"
                    value="tps"
                    checked={searchOption.tps}
                    onChange={e => handleOnChange(e, "tps")}
                >TPS</SelectionButton>
                <SelectionButton
                    name="option"
                    value="roguelike"
                    checked={searchOption.roguelike}
                    onChange={e => handleOnChange(e, "roguelike")}
                >로그라이크</SelectionButton>
                <SelectionButton
                    name="option"
                    value="racing"
                    checked={searchOption.racing}
                    onChange={e => handleOnChange(e, "racing")}
                >레이싱</SelectionButton>
                <SelectionButton
                    name="option"
                    value="rhythm"
                    checked={searchOption.rhythm}
                    onChange={e => handleOnChange(e, "rhythm")}
                >리듬</SelectionButton>
                <SelectionButton
                    name="option"
                    value="metroidvania"
                    checked={searchOption.metroidvania}
                    onChange={e => handleOnChange(e, "metroidvania")}
                >메트로배니아</SelectionButton>
                <SelectionButton
                    name="option"
                    value="soulslike"
                    checked={searchOption.soulslike}
                    onChange={e => handleOnChange(e, "soulslike")}
                >소울라이크</SelectionButton>
                <SelectionButton
                    name="option"
                    value="sport"
                    checked={searchOption.sport}
                    onChange={e => handleOnChange(e, "sport")}
                >스포츠</SelectionButton>
                <SelectionButton
                    name="option"
                    value="anime"
                    checked={searchOption.anime}
                    onChange={e => handleOnChange(e, "anime")}
                >애니메이션</SelectionButton>
                <SelectionButton
                    name="option"
                    value="action"
                    checked={searchOption.action}
                    onChange={e => handleOnChange(e, "action")}
                >액션</SelectionButton>
                <SelectionButton
                    name="option"
                    value="adventure"
                    checked={searchOption.adventure}
                    onChange={e => handleOnChange(e, "adventure")}
                >어드벤처</SelectionButton>
                <SelectionButton
                    name="option"
                    value="openworld"
                    checked={searchOption.openworld}
                    onChange={e => handleOnChange(e, "openworld")}
                >오픈월드</SelectionButton>
                <SelectionButton
                    name="option"
                    value="interactivemovie"
                    checked={searchOption.interactivemovie}
                    onChange={e => handleOnChange(e, "interactivemovie")}
                >인터랙티브 무비</SelectionButton>
                <SelectionButton
                    name="option"
                    value="puzzle"
                    checked={searchOption.puzzle}
                    onChange={e => handleOnChange(e, "puzzle")}
                >퍼즐</SelectionButton>
                <SelectionButton
                    name="option"
                    value="platformer"
                    checked={searchOption.platformer}
                    onChange={e => handleOnChange(e, "platformer")}
                >플랫포머</SelectionButton>
            </SelectionList>
            <Title>기타 태그</Title>
            <SelectionList>
                <SelectionButton
                    name="option"
                    value="notreleased"
                    checked={searchOption.notreleased}
                    onChange={e => handleOnChange(e, "notreleased")}
                >발매 예정</SelectionButton>
                <SelectionButton
                    name="option"
                    value="psspecial"
                    checked={searchOption.psspecial}
                    onChange={e => handleOnChange(e, "psspecial")}
                >PS 스페셜</SelectionButton>
                <SelectionButton
                    name="option"
                    value="psdeluxe"
                    checked={searchOption.psdeluxe}
                    onChange={e => handleOnChange(e, "psdeluxe")}
                >PS 디럭스</SelectionButton>
                <SelectionButton
                    name="option"
                    value="exclusive"
                    checked={searchOption.exclusive}
                    onChange={e => handleOnChange(e, "exclusive")}
                >완전독점</SelectionButton>
                <SelectionButton
                    name="option"
                    value="consoleexclusive"
                    checked={searchOption.consoleexclusive}
                    onChange={e => handleOnChange(e, "consoleexclusive")}
                >콘솔독점</SelectionButton>
            </SelectionList>
            <Title>출시일</Title>
            <div style={{
                margin: "0 1rem",
                lineHeight: "2.4rem"
            }}>준비중</div>
        </div>
    )
}


export default ContentOption;