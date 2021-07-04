import gql from 'graphql-tag'

export const QUERY_ALL_Submissions = gql`
  query getAllSortedSubmissions {
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
