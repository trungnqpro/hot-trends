
import { lazy } from '~/common/utils'
import { CancelToken } from 'axios'

export default {
  FETCH_FEED({ commit, state }, { feed, page, prefetch }) {
    // Don't priorotize already fetched feeds
    if (state.feeds[feed][page] && state.feeds[feed][page].length) {
      prefetch = true
    }
    if (!prefetch) {
      if (this.feedCancelSource) {
        this.feedCancelSource.cancel(
          'priorotize feed: ' + feed + ' page: ' + page
        )
      }
      this.feedCancelSource = CancelToken.source()
    }

    return lazy(
      (items) => {
        const ids = items.map(item => item.id)
        commit('SET_FEED', { feed, ids, page })
        commit('SET_ITEMS', { items })
      },
      () =>
        this.$axios.$get(`/${feed}/${page}.json`, {
          cancelToken: this.feedCancelSource && this.feedCancelSource.token
        }),
      (state.feeds[feed][page] || []).map(id => state.items[id])
    )
  },

  FETCH_ITEM({ commit, state }, { id }) {
    return lazy(
      item => commit('SET_ITEM', { item }),
      () => this.$axios.$get(`/item/${id}.json`),
      Object.assign({ id, loading: true, comments: [] }, state.items[id])
    )
  },

  FETCH_USER({ state, commit }, { id }) {
    return lazy(
      user => commit('SET_USER', { id, user }),
      () => this.$axios.$get(`/user/${id}.json`),
      Object.assign({ id, loading: true }, state.users[id])
    )
  }
}
