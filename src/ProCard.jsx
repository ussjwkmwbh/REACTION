import PropTypes from 'prop-types'
function ProCard(props){
    return(
        <div className="card">
            <img className="card-image" src={props.img_ssrc} alt={props.alt} />
            <h2 className="card-head">{props.name}</h2>
            <p className="card-para">{props.about}</p>
            {props.age && <p>Age: {props.age}</p>}
            {props.isPro !== undefined && <p>Pro: {props.isPro ? "Yes" : "No"}</p>}

        </div>
    )
}
ProCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isPro: PropTypes.bool

}
ProCard.defaltProps = {
    name : "Guest",
    about : "Description"
}
export default ProCard