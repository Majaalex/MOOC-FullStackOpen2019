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
  test('of empty list is zero', () => {
    const result = listHelper.totalLikes(listWithNoBlogs)
    expect(result).toBe(0)
  })
  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(16)
  })
  test('of a bigger list is calculated correctly', () => {
    const result = listHelper.totalLikes(listWithTwoBlogs)
    expect(result).toBe(34)
  })
})// Describe end

describe('Most likes', () => {
  const mostLikes = {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  }
  test('of a larger list of blogs', () => {
    const result = listHelper.mostLikes(fullBlogList)
    expect(result).toEqual(mostLikes)
  })
})//Most likes end

const fullBlogList = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0
  }
]