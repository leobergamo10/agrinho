// Adiciona uma classe ao elemento quando estiver visível na tela
document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var elements = document.querySelectorAll(".animate-on-scroll");
    
    elements.forEach(function(element) {
        var elementPosition = element.getBoundingClientRect().top;
        if (elementPosition < window.innerHeight - 100) {
            element.classList.add("animated");
        }
    });
});


// Função para mostrar conteúdo da aba selecionada
function openTab(tabId) {
    var tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(function(tab) {
        tab.style.display = "none";
    });

    var selectedTab = document.getElementById(tabId);
    selectedTab.style.display = "block";
}

// Adiciona evento de clique às abas
document.querySelectorAll(".tab-link").forEach(function(tabLink) {
    tabLink.addEventListener("click", function() {
        var tabId = this.getAttribute("data-tab");
        openTab(tabId);
    });
});


// Função para filtrar itens
function filterItems(category) {
    var items = document.querySelectorAll(".item");
    items.forEach(function(item) {
        if (item.dataset.category === category || category === "all") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Adiciona evento de clique aos botões de filtro
document.querySelectorAll(".filter-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        var category = this.dataset.category;
        filterItems(category);
    });
});


// Função para buscar termo digitado no campo de pesquisa
function searchItems() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var items = document.querySelectorAll(".item");
    items.forEach(function(item) {
        var itemText = item.textContent.toLowerCase();
        if (itemText.includes(searchTerm)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Adiciona evento de input ao campo de pesquisa
document.getElementById("searchInput").addEventListener("input", searchItems);
