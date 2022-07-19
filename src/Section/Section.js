import './Section.css'

function Section (props) {
    return (
        <section className='section'>
            <div>
                {props.children}
            </div>
        </section>
    )
}


export default Section;