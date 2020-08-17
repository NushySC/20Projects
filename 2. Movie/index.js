const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat');
const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie');

// populateUI = () => {
// 	const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
// 	console.log(selectedSeats);
// };
// populateUI();
movieSelect.addEventListener('change', (e) => {
	ticketPrice = +e.target.value;
	updatedSelectedCount();
});

let ticketPrice = movieSelect.value;
setMovieData = (movieIndex, moviePrice) => {
	localStorage.setItem('selectedMovieIndex', movieIndex);
	localStorage.setItem('selectedMoviePrice', moviePrice);
};

updatedSelectedCount = () => {
	const selectedSeats = document.querySelectorAll('.seat.selected');
	// console.log(movieSelect.value);
	//console.log(selectedSeats);

	const seatsIndex = [...selectedSeats].map((seat) =>
		[...seats].indexOf(seat)
	);
	localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

	// console.log(seatsIndex);
	const selectedSeatsCount = selectedSeats.length - 1;
	count.innerText = `${selectedSeatsCount} seats`;
	total.innerText = `$${selectedSeatsCount * ticketPrice}`;
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
