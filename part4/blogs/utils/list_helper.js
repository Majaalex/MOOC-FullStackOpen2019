const lodash = require('lodash')

const dummy = (blogs) => {
  // ...
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 0) return 0
  if (blogs.length === 1){
    return blogs[0].likes
  }
  if (blogs.length > 1){
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const mappedLikes = blogs.map(b => b.likes)
    const totalLikes = mappedLikes.reduce(reducer)
    return totalLikes
  }
}

const favoriteBlog = (blogs) => {
  let index = 0
  let mostLikes = blogs[0].likes
  for (let i = 1; i < blogs.length; i++){
    if(blogs[i].likes >= mostLikes){
      mostLikes = blogs[i].likes
      index = i
    }
  }
  return blogs[index]
}

const mostBlogs = (blogs) => {
  const groupedByAuthor = lodash.groupBy(blogs, (blog) => blog.author)
  console.log('Grouped by author', groupedByAuthor.keys
  /*const authorsAndBlogCount = groupedByAuthor.map(a => {
    return (
      {
        key: a.key
      }
    )
  })*/
  return (0)
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}