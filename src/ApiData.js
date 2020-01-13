let url = "https://api.cdnjs.com/libraries?&fields=version,description,repository,author"


export const getCDN = () =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(results => {
        
       const cdnArray = results.results.map((cdn, i) => {
         return {
           id: i,
           name: cdn.name,
           latest: cdn.latest,
           version: cdn.version,
           desc: cdn.description,
           repo: cdn.repository.url,
           author: cdn.author,
           favorite: false
         }
       })

       resolve(cdnArray)
      })
      .catch(err => reject(err));
  });
