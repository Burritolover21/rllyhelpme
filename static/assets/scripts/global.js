//Loads custom icons

document.addEventListener('DOMContentLoaded', function (event) {
  const icon = document.getElementById('tab-favicon')
  const name = document.getElementById('tab-title')
  var selectedValue = localStorage.getItem('selectedOption')
  if (selectedValue === 'Google') {
    icon.setAttribute('href', '/assets/media/favicon/google.png')
    name.textContent = 'Google'
    localStorage.setItem('name', 'Google')
    localStorage.setItem('icon', '/assets/media/favicon/google.png')
  } else if (selectedValue === 'Drive') {
    icon.setAttribute('href', '/assets/media/favicon/drive.png')
    name.textContent = 'My Drive - Google Drive'
    localStorage.setItem('name', 'My Drive - Google Drive')
    localStorage.setItem('icon', '/assets/media/favicon/drive.png')
  } else if (selectedValue === 'Classroom') {
    icon.setAttribute('href', '/assets/media/favicon/classroom.png')
    name.textContent = 'Home'
    localStorage.setItem('name', 'Home')
    localStorage.setItem('icon', '/assets/media/favicon/classroom.png')
  } else if (selectedValue === 'Schoology') {
    icon.setAttribute('href', '/assets/media/favicon/schoology.png')
    name.textContent = 'Home | Schoology'
    localStorage.setItem('name', 'Home | Schoology')
    localStorage.setItem('icon', '/assets/media/favicon/schoology.png')
  } else if (selectedValue === 'Gmail') {
    icon.setAttribute('href', '/assets/media/favicon/gmail.png')
    name.textContent = 'Gmail'
    localStorage.setItem('name', 'Gmail')
    localStorage.setItem('icon', '/assets/media/favicon/gmail.png')
  } else if (selectedValue === 'Clever') {
    icon.setAttribute('href', '/assets/media/favicon/clever.png')
    name.textContent = 'Clever | Portal'
    localStorage.setItem('name', 'Clever | Portal')
    localStorage.setItem('icon', '/assets/media/favicon/clever.png')
  } else if (selectedValue === 'Khan') {
    icon.setAttribute('href', '/assets/media/favicon/khan.png')
    name.textContent = 'Dashboard | Khan Academy'
    localStorage.setItem('name', 'Dashboard | Khan Academy')
    localStorage.setItem('icon', '/assets/media/favicon/khan.png')
  } else if (selectedValue === 'Campus') {
    icon.setAttribute('href', '/assets/media/favicon/campus.png')
    name.textContent = 'Infinite Campus'
    localStorage.setItem('name', 'Infinite Campus')
    localStorage.setItem('icon', '/assets/media/favicon/campus.png')
  } else if (selectedValue === 'IXL') {
    icon.setAttribute('href', '/assets/media/favicon/ixl.png')
    name.textContent = 'IXL | Dashboard'
    localStorage.setItem('name', 'IXL | Dashboard')
    localStorage.setItem('icon', '/assets/media/favicon/ixl.png')
  } else if (selectedValue === 'Canvas') {
    icon.setAttribute('href', '/assets/media/favicon/canvas.png')
    name.textContent = 'Dashboard'
    localStorage.setItem('name', 'Dashboard')
    localStorage.setItem('icon', '/assets/media/favicon/canvas.png')
  } else if (selectedValue === 'LinkIt') {
    icon.setAttribute('href', '/assets/media/favicon/linkit.ico')
    name.textContent = 'Test Taker'
    localStorage.setItem('name', 'Test Taker')
    localStorage.setItem('icon', '/assets/media/favicon/linkit.ico')
  } else if (selectedValue === 'Edpuzzle') {
    icon.setAttribute('href', '/assets/media/favicon/edpuzzle.png')
    name.textContent = 'Edpuzzle'
    localStorage.setItem('name', 'Edpuzzle')
    localStorage.setItem('icon', '/assets/media/favicon/edpuzzle.png')
  }

  var themeid = localStorage.getItem('theme')
  //Loads theme
  themeEle = document.createElement('link')
  themeEle.rel = 'stylesheet'
  if (themeid == 'b') {
    themeEle.href = '/assets/styles/themes/bannana.css'
  }
  if (themeid == 'bg') {
    themeEle.href = '/assets/styles/themes/blue-green.css'
  }
  if (themeid == 'cr') {
    themeEle.href = '/assets/styles/themes/cherryRed.css'
  }
  if (themeid == 'd') {
    themeEle.href = '/assets/styles/themes/dark.css'
  }
  if (themeid == 'fg') {
    themeEle.href = '/assets/styles/themes/forestGreen.css'
  }
  if (themeid == 'light') {
    themeEle.href = '/assets/styles/themes/solid/light.css'
  }
  if (themeid == 'm') {
    themeEle.href = '/assets/styles/themes/milkshake.css'
  }
  if (themeid == 'nb') {
    themeEle.href = '/assets/styles/themes/nightBlue.css'
  }
  if (themeid == 'rb') {
    themeEle.href = '/assets/styles/themes/red-black.css'
  }
  if (themeid == 'midnight') {
    themeEle.href = '/assets/styles/themes/solid/midnight.css'
  }
  if (themeid == 'black-red') {
    themeEle.href = '/assets/styles/themes/gradient/black-red.css'
  }
  if (themeid == 'black-blue') {
    themeEle.href = '/assets/styles/themes/gradient/black-blue.css'
  }
  if (themeid == 'black-green') {
    themeEle.href = '/assets/styles/themes/gradient/black-green.css'
  }
  if (themeid == 'red') {
    themeEle.href = '/assets/styles/themes/gradient/red.css'
  }
  if (themeid == 'purple') {
    themeEle.href = '/assets/styles/themes/gradient/purple.css'
  }
  if (themeid == 'black-orange') {
    themeEle.href = '/assets/styles/themes/gradient/black-orange.css'
  }
  if (themeid == 'ocean-blue') {
    themeEle.href = '/assets/styles/themes/solid/ocean-blue.css'
  }
  if (themeid == 'black-purple') {
    themeEle.href = '/assets/styles/themes/gradient/black-purple.css'
  }
  if (themeid == 'black-coral') {
    themeEle.href = '/assets/styles/themes/gradient/black-coral.css'
  }
  if (themeid == 'black-ruby') {
    themeEle.href = '/assets/styles/themes/gradient/black-ruby.css'
  }
  if (themeid == 'black-yellow') {
    themeEle.href = '/assets/styles/themes/gradient/black-yellow.css'
  }
  if (themeid == 'black-pink') {
    themeEle.href = '/assets/styles/themes/gradient/black-pink.css'
  }
  if (themeid == 'black-white') {
    themeEle.href = '/assets/styles/themes/gradient/black-white.css'
  }
  if (themeid == 'dark-purple') {
    themeEle.href = '/assets/styles/themes/gradient/dark-purple.css'
  }
  if (themeid == 'sunset') {
    themeEle.href = '/assets/styles/themes/gradient/sunset.css'
  }
  if (themeid == 'indigo') {
    themeEle.href = '/assets/styles/themes/gradient/indigo.css'
  }
  if (themeid == 'fire-ice') {
    themeEle.href = '/assets/styles/themes/gradient/fire-ice.css'
  }
  if (themeid == 'purple-blue') {
    themeEle.href = '/assets/styles/themes/gradient/purple-blue.css'
  }
  if (themeid == 'catppuccinMocha') {
    themeEle.href = '/assets/styles/themes/catppuccin/mocha.css?v=1'
  }
  if (themeid == 'catppuccinMacchiato') {
    themeEle.href = '/assets/styles/themes/catppuccin/macchiato.css?v=1'
  }
  if (themeid == 'catppuccinFrappe') {
    themeEle.href = '/assets/styles/themes/catppuccin/frappe.css?v=1'
  }
  if (themeid == 'catppuccinLatte') {
    themeEle.href = '/assets/styles/themes/catppuccin/latte.css?v=1'
  }
  document.body.appendChild(themeEle)
})

