

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

module.exports = {
  dummy,
  totalLikes
}