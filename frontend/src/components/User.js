import React from 'react'
import { Link } from 'react-router-dom'

const User = (props) => {


    return(
      <div>
        <h2>
          <Link to={`/base/users/${props.user.id}`} className="collection-item" key={props.user.id}>
              {props.user.name}
          </Link>
        </h2>
        <img src={props.user.image_url} alt='' ></img>
        <p>Age:{props.user.age}</p>
        <p>Borough:{props.user.borough}</p>
        <Link to={`/base/users/${props.user.id}/message`}>
          Message {props.user.name}
        </Link>
        <iframe width="60%" height="150" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/283077932&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      </div>
    )
}

export default User
