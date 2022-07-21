import { loadAbort } from '../utilities/load-abort.utility'

const BASE_URL = 'https://api.giphy.com/v1/stickers'
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY

export const getStickers = (searchTerm) => {
  const controller = loadAbort()
  const endpoint = searchTerm
    ? `${BASE_URL}/search?api_key=${API_KEY}&q=${searchTerm}`
    : `${BASE_URL}/trending?api_key=${API_KEY}&limit=20`
  return {
    call: fetch(endpoint, { signal: controller.signal }),
    controller,
  }
}
