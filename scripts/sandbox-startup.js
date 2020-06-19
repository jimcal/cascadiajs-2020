let data = require('@begin/data')

module.exports = async function populate() {
  try {
    let speakers = await data.set([
      {
        table: 'speakers',
        key: 'test',
        pixelated: 'cb56752477cae6405f85b131872c60d21b967c6a',
        name: 'Aha Aha',
        location: 'Starship Earth',
        title: 'How to make the best conference ever',
        reveal: '2020-06-18T14:22:00-07:00',
        topics: ['people', 'fun', 'laughter', 'learning', 'yellow-possum'],
        email: 'carter@fizbuz.com',
        pronouns: ['he', 'him'],
        twitter: '@crtr0',
        url: 'https://2020.cascadiajs.com/',
        company: 'Fizbuz',
        track: 'main',
        abstract: 'Do eet!'
      },
      {
        table: 'speakers',
        key: 'asp',
        pixelated: '5a7351cbc341ee86247c69489a37f7b1d2574d4e',
        name: 'Ahoo Hoo',
        location: 'The Pacific North West',
        title: 'Cheddar Goblin',
        reveal: '2020-06-19T13:30:00-07:00',
        topics: ['chainsaw', 'laughter', 'vodka'],
        email: 'nick@loggers.com',
        pronouns: ['he', 'him'],
        twitter: '@n',
        url: 'https://loggers.com',
        company: 'Loggers',
        track: 'main',
        abstract: 'Sometimes a chainsaw comes in handy.'
      },
      {
        table: 'speakers',
        key: '',
        pixelated: '79bd990d98b39128a4b6bd3bf03b777cfbd4128f',
        name: 'El Barbón',
        location: 'Iceland',
        title: 'Turing for fun and profit',
        reveal: '2020-06-20T13:30:00-07:00',
        topics: ['ai', 'dancing', 'machine-learning'],
        email: 'nathan@bluebook.com',
        pronouns: ['he', 'him'],
        twitter: '@barbon',
        url: 'https://ava-sessions.com',
        company: 'Blue Book',
        track: 'main',
        abstract: 'Isn\'t it strange, to create something that hates you?'
      }
    ])
    console.log('Added speakers: \n', speakers)
  } catch(err) {
    console.error('ERROR: ', err)
  }
}
