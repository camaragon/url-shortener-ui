const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .then(data => data.urls)
}

const postUrl = (newUrl) => {
  return fetch('http://localhost:3001/api/v1/urls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUrl)
    })
}

export {getUrls, postUrl};