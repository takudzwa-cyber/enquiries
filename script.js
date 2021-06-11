const opensubmitButtons = document.querySelectorAll('[data-submit-target]')
const closesubmitButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

opensubmitButtons.forEach(button => {
  button.addEventListener('click', () => {
    const submit = document.querySelector(button.dataset.submitTarget)
    opensubmit(submit)
  })
})

overlay.addEventListener('click', () => {
  const submit = document.querySelectorAll('.submit.active')
  submit.forEach(submit => {
    closesubmit(submit)
  })
})

closesubmitButtons.forEach(button => {
  button.addEventListener('click', () => {
    const submit = button.closest('.submit')
    closesubmit(submit)
  })
})

function opensubmit(submit) {
  if (submit == null) return
  submit.classList.add('active')
  overlay.classList.add('active')
}

function closesubmit(submit) {
  if (submit == null) return
  submit.classList.remove('active')
  overlay.classList.remove('active')
}

