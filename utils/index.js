export const navItems = [
  {
    name: 'Movies',
    to: '/movies',
  },
  {
    name: 'TV Shows',
    to: '/tv-shows',
  },
  // {
  //   name: 'Top IMDB',
  //   to: '/imdb',
  // },
]

export const sortOptions = {
  title: 'Sort Results By',
  options: [
    'Popularity Descending',
    'Popularity Ascending',
    'Rating Descending',
    'Rating Aescending',
    'Release Date Descending',
    'Release Date Aescending',
    'Title A-Z',
    'Title Z-A',
  ],
}

export const filterOptions = [
  {
    title: 'Release Dates',
  },
  {
    title: 'Genres',
    options: [
      'Action',
      'Adventure',
      'Animation',
      'Comedy',
      'Crime',
      'Documentary',
      'Drama',
      'Family',
      'Fantasy',
      'History',
      'Horror',
      'Music',
      'Mystery',
      'Romance',
      'Science Fiction',
      'TV Movie',
      'Thriller',
      'War',
      'Western',
    ],
  },
  {
    title: 'Language',
    options: [
      'English',
      'French',
      'Germany',
      'Spanish',
      'Japanese',
      'Portuguese',
      'Korean',
    ],
  },
]

const testMonth = (date) => {
  let correctDate
  if (date.getMonth() + 1 < 10) {
    correctDate = '0' + (date.getMonth() + 1)
  } else {
    correctDate = date.getDate() + 1
  }
  return correctDate
}

const testDays = (date) => {
  let correctDate
  if (date.getDate() < 10) {
    correctDate = '0' + date.getDate()
  } else {
    correctDate = date.getDate()
  }
  return correctDate
}

export const todayDay =
  new Date().getFullYear() +
  '-' +
  testMonth(new Date()) +
  '-' +
  testDays(new Date())

export const dataAfterOneMounth =
  new Date().getFullYear() +
  '-' +
  (testMonth(new Date()) + 1) +
  '-' +
  testDays(new Date())

export const dataAfterSevenMounth =
  new Date().getFullYear() +
  '-' +
  (testMonth(new Date()) + 7) +
  '-' +
  testDays(new Date())

export const trendingMovieFetch = `${process.env.API_URL}trending/movie/day?api_key=${process.env.API_KEY}`

export const trendingTvFetch = `${process.env.API_URL}trending/tv/day?api_key=${process.env.API_KEY}`

// const latestMoviesFetch = `${process.env.API_URL}discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&page=1&primary_release_date.gte=2022-04-24&primary_release_date.lte=2022-05-24`

export const latestMoviesFetch =
  'https://api.themoviedb.org/3/discover/movie?api_key=f8824d7407d43096199ef173fdc47d47&language=en-US&sort_by=popularity.desc&page=1'

export const lastestTvFetch =
  'https://api.themoviedb.org/3/discover/tv?api_key=f8824d7407d43096199ef173fdc47d47&language=en-US&sort_by=popularity.desc'

// export const comingMoviesFetch =
//   'https://api.themoviedb.org/3/discover/movie?api_key=f8824d7407d43096199ef173fdc47d47&language=en-US&sort_by=popularity.desc&page=1'

export const comingMoviesFetch =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=f8824d7407d43096199ef173fdc47d47&language=en-US&page=1'

export const comingTvFetch =
  'https://api.themoviedb.org/3/tv/on_the_air?api_key=f8824d7407d43096199ef173fdc47d47&language=en-US&page=1'

// export const comingTvFetch =
//   'https://api.themoviedb.org/3/discover/tv?api_key=f8824d7407d43096199ef173fdc47d47&language=en-US&sort_by=popularity.desc&page=1'
