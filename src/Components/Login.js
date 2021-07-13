import React from 'react'


const URL_AUTH = "https://accounts.spotify.com/authorize?client_id=38eab37d03d041079fc41c4e4111588d&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login = () => {
    return (
        <div>
<div className="p-5 justify-content-center m-auto">

    <a  href={URL_AUTH} className="btn btn-primary center">
      Login
    </a>

</div>
        </div>
    )
}

export default Login
