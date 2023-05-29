/**
 * 
 */
function tableAdd() {
	let id = document.getElementsByName('id');
	let password = document.getElementsByName('password');
	let address = document.getElementsByName('address');
	let phoneNo = document.getElementsByName('phoneNo');
	let addtr = document.querySelector('#addtr');
	let tr = document.createElement('tr');
	tr.classList.add("trlist");
	let td_id = document.createElement("td");
	let td_pw = document.createElement("td");
	let td_ad = document.createElement("td");
	let td_pn = document.createElement("td");
	td_id.innerText = id[0].value;
	tr.appendChild(td_id);
	td_pw.innerText = password[0].value;
	tr.appendChild(td_pw);
	td_ad.innerText = address[0].value;
	tr.appendChild(td_ad);
	td_pn.innerText = phoneNo[0].value;
	tr.appendChild(td_pn);
	addtr.appendChild(tr);
}
function removeLast() {
	let tr = document.querySelectorAll('.trlist');
	tr[tr.length-1].remove();
}
function removeAll() {
	let tr = document.querySelectorAll('.trlist');
	for(let i = 0; i < tr.length; i++){
		tr[i].remove();
	}
}