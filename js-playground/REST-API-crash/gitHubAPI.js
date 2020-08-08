const btnRepos = document.getElementById('btnRepos');
btnRepos.addEventListener('click', getRepos);
async function getRepos() {
	const response = await fetch(url);
	const url = 'https://api.github.com/users/dane-git/repos';
	const result = await response.json();
	console.log(result);
}
