function calculateTotal() {
  // Get all price elements with the correct data-ns-test="price"
  const priceElements = document.querySelectorAll('[data-ns-test="price"]');
  
  // Initialize total sum
  let total = 0;
  
  // Loop through the price elements and sum the values
  priceElements.forEach(priceElement => {
    const price = parseFloat(priceElement.textContent); // Convert text to a floating-point number
    if (!isNaN(price)) {  // Ensure the value is a valid number before adding
      total += price;
    }
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

  // Validation: Check if calculated total matches the displayed grand total
  const displayedTotalElement = document.querySelector('[data-ns-test="grandTotal"]');
  if (displayedTotalElement) {
    const displayedTotal = parseFloat(displayedTotalElement.textContent.replace('Total: $', ''));
    
    if (!isNaN(displayedTotal) && total === displayedTotal) {
      console.log("The total price matches the grand total: $", total.toFixed(2));
    } else {
      console.log("Mismatch! Calculated total: $", total.toFixed(2), " but displayed total: $", displayedTotal.toFixed(2));
    }
  }
}

// Call the function to calculate and display the total
calculateTotal();
