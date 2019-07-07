const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce(function (prev, cur) {
    return prev + cur.likes;
  }, 0);
}

const favoriteBlog = (blogs) => {
  let maxLikes = 0;
  let favoriteAuthor = "";
  let favoriteTitle = "";
  blogs.map(function (blog) {
    if (blog.likes > maxLikes) {
      maxLikes = blog.likes
      favoriteAuthor = blog.author
      favoriteTitle = blog.title
    }
  })
  return {
    "author": favoriteAuthor,
    "likes": maxLikes,
    "title": favoriteTitle
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}

