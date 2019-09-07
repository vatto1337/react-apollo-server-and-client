import { gql } from 'apollo-boost';

export const findUser = (id) => gql`
{
  user(id: ${id}) {
    id
    username
    password
  }
}
`;