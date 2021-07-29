export const state = () => ({
  countries: [],
  filteredCountries: [],
  region: ''
})

export const mutations = {
  updateCountriesData: (state, data) => {
    state.countries = data
    state.filteredCountries = data
  },
  selectRegion: (state, region) => {
    state.region = region
  }
}
export const actions = {
  // eslint-disable-next-line space-before-function-paren
  async getCountries({ state, commit }) {
    if (state.countries.length) { return }
    try {
      await fetch('https://restcountries.eu/rest/v2/all').then(response => response.json()).then((data) => {
        // console.log(data, 'data')
        commit('updateCountriesData', data)
      })
    } catch (err) {
      console.log(err)
    }
  }
}
