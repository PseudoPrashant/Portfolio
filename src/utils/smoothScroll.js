export const smoothScroll = (e, targetId) => {
  e.preventDefault()
  const targetElement = document.querySelector(targetId)
  if (targetElement) {
    const offset = 64 // height of navbar
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
} 