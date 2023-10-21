document.addEventListener("DOMContentLoaded", function () {
  const repoName = "ZeeshanMukhtar1/OpenVerse";
  const token = "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";

  fetch(`https://api.github.com/repos/${repoName}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      const stars = data.stargazers_count;
      const watchers = data.subscribers_count;

      document.getElementById("stars").innerText = `${stars}`;
      document.getElementById("watchers").innerText = `${watchers}`;
    })
    .catch((error) => console.error("Error:", error));
});
