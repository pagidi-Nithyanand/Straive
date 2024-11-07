// json2html.js
export default function json2html(data) {
    // Start the table with the custom data-user attribute
    let html = '<table data-user="pagidinithyanand@gmail.com">';

    // Create the table header dynamically based on the keys of the first object in the array
    html += '<thead><tr>';
    // Adding keys dynamically to header row
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';

    // Create the table body
    html += '<tbody>';
    data.forEach(row => {
        html += '<tr>';
        headers.forEach(header => {
            // For each row, insert the corresponding data or an empty string if the key does not exist
            html += `<td>${row[header] || ''}</td>`;
        });
        html += '</tr>';
    });
    html += '</tbody>';

    // Close the table tag
    html += '</table>';

    // Return the HTML string
    return html;
}
