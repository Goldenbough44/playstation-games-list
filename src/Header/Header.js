import './Header.css'


function Header() {
    return (
        <header>
            <div id="header-title-wrapper">
                <img id="header-title-background" alt="PlayStation" src="img/ps-banner-desktop.webp"/>
                <div id="header-title-content-wrapper">
                    <div id="header-title-content">
                        <div id="header-title">PlayStation 게임 리스트</div>
                        <div className="header-description">쉽고 깔끔한 PlayStation 게임 리스트</div>
                    </div>
                </div>
                <div className="header-warning">이 웹사이트는 PlayStation 공식 웹사이트가 아닙니다.</div>
            </div>
        </header>
    )
}


export default Header;