export const gifsAdapter = (gifsData) => {
  return gifsData.map(({ id, images, slug, title, user, username }) => ({
    id,
    url: images.fixed_height_small.url,
    width: images.fixed_height_small.width,
    height: images.fixed_height_small.height,
    slug,
    title,
    username: username || 'unknown user',
    userAvatar: user?.avatar_url,
  }))
}
