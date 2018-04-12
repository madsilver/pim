module.exports = {

    dbUri: "mongodb://localhost:27019/pim",

    port: 3001,

    session: {
        cookieName: "session",
        secret: "si1v3r",
        duration: 20 * 60 * 1000,
        cookie: {
            maxAge: 20 * 60 * 1000, // duration of the cookie in milliseconds, defaults to duration above
            ephemeral: false, // when true, cookie expires when the browser closes
            httpOnly: true, // when true, cookie is not accessible from javascript
            secure: false // when true, cookie will only be sent over SSL. use key 'secureProxy' instead if you handle SSL not in your node process
        }
    }
}