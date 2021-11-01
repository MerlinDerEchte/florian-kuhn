import {gql} from  '@apollo/client';
export const GET_VITA= gql`
    query
    {
        vitaModel(id : "5yglcnQHMvW2FBOfnAPum4" ){
            vitatext {
                json
            }
            portrait {
                url 
            }
        }

    }

`