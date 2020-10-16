const { getDataAsync } = require('../services/fetchUsersAndPosts')

async function combineData() {
  let data = await getDataAsync()
  let postsByUsers = data.jsonUsers.map( user => ({    
    ...user, posts: data.jsonPosts.filter( post => {
      return post.userId == user.id
      })
    })
  )

  return postsByUsers
}

module.exports = { combineData }