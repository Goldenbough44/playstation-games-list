import './OutlinkList.css'

import PSLogo from 'assets/images/ps-logo.svg';
import PSStoreLogo from 'assets/images/ps-store-logo.webp';
import PSPlusLogo from 'assets/images/ps-plus-logo.webp';

import Section from '../Section/Section'
import Button from '../Button/Button'


function Outlink(props) {
    return (
        <div className="content-outlink-holder" onClick={() => window.open(props.link)}>
            <div className="content-outlink-image">{props.image}</div>
            <Button className="button">{props.text}</Button>
        </div>
    )
}


function OutlinkList() {
    return (
        <Section>
            <div id="content-outlinks-wrapper">
                <Outlink image={<img alt="playstation" src={PSLogo}/>} text="PS 홈페이지 바로가기" link="https://www.playstation.com/" />
                <Outlink image={<img alt="playstation store" src={PSStoreLogo}/>} text="PS Store 바로가기" link="https://store.playstation.com/" />
                <Outlink image={<img alt="playstation plus" src={PSPlusLogo}/>} text="PS Plus 바로가기" link="https://www.playstation.com/ps-plus/" />
            </div>
        </Section>
    )
}


export default OutlinkList;