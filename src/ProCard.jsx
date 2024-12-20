import PropTypes from 'prop-types'
function ProCard(props){
    return(
        <div id={props.id} className='card'>
            <a href={props.href} target='_blank'>
            <img className="card-image" src={props.img_src} alt={props.alt} />
            </a>
            <h2 className="card-head">{props.name}</h2>
            <p className="card-para">{props.about}</p>
            {props.age && <p>Age: {props.age}</p>}
            {props.isPro !== undefined && <p>Pro: {props.isPro ? "Yes" : "No"}</p>}

        </div>
    )
}
ProCard.propTypes = {
    name: PropTypes.string,
    about: PropTypes.string,
    age: PropTypes.number,
    isPro: PropTypes.bool

}
ProCard.defaultProps = {
    id: "",
    name : "Guest",
    about : "Description",
    href:"#"
}
export default ProCard