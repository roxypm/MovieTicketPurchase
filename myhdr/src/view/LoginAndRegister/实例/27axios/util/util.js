		//根据键得到值，有则返回值，无则返回null
		function getCookieByKey(key) {
			let name = key + "=";
			let ca = document.cookie.split(';');
			for (let i = 0; i < ca.length; i++) {
				let c = ca[i].trim();
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return null;
		}
        export default getCookieByKey