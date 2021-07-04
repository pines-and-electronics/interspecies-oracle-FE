/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllSortedSubmissions
// ====================================================

export interface getAllSortedSubmissions_submissionMany_location {
  __typename: "SubmissionLocation";
  latitude: string | null;
  longitude: string | null;
}

export interface getAllSortedSubmissions_submissionMany_staking {
  __typename: "SubmissionStaking";
  stake: number | null;
}

export interface getAllSortedSubmissions_submissionMany {
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
  location: getAllSortedSubmissions_submissionMany_location | null;
  gpsAccuracy: string | null;
  poem: string | null;
  flagWinner: boolean | null;
  flagEntered: boolean | null;
  flagCertified: boolean | null;
  votes: number | null;
  staking: getAllSortedSubmissions_submissionMany_staking | null;
  createdAt: any | null;
  updatedAt: any | null;
}

export interface getAllSortedSubmissions {
  submissionMany: getAllSortedSubmissions_submissionMany[];
}
