let url =
  "https://api.cdnjs.com/libraries?&fields=version,description,repository,author";

const fetchData = async () => {
  try {
    const res = await fetch(url);
    let { results } = await res.json();
    
    if(results.length === 0) {
      throw 'no results found'
    }
    const cdnArray = results.map((cdn, i) => {
      const repo = cdn.repository;

      return {
        id: i,
        name: cdn.name,
        latest: cdn.latest,
        version: cdn.version,
        desc: cdn.description || "no description",
        repo: repo ? repo.url : "",
        author: cdn.author || "no author",
        favorite: false,
      };
    });

    return cdnArray;
  } catch (error) {
    console.error(error)
    return []
  }
};

export { fetchData };
