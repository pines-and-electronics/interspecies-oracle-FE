import gql from 'graphql-tag'

export const QUERY_ALL_Submissions = gql`
  query getAllSubmissions {
    submissionMany {
      name
      gameID
      userID
      pictureHash
      pictureLink
      maskHash
      maskImage
      maskLink
      description
      location {
        latitude
        longitude
      }
      gpsAccuracy
      poem
      flagWinner
      flagEntered
      flagCertified
      votes
      staking {
        stake
      }
      createdAt
      updatedAt
    }
  }
`

export const QUERY_SuBMISSIONS_SORTED_BY_VOTES = gql`
  query {
    submissionMany(filter: { flagEntered: true }, sort: VOTES_DESC) {
      name
      gameID
      userID
      pictureHash
      pictureLink
      maskHash
      maskImage
      maskLink
      description
      location {
        latitude
        longitude
      }
      gpsAccuracy
      poem
      flagWinner
      flagEntered
      flagCertified
      votes
      staking {
        stake
      }
      createdAt
      updatedAt
    }
  }
`
