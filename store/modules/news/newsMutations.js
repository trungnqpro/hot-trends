import Vue from 'vue'

export default {
  SET_FEED: (state, { feed, ids, page }) => {
    Vue.set(state.feeds[feed], page, ids)
  },
  SET_ITEM: (state, { item }) => {
    if (item) {
      Vue.set(state.items, item.id, item)
    }
  },
  SET_ITEMS: (state, { items }) => {
    items.forEach((item) => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  },
  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user || false) /* false means user not found */
  }
}
