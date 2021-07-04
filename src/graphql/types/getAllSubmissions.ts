/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllSubmissions
// ====================================================

export interface getAllSubmissions_submissionMany_location {
  __typename: "SubmissionLocation";
  latitude: string | null;
  longitude: string | null;
}

export interface getAllSubmissions_submissionMany_staking {
  __typename: "SubmissionStaking";
  stake: number | null;
}

export interface getAllSubmissions_submissionMany {
  __typename: "Submission";
  name: string;
  gameID: string | null;
  userID: string | null;
  pictureHash: string | null;
  pictureLink: string | null;
  maskHash: string | null;
  maskImage: string | null;
  maskLink: string | null;
  description: string | null;
  location: getAllSubmissions_submissionMany_location | null;
  gpsAccuracy: string | null;
  poem: string | null;
  flagWinner: boolean | null;
  flagEntered: boolean | null;
  flagCertified: boolean | null;
  votes: number | null;
  staking: getAllSubmissions_submissionMany_staking | null;
  createdAt: any | null;
  updatedAt: any | null;
}

export interface getAllSubmissions {
  submissionMany: getAllSubmissions_submissionMany[];
}
