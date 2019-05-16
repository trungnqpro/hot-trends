import { validFeeds } from '~/common/api'


export default () => {
  const state = {
    items: {
      /* [id: number]: Item */
    },
    users: {
      /* [id: string]: User */
    },
    feeds: {
      /* [page: number] : [ [id: number] ] */
    }
  }

  validFeeds.forEach((feed) => {
    state.feeds[feed] = {}
  })

  return state
}
