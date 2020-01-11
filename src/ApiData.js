let url = "https://api.cdnjs.com/libraries?&fields=version,description,repository,author"


export const getCDN = () =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(results => resolve(results.results))
      .catch(err => reject(err));
  });