document.addEventListener('DOMContentLoaded', function () {
  var saveButton = document.getElementById('save-button')
  saveButton.addEventListener('click', function () {
    var backgroundInput = document.getElementById('background-input')
    var imageURL = backgroundInput.value

    if (imageURL !== '') {
      localStorage.setItem('backgroundImage', imageURL)
      document.body.style.backgroundImage = "url('" + imageURL + "')"
      backgroundInput.value = ''
    } else {
    }
  })

  var resetButton = document.getElementById('reset-button')
  resetButton.addEventListener('click', function () {
    localStorage.removeItem('backgroundImage')
    document.body.style.backgroundImage = "url('default-background.jpg')"
  })

  var savedBackgroundImage = localStorage.getItem('backgroundImage')
  if (savedBackgroundImage) {
    document.body.style.backgroundImage = "url('" + savedBackgroundImage + "')"
  }
})

document.addEventListener('DOMContentLoaded', function () {
  var savedBackgroundImage = localStorage.getItem('backgroundImage')
  if (savedBackgroundImage) {
    document.body.style.backgroundImage = "url('" + savedBackgroundImage + "')"
  }
})

document.addEventListener('DOMContentLoaded', function () {
  var eventKey = localStorage.getItem('eventKey') || '`'
  var panicLink = localStorage.getItem('panicLink') || 'https://classroom.google.com/'

  document.getElementById('eventKeyInput').value = eventKey
  document.getElementById('linkInput').value = panicLink

  const selectedOption = localStorage.getItem('selectedOption')
  if (selectedOption) {
    updateHeadSection(selectedOption)
  }
})

function saveEventKey() {
  var eventKey = document.getElementById('eventKeyInput').value
  var panicLink = document.getElementById('linkInput').value

  localStorage.setItem('eventKey', eventKey)
  localStorage.setItem('panicLink', panicLink)

  document.getElementById('eventKeyInput').value = ''
  document.getElementById('linkInput').value = ''
}
