/**
 * 
 */
function enroll() {
	let tbody = document.querySelector(".tbody");

	let title = document.getElementsByName("title");
	let name = document.getElementsByName("name");
	let pass = document.getElementsByName("pass");
	let content = document.getElementsByName("content");
	let tr = document.createElement("tr");
	tr.classList.add("trlist");
	let today = new Date();
	let trcnt = document.querySelectorAll(".trlist");

	let td = document.createElement("td");
	let td_title = document.createElement("td");
	let td_name = document.createElement("td");
	let td_date = document.createElement("td");
	let td_cnt = document.createElement("td");

	td.innerText = trcnt.length + 1;
	tr.appendChild(td);
	td_title.innerText = title[0].value;
	tr.appendChild(td_title);
	td_name.innerText = name[0].value;
	tr.appendChild(td_name);
	td_date.innerText = today;
	tr.appendChild(td_date);
	td_cnt.innerText = 108;
	tr.appendChild(td_cnt);


	tbody.appendChild(tr);
}
function reset() {

}
function canceld() {
	let title = document.getElementsByName("title");
	let name = document.getElementsByName("name");
	let pass = document.getElementsByName("pass");
	let content = document.getElementsByName("content");

	if ((title[0].value == null && name[0].value == null &&
		pass[0].value == null && content[0].value == null)) {
		let tr = document.querySelectorAll('.trlist');
		for (let i = 0; i < tr.length; i++) {
			tr[i].remove();
		}
	}
	else if (!(title[0].value == null || name[0].value == null ||
		pass[0].value == null || content[0].value == null)) {
		title[0].value = "";
		name[0].value = "";
		pass[0].value = "";
		content[0].value = "";
	}
}