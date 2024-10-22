//your code here
function calculateTotal() {
  // Get all price elements
  const priceElements = document.querySelectorAll('[data-ns-test=prices]');
  
  // Initialize total sum
  let total = 0;
  
  // Loop through the price elements and sum the values
  priceElements.forEach(priceElement => {
    total += parseFloat(priceElement.textContent); // Convert text to number and add to total
  });

  // Check if the total row already exists and remove it if so
  const existingTotalRow = document.querySelector('[data-ns-test="grandTotal"]');
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row and cell for the total price
  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2; // Span across two columns
  totalCell.textContent = `Total: $${total.toFixed(2)}`; // Show total price
  
  // Add the data-ns-test attribute for testing purposes
  totalCell.setAttribute('data-ns-test', 'grandTotal');
  
  // Append the cell to the row, and row to the table
  totalRow.appendChild(totalCell);
  document.getElementById('grocery-list').appendChild(totalRow);
}

// Call the function to calculate and display the total
calculateTotal();
