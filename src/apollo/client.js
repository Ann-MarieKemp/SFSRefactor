import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

export const client = new ApolloClient({
  uri:
    "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json",
  fetch,
})
