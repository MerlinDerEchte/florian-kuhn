import {gql} from  '@apollo/client';
export const GET_ARTOWRKS = gql`
  query {
     artworkCollection {
         items{
                description {
                    json
                }
                title
                creationDate
                picturesCollection {
                    items {
                        title
                        url(transform: {
                            quality: 30
                        })
                    }
                   
                }
            }
        }
    }

    `