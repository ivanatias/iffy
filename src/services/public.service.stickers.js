import { loadAbort } from '../utilities/load-abort.utility'

const BASE_URL = 'https://api.giphy.com/v1/stickers'
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY

export const getStickers = (searchTerm, page) => {
  const controller = loadAbort()
  const limit = 20
  const endpoint = searchTerm
    ? `${BASE_URL}/search?api_key=${API_KEY}&q=${searchTerm}&limit=${limit}&offset=${
        page * limit
      }`
    : `${BASE_URL}/trending?api_key=${API_KEY}&limit=${limit}&offset=${
        page * limit
      }`
  return {
    call: fetch(endpoint, { signal: controller.signal }),
    controller,
  }
}
