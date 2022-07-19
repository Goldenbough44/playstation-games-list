import './OutlinkList.css'

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
                <Outlink image={<img alt="playstation" src="img/ps-logo.svg"/>} text="PS 홈페이지 바로가기" link="https://www.playstation.com/" />
                <Outlink image={<img alt="playstation store" src="img/ps-store-logo.webp"/>} text="PS Store 바로가기" link="https://store.playstation.com/" />
                <Outlink image={<img alt="playstation plus" src="img/ps-plus-logo.webp"/>} text="PS Plus 바로가기" link="https://www.playstation.com/ps-plus/" />
            </div>
        </Section>
    )
}


export default OutlinkList;