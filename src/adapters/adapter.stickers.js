export const stickersAdapter = (stickersData) => {
  return stickersData.map(({ id, images, slug, title, user, username }) => ({
    id,
    url: images.fixed_height.url,
    width: images.fixed_height.width,
    height: images.fixed_height.height,
    slug,
    title,
    username: username || 'unknown user',
    userAvatar: user?.avatar_url,
  }))
}
