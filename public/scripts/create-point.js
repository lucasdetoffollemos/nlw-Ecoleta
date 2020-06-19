

//funçao que faz os options do select dos estados ficar de forma dinâmica e pega a Api do ibge  
function populateUfs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res =>res.json())
    .then(states =>{

        for(const state of states){
            ufSelect.innerHTML += `<option value = "${state.id}">${state.nome }</option>`
        }
        
    })
}

populateUfs()

//funçao que faz os options do select das cidades ficar de forma dinâmica e pega a Api do ibge 
function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML += "`<optionSelecione a cidade></option>`" 
    citySelect.disabled = true
    fetch(url)
    .then(res=>res.json())
    .then(cities =>{  
        for(const city of cities){
            citySelect.innerHTML += `<option value = "${city.nome}">${city.nome}</option>`
        }  
        
        citySelect.disabled = false
    })
}


document.querySelector("select[name=uf]").addEventListener("change", getCities)

//Itens de coleta
//pegar todos os li's

const itensToCollect = document.querySelectorAll(".items-grid li")

for(let  item of itensToCollect){
    item.addEventListener("click", handleSelectedItem)
}


const collectedItems = document.querySelector("input[name=items]")



let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target

    //adicionar ou remover classe
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // console.log('Item id',itemId)

    //verificar se existem items selecionados, se sim
    //pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex(function(item) {
        const itemFound = item == itemId /// isso será true ou false
        return itemFound
    })

    
    //Se já estiver selecionado, 

    if(alreadySelected >= 0){
        //retira da seleção 
        const filteredItems = selectedItems.filter(item =>{
            const itemIsDifferent = item!= itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    }

    //Se não estiver selecionado, adcionar a seleção

    else{
        selectedItems.push(itemId)
    }

    // console.log('Selected', selectedItems)
    
    

    //Atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems
 
}
