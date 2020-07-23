import axios from 'axios'

const fetchUser = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/brunoBrian')

    return response.data;
  } catch(err) {
    console.log(err)
  }
}

export default {
  Query: {
    githubUser: async () => await fetchUser()
  }
};