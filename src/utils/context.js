const { createContext } = require("react");

const userContext=createContext({
    "loggedInUser":'Deafault User'
})

export default userContext;