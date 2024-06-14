let Total = 0

let clickUpgrades = [
    {
        name: 'One Portal',
        price: 10,
        quantity: 0,

    },
    {
        name: 'Ten Portal',
        price: 25,
        quantity: 0,

    }
]


let automaticUpgrades =
{
    name: 'rover',
    price: 600,
    quantity: 0,
    multiplier: 20

}



// const TotalVsPower = {
//     Total: 0,
//     ClickPowerOne: 1,
//     ClickPowerTen: 0,
//     ClickPowerTen1: 0
// }


// //  BothClickPower = TotalVsPower.ClickPowerOne + TotalVsPower.ClickPowerTen
function clickBlackHole() {
    Total++
    console.log(Total)
    DrawBlackHole()
}

function DrawBlackHole() {
    const TotalItems = document.getElementById('TotalItems')
    console.log('clicked', Total)

    TotalItems.innerText = Total
    // TotalItems.innerText = TotalVsPower.Total += TotalVsPower.ClickPowerTen
}

function BuyOnePortal() {
    const BuyOne = clickUpgrades.find((upgrade) => upgrade.name == "One Portal")
    console.log(BuyOne)
    Total -= BuyOne.price
}


// function OneTeleport() {
//     TotalItems.innerHTML = Total -= 2
//     const AddingOne = document.getElementById('OneTeleport')
//     console.log("teleport")
//     AddingOne.innerHTML = TotalVsPower.ClickPowerOne++
//     DrawStats()
//     if (TotalVsPower.Total == 0) {
//         TotalVsPower.Total == 0
//     }
// }

// function DrawStats() {
//     const Drawstat = document.getElementById('OneTeleportx')
//     Drawstat.innerHTML = TotalVsPower.ClickPowerOne
//     const Drawstats = document.getElementById('OneTeleportx2')
//     Drawstats.innerHTML = TotalVsPower.ClickPowerOne
// }
// DrawStats()
// function TenTeleport() {
//     TotalItems.innerHTML = TotalVsPower.Total -= 20
//     const AddingTen = document.getElementById('TenTeleport')
//     console.log(" 10 teleport")
//     AddingTen.innerHTML = TotalVsPower.ClickPowerTen += 10
//     const Drawstat = document.getElementById('TenTeleportx')
//     Drawstat.innerHTML = TotalVsPower.ClickPowerTen1 += 1
//     DrawStatsTen()
// }
// function DrawStatsTen() {
//     const Drawstats = document.getElementById('TenTeleportx2')
//     Drawstats.innerHTML = TotalVsPower.ClickPowerTen
// }
// DrawStatsTen()






// function AutomationOne() {
//     TotalItems.innerHTML = TotalVsPower.Total -= 200
//     const AutomationOneElement = document.getElementById('AutomationOne')
//     console.log("Automation")
//     AutomationOneElement.innerHTML = TotalVsPower.ClickPowerOne += 30
// }

// // setInterval(AutomationOne, 3000)








