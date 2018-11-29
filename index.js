$('.main-carousel').flickity({
  cellAlign: 'left',
  contain: true,
  wrapAround: true
})

$('#submit').click(function () {
  alert('thank you for your input.')
})

$('#emailbox').submit(function (event) {
  event.preventDefault()

  if ($('#enteremail').val() == '') {
    alert('Please enter a valid email address!')
  } else {
    alert('Thanks for your subscription!')
  }
})
