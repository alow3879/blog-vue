function isPartiallyVisible (el) {
  const elementBoundary = el.getBoundingClientRect()
  const top = elementBoundary.top
  const bottom = elementBoundary.bottom
  const height = elementBoundary.height
  return ((top + height >= 0) && (height + window.innerHeight >= bottom))
}

function isFullyVisible (el) {
  const elementBoundary = el.getBoundingClientRect()
  const top = elementBoundary.top
  const bottom = elementBoundary.bottom
  return ((top >= 0) && (bottom <= window.innerHeight))
}

export { isPartiallyVisible, isFullyVisible }
