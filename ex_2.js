document.addEventListener("DOMContentLoaded", function() {
   
    var selectProduit = document.getElementById("produit");
    var nouveauProduitInput = document.getElementById("nouveauProduit");
    var ajouterProduitBtn = document.getElementById("ajouterProduit");
    var prixInput = document.getElementById("prix");
    var quantiteInput = document.getElementById("quantite");
    var ajouterTransactionBtn = document.getElementById("ajouterTransaction");
    var tableauTransactions = document.getElementById("tableauTransactions");
    var totalPrixSpan = document.getElementById("totalPrix");
    var nombreTransactionsSpan = document.getElementById("nombreTransactions");
    
    
    ajouterProduitBtn.addEventListener("click", function() {
        
        var nouveauProduit = nouveauProduitInput.value.trim();
        
        if (nouveauProduit !== "") {
            var option = document.createElement("option");
            option.text = nouveauProduit;
            selectProduit.add(option);
           
            nouveauProduitInput.value = "";
        }
    });
    
    
    ajouterTransactionBtn.addEventListener("click", function() {
       
        var produit = selectProduit.value;
        var prix = parseFloat(prixInput.value);
        var quantite = parseInt(quantiteInput.value);
        
        
        if (produit !== "" && !isNaN(prix) && !isNaN(quantite) && prix > 0 && quantite > 0) {
            
            var total = prix * quantite;
            
            
            var newRow = tableauTransactions.insertRow(-1);
            var cellProduit = newRow.insertCell(0);
            var cellPrix = newRow.insertCell(1);
            var cellQuantite = newRow.insertCell(2);
            var cellTotal = newRow.insertCell(3);
            
            
            cellProduit.textContent = produit;
            cellPrix.textContent = prix.toFixed(2); 
            cellQuantite.textContent = quantite;
            cellTotal.textContent = total.toFixed(2); 
            
            
            var totalActuel = parseFloat(totalPrixSpan.textContent);
            totalPrixSpan.textContent = (totalActuel + total).toFixed(2);
            
          
            var nombreActuel = parseInt(nombreTransactionsSpan.textContent);
            nombreTransactionsSpan.textContent = nombreActuel + 1;
            
           
            prixInput.value = "";
            quantiteInput.value = "";
        }
    });
});
