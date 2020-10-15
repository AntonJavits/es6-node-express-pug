const fetch = require('node-fetch')

async function getDataAsync() {
  let responseUsers = await fetch('https://jsonplaceholder.typicode.com/users')
  let responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts')
  let jsonUsers = await responseUsers.json()
  let jsonPosts = await responsePosts.json()
  let usersAndPosts = { jsonUsers, jsonPosts }
  return usersAndPosts
}

module.exports = { getDataAsync }