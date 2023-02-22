const input = document.querySelector('.screen_7__slider_length')
const lengthValElement = document.querySelector(
	'.screen_7__fireplace__settings__value'
)

input.oninput = function () {
	const tmpValue = (this.value / this.max) * 100
	input.style.background = `linear-gradient(to right, #ffcf7a ${tmpValue}%, #646464 ${tmpValue}%)`

	lengthValElement.textContent = `${this.value} м`
}
