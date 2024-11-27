fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector("#price-table tbody");
        data.forEach(item => {
            const row = document.createElement("tr");
            
            // Populate the row
            row.innerHTML = `
                <td>${item.toode}</td>
                <td>${item.tootja}</td>
                <td>${item.firma}</td>
                <td>${item.viimane_värskendus}</td>
                <td>${item.coop_hind}€</td>
                <td>${item.rimi_hind}€</td>
                <td>${item.grossi_hind}€</td>
                <td class="${item.soodsaim === 'Coop' ? 'lowest-price' : ''} 
                            ${item.soodsaim === 'Rimi' ? 'lowest-price' : ''} 
                            ${item.soodsaim === 'Grossi' ? 'lowest-price' : ''}">
                    ${item.soodsaim}
                </td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error("Error loading data:", error));
