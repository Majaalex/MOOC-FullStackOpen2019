const listHelper = require('../utils/list_helper')
test('Dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('Total likes', () => {
  const listWithOneBlog = [
    {
      title: '5 planning principles for agile development',
      author: 'Isaac Sacolick',
      url: 'https://www.infoworld.com/article/3438726/5-planning-principles-for-agile-development.html',
      likes: 16,
      id: '5d8751a3c38e831c1c62d7ef'
    }
  ]
  const listWithNoBlogs = []
  const listWithTwoBlogs = [
    {
      title: '5 planning principles for agile development',
      author: 'Isaac Sacolick',
      url: 'https://www.infoworld.com/article/3438726/5-planning-principles-for-agile-development.html',
      likes: 16,
      id: '5d8751a3c38e831c1c62d7ef'
    },
    {
      title: 'Javascript debugging [slightly] beyond console.log',
      author: 'Swizec Teller',
      url: 'https://swizec.com/blog/javascript-debugging-slightly-beyond-console-log/swizec/6633',
      likes: 18,
      id: '5d8751f9c38e831c1c62d7f0'
    }
  ]
  test('Of empty list is zero', () => {
    const result = listHelper.totalLikes(listWithNoBlogs)
    expect(result).toBe(0)
  })
  test('When list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(16)
  })
  test('Of a bigger list is calculated correctly', () => {
    const result = listHelper.totalLikes(listWithTwoBlogs)
    expect(result).toBe(34)
  })
})// Describe end