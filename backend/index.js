const express = require('express');
const internships = require('./data.json');

const app = express();
const port = 3000;

app.get('/internships', (req, res) => {
  const { query, type, location } = req.query;
  console.log(query, type, location)
  let filteredInternships = internships;

  if (type) {
    filteredInternships = filteredInternships.filter(internship => internship.type === type);
  }
  console.log("after type")
  console.log(filteredInternships)

  if (location) {
    filteredInternships = filteredInternships.filter(internship => internship.location === location);
  }
  console.log("after location")
    console.log(filteredInternships)

  if (query) {
    filteredInternships = filteredInternships.map(internship => ({
      ...internship,
      similarity: calculateSimilarity(query, internship.description),
    }));

    filteredInternships = sortInternships(filteredInternships);
  }
  console.log("after query")
    console.log(filteredInternships)
  res.json(filteredInternships);
});

function calculateSimilarity(query, description) {
  const queryWords = query.toLowerCase().split(' ');
  const descriptionWords = description.toLowerCase().split(' ');

  const commonWords = queryWords.filter(word => descriptionWords.includes(word));

  const similarityScore = commonWords.length / queryWords.length;
  return similarityScore;
}

function sortInternships(internships) {
  return internships.sort((a, b) => b.similarity - a.similarity);
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
