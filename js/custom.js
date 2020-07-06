function ghori () {
	var somoy = new Date(),
	ghonta =somoy.getHours(),
	minit =somoy.getMinutes(),
	sec =somoy.getSeconds(),
	dinrat=' PM'

	if (ghonta <12) {
			dinrat = ' AM';
		}

		if (ghonta >12) {
			ghonta = ghonta -12;
		}

		if (ghonta <10) {
			ghonta= '0' +ghonta;
		}
		if (minit <10) {
			minit= '0' +minit;
		}
		if (sec <10) {
			sec= '0' +sec;
		}
		if (ghonta == 0) {
			ghonta = 12;
		}
document.getElementById('clock'). innerHTML = ghonta + ':' + minit + ':' + sec + dinrat;
	

}

setInterval(ghori , 1000)
