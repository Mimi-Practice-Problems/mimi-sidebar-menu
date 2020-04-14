import React from 'react';

const Sessions = ({name, location, id}) => { // destructure props

    const getDetails = () => {
        // props.history.push(`/session/${id}`)
        alert(`name: ${name}`) // this sould go to session details. Will need to hook up withRouter(?)
    }

    return (
        <div style={{border: '1px solid red', width: '10em'}}>
            <h1>{name}</h1>
            <p>Location: {location}</p>
            <button onClick={getDetails}>go to session details</button>
        </div>
    )
}

export default Sessions;