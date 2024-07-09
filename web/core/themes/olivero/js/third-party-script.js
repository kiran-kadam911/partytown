const jData = function init(options) {
  fetch('https://api.sampleapis.com/codingresources/codingResources')
    .then(response => response.json())
    .then(data => {
      console.log('Data fetched and processed:', data);
      // Update the DOM or perform other operations
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
jData;
