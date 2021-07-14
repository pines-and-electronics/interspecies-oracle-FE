const graphqlURL = process.env.REACT_APP_GRAPHQL_URL || 'http://localhost:3000/graphql'
const fileUploadUrl = process.env.REACT_FILE_UPLOAD_URL || 'https://interspecies.ddns.net:3000/upload'

export { graphqlURL, fileUploadUrl }
