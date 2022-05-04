require("dotenv").config()


const apiConfig = {
    headers: { Authorization: `Bearer ${process.env.API_AUTH_TOKEN}`}
}

module.exports = apiConfig