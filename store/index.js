/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
export const state = () => ({
  countries: [],
  filteredCountries: [],
  region: '',
  regionalBloc: '',
  selectedCountry: {},
})

export const mutations = {
  updateCountriesData: (state, data) => {
    state.countries = data
    state.filteredCountries = data
  },
  setRegion: (state, region) => {
    state.region = region
  },
  setRegionalBloc: (state, regionalBloc) => {
    state.regionalBloc = regionalBloc
  },
  filterCountries: (state, countries) => {
    state.filteredCountries = countries
  },
}
export const actions = {
  // eslint-disable-next-line space-before-function-paren
  async getCountries({ state, commit }) {
    if (state.countries.length) { return }
    try {
      await fetch('https://restcountries.eu/rest/v2/all').then((response) => response.json()).then((data) => {
        // console.log(data, 'data')
        commit('updateCountriesData', data)
      })
    } catch (err) {
      console.log(err)
    }
  },
  setRegion({ commit }, payload) {
    commit('setRegion', payload)
  },
  setRegionalBloc({ commit }, payload) {
    commit('setRegionalBloc', payload)
  },
}
const watchRegion = (store) => store.watch((state) => state.region,
  () => {
    const countries = store.state.countries.filter((country) => country.region === store.state.region)
    store.commit('filterCountries', countries)
  })
const watchRegionalBlocs = (store) => store.watch((state) => state.regionalBloc,
  () => {
    const countries = store.state.countries.filter((country) => country.regionalBlocs[0]?.acronym === store.state.regionBloc)
    store.commit('filterCountries', countries)
  })
export const plugins = [watchRegion, watchRegionalBlocs]
