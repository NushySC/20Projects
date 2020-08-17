const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat');
const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie');

movieSelect.addEventListener('change', (e) => {
	ticketPrice = +e.target.value;
	updatedSelectedCount();
});

let ticketPrice = movieSelect.value;
updatedSelectedCount = () => {
	const selectedSeats = document.querySelectorAll('.seat.selected');
	console.log(movieSelect.value);
	// console.log(selectedSeats);
	const selectedSeatsCount = selectedSeats.length;
	count.innerText = selectedSeatsCount;
	total.innerText = `$ ${selectedSeatsCount * ticketPrice}`;
};

container.addEventListener('click', (e) => {
	if (
		e.target.classList.contains('seat') &&
		!e.target.classList.contains('occupied')
	) {
		// console.log(e.target);
		e.target.classList.toggle('selected');
	}

	updatedSelectedCount();
});
