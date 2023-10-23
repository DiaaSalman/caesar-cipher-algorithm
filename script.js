const textTypeInput = document.querySelector('select')
let textTypeValue = 'cipher'
const typeLabel = document.querySelector('.type-label')
const keyLabel = document.querySelector('.key-label')
const textInput = document.querySelector('.text-input-field')
const keyInput = document.querySelector('.key-input-field')
const button = document.querySelector('button')
const textType = document.querySelector('.text-type')
const outputEl = document.querySelector('.output')
const result = document.querySelector('.text-output')

const ALPHAPETS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alphapets = 'abcdefghijklmnopqrstuvwxyz'

let output = ''

textTypeInput.onchange = () => {
  keyInput.value = ''
  textInput.value = ''
  outputEl.classList.remove('display')
  textTypeValue = textTypeInput.value

  if (textTypeValue === 'cipher') {
    renderContent(
      'Plain Text',
      'Enter the Original Text...',
      'Convert to Cipher Text',
      'Cipher Text',
    )
  } else {
    renderContent(
      'Cipher Text',
      'Enter the Encrypted Text...',
      'Convert to Plain Text',
      'Plain Text',
    )
  }
}

function renderContent(textTypeLabel, placeholder, buttonText, outputTextType) {
  typeLabel.innerHTML = textTypeLabel
  keyLabel.innerHTML = 'Key'
  textInput.placeholder = placeholder
  keyInput.placeholder = 'Enter The Key...'
  button.innerText = buttonText
  textType.innerHTML = outputTextType
}

function convertText() {
  if (!keyInput.value || !textInput.value) {
    return
  }

  let output = ''
  let chars = textInput.value.split('')

  chars.forEach((char) => {
    if (char === ' ') {
      output += ' '
    } else {
      let charCode
      let key = parseInt(keyInput.value)

      if (textTypeValue === 'cipher') {
        if (char === char.toUpperCase()) {
          charCode = (ALPHAPETS.indexOf(char) + key) % 26
          output += ALPHAPETS[charCode]
        } else {
          charCode = (alphapets.indexOf(char) + key) % 26
          output += alphapets[charCode]
        }
      } else {
        if (char === char.toUpperCase()) {
          charCode = (ALPHAPETS.indexOf(char) - key + 26) % 26
          output += ALPHAPETS[charCode]
        } else {
          charCode = (alphapets.indexOf(char) - key + 26) % 26
          output += alphapets[charCode]
        }
      }
    }
  })

  outputEl.classList.add('display')
  result.innerHTML = output
}

button.addEventListener('click', convertText)

// Initial Render
renderContent(
  'Plain Text',
  'Enter the Original Text...',
  'Convert to Cipher Text',
  'Cipher Text',
)
