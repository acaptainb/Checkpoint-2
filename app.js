let Total = 0

let clickUpgrades = [
    {
        name: 'One Portal',
        price: 10,
        quantity: 0,
        multiplier: 1

    },
    {
        name: 'Ten Portal',
        price: 25,
        quantity: 0,
        multiplier: 1
    }
]


let automaticUpgrades =
{
    name: 'Auto',
    price: 1,
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

function AddBonuses() {
    const buyOne = clickUpgrades.find((upgrade) => upgrade.name == "One Portal")
    Total += (1 + (buyOne.multiplier * buyOne.quantity))
}




function DrawBlackHole() {
    const TotalItems = document.getElementById('TotalItems')
    console.log('clicked', Total)

    TotalItems.innerText = Total
}

function BuyOnePortal() {
    const BuyOne = clickUpgrades.find((upgrade) => upgrade.name == "One Portal")

    if (Total > BuyOne.price) {
        BuyOne.quantity++
        Total -= BuyOne.price
        BuyOne.price += 5
        BuyOne.multiplier++
        console.log("purchased", BuyOne);
    }
    else {
        console.log("Not enough money");
    }
    DrawBlackHole()
    DrawPortalOneStats()
}


function DrawPortalOneStats() {
    const BuyOne = clickUpgrades.find((upgrade) => upgrade.name == "One Portal")
    const BuyOneElement = document.getElementById('OneTeleportx')
    BuyOneElement.innerText = BuyOne.quantity
}




function BuyTenPortal() {
    const BuyTen = clickUpgrades.find((upgrade) => upgrade.name == "Ten Portal")

    if (Total > BuyTen.price) {
        BuyTen.quantity += 10
        Total -= BuyTen.price
        BuyTen.price += 50
        BuyTen.multiplier++
        console.log("purchased", BuyTen);
    }
    else {
        console.log("Not enough money");
    }
    DrawBlackHole()
    DrawPortalTenStats()
}


function DrawPortalTenStats() {
    const BuyTen = clickUpgrades.find((upgrade) => upgrade.name == "Ten Portal")
    const BuyTenElement = document.getElementById('TenTeleportx')
    BuyTenElement.innerText = BuyTen.quantity
}


// function AutoAddOne() {
//     if (Total > automaticUpgrades.price) {
//         automaticUpgrades.quantity++
//         Total -= automaticUpgrades.price
//         automaticUpgrades.price += 1
//         automaticUpgrades.multiplier++
//         console.log("purchased", automaticUpgrades);
//     }
//     else {
//         console.log("Not enough money");
//     }
// }


function AutoAddOne() {
    let AutoTotal = 0
    for (let key in automaticUpgrades) {
        AutoTotal += automaticUpgrades[key].multiplier * automaticUpgrades[key].quantity
    }
}




setInterval(AutoAddOne, 1000);





























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








