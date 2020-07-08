const btnRepos = document.getElementById('btnRepos');
btnRepos.addEventListener('click', getRepos);
async function getRepos() {
	const url = 'https://api.github.com/users/dane-git/repos';
	const response = await fetch(url);
	const result = await response.json();
	console.log(result);
}
