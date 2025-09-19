const video = document.getElementById("video")

const isMobile = /Mobi|Android/i.test(navigator.userAgent)

const mediaQuery = matchMedia("(max-width: 600px)")

const urlBase = "https://www.youtube.com/embed/H4JE6XDR6UE"

const setVideo = () => {
  const smallView = mediaQuery.matches

  const autoplayAllow = !isMobile && !smallView

  const urlVideo = autoplayAllow
    ? `${urlBase}?autoplay=1&mute=1&rel=0`
    : `${urlBase}?rel=0`

  video.src = urlVideo
}

setVideo()

document.addEventListener("DOMContentLoaded", setVideo)