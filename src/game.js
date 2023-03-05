let resources = {
  gold: 0,
  undead: 0,
}

let upgrades = {
  click: {
    name: 'Undead Hand',
    level: 0,
    cost: 10,
    increase: 1,
  },
  undead: {
    name: 'Zombie Minion',
    level: 0,
    cost: 50,
    increase: 1,
  },
}

function buyClick() {
  if (resources.gold >= upgrades.click.cost) {
    resources.gold -= upgrades.click.cost
    upgrades.click.level++
    resources.undead += upgrades.click.increase
    upgrades.click.cost = Math.floor(upgrades.click.cost * 1.2)
    updateUpgrades()
    updateResources()
  }
}

function buyUndead() {
  if (resources.undead >= upgrades.undead.cost) {
    resources.undead -= upgrades.undead.cost
    upgrades.undead.level++
    upgrades.undead.increase++
    upgrades.undead.cost = Math.floor(upgrades.undead.cost * 1.5)
    updateUpgrades()
    updateResources()
  }
}

function updateResources() {
  document.getElementById('gold').textContent = resources.gold.toLocaleString()
  document.getElementById('undead').textContent = resources.undead.toLocaleString()
}

function updateUpgrades() {
  document.getElementById('click-name').textContent = upgrades.click.name
  document.getElementById('click-level').textContent = upgrades.click.level
  document.getElementById('click-cost').textContent = upgrades.click.cost.toLocaleString()
  document.getElementById('click-increase').textContent = upgrades.click.increase.toLocaleString()
  document.getElementById('undead-name').textContent = upgrades.undead.name
  document.getElementById('undead-level').textContent = upgrades.undead.level
  document.getElementById('undead-cost').textContent = upgrades.undead.cost.toLocaleString()
  document.getElementById('undead-increase').textContent = upgrades.undead.increase.toLocaleString()
}

updateUpgrades()
updateResources()
