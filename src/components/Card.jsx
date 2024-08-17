import PropTypes from "prop-types"
import SettingsIcon from "../assets/icons/settings.svg"
function Card(props) {

    console.log(props);

    return (

        <div className="card">
            <div className="settings-cont">
                <img className="settings" src={SettingsIcon} alt="" />
            </div>

            {
                props.children
            }
        </div>
    )
}

export default Card


Card.propTypes = {

    title: PropTypes.string,
    desc: PropTypes.string
}