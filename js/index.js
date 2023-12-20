/* 
   Author: NewGo Tecnologia
   E-mail: contato@newgo.com.br
*/

window.addEventListener('load', onWindowLoad, false)

function onWindowLoad() {
  configureClientLogos()
}

function configureClientLogos() {
  document.querySelectorAll('.client-logo').forEach(function eachClientLogo(clientLogo) {
    if(clientLogo.getAttribute('coloredsrc')) {
      const nonColoredLogo = clientLogo.getAttribute('src')
      clientLogo.addEventListener('mouseover', function mouseOverClientLogo() {
        clientLogo.setAttribute('src', clientLogo.getAttribute('coloredsrc'))
      })
      clientLogo.addEventListener('mouseout', function mouseOverClientLogo() {
        clientLogo.setAttribute('src', nonColoredLogo)
      })
    }
  });
}