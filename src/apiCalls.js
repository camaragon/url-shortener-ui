const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .then(data => data.urls)
      .catch(err => console.error(err))
}

const postUrl = (newUrl) => {
  return fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUrl)
    })
    .catch(err => console.error(err))
}

export {getUrls, postUrl};