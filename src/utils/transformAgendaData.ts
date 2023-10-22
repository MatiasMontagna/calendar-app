// Original input data
const inputData = {
  endsAt: '2023-10-25T18:00:00.000Z',
  startsAt: '2023-10-25T17:00:00.000Z',
  // ... other properties that may or may not be present
};

// Function to transform the data
function transformData(inputData) {
  const outputData = {};

  // Format the date as 'YYYY-MM-DD'
  const date = inputData.startsAt.toISOString().split('T')[0];

  // Create an array with the desired object structure
  const itemsArray = [
    {
      name: 'item 1 - any js object',
      email: 'matias@montagna.cl',
      startsAt: '10:45', // Your desired time
      endsAt: '11:45', // Your desired time
    },
  ];

  // Set the transformed data in the output
  outputData[date] = itemsArray;

  return outputData;
}

// Transform the input data
const transformedData = transformData(inputData);

// Convert the result to a string
const resultString = JSON.stringify(transformedData, null, 2);

console.log(resultString);
