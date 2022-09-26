import React from "react";
function Profile () {
    return (
        // redirect happening with the navigate function in firebase.jsx
        <div className='profilePage'>
            // Just trying out some inline styling
            <div className="profileText" style={{
                display: 'grid',
                position: 'centre',
                wordWrap: 'wrap',
                color: 'purple'}}>

                <h1>Thankyou for logging in! </h1>
                <h2>Specifications
                    - You need to deploy and host your DEV@Deakin app with Netlify or Heroku and submit the
                    link to your app. Please note that Heroku is not free anymore.
                    - You need to complete authentication feature by adding the signout feature to the login page.</h2>
                <br></br>
                <br></br>
                <h1> So now you know that... Go ahead and LOG OUT...</h1>
                <br></br>
                <br></br>
            </div>

            <button>HERE</button>
        </div>
    )
}
export default Profile;