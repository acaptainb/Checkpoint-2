let Total = 1000

let clickUpgrades = [
    {
        name: 'One Portal',
        price: 10,
        quantity: 0,
        multiplier: 1

    },
    {
        name: 'Ten Portal',
        price: 100,
        quantity: 0,
        multiplier: 10
    }
]


let automaticUpgrades = [

    {
        name: 'Auto1',
        price: 200,
        quantity: 0,
        multiplier: 5

    }, {
        name: 'Auto2',
        price: 1000,
        quantity: 0,
        multiplier: 100

    }
    // FIXME add another auto upgrade OR click upgrade
]



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
    // FIXME need to get our click upgrades and apply their bonuses to our total
    AddBonuses()
    DrawBlackHole()

}

function AddBonuses() {
    // FIXME this might be working, but we need to call this function every time we click on the picture
    const onePortal = clickUpgrades.find((upgrade) => upgrade.name == "One Portal")
    Total += ((onePortal.multiplier * onePortal.quantity))
    const tenPortal = clickUpgrades.find((upgrade) => upgrade.name == "Ten Portal")
    Total += ((tenPortal.multiplier * tenPortal.quantity))

    // FIXME make sure we get all of our click upgrades here and apply their bonuses
}




function DrawBlackHole() {
    const TotalItems = document.getElementById('TotalItems')
    console.log('clicked', Total)

    TotalItems.innerText = Total
}

function BuyOnePortal() {
    const BuyOne = clickUpgrades.find((upgrade) => upgrade.name == "One Portal")

    if (Total >= BuyOne.price) {
        BuyOne.quantity++
        Total -= BuyOne.price
        BuyOne.price += 5
        // BuyOne.multiplier++
        console.log("purchased", BuyOne);
    }
    else {
        console.log("Not enough money");
    }
    DrawBlackHole()
    DrawPortalOneStats()
    DrawPortalOneStats2()
    DrawPriceOneTeleport()
    DrawClickPower()
    // AddBonuses()
}

function BuyTenPortal() {
    const BuyTen = clickUpgrades.find((upgrade) => upgrade.name == "Ten Portal")

    if (Total >= BuyTen.price) {
        // BuyTen.multiplier++
        // FIXME if buy an upgrade, I should only be purchasing one at a time
        BuyTen.quantity += 1
        Total -= BuyTen.price
        BuyTen.price += 10
        console.log("purchased", BuyTen);
    }
    else {
        console.log("Not enough money");
    }
    DrawBlackHole()
    DrawPortalTenStats()
    DrawPortalTenStats2()
    DrawPriceTenTeleport()
    DrawClickPower()
}


function DrawClickPower() {
    const PortalTotal1 = clickUpgrades.find((upgrade) => upgrade.name == "One Portal")
    const PortalTotal10 = clickUpgrades.find((upgrade) => upgrade.name == "Ten Portal")
    const PortalElement = document.getElementById('clickpower')
    let PortalTotal = 1 + (PortalTotal1.quantity * PortalTotal1.multiplier) + (PortalTotal10.quantity * PortalTotal10.multiplier)
    console.log('Total clickpower is ', PortalTotal);
    PortalElement.innerHTML = PortalTotal

    DrawBlackHole()
}


function DrawAutoPower() {
    const PortalTotal10 = automaticUpgrades.find((upgrade) => upgrade.name == "Auto1")
    const PortalTotal100 = automaticUpgrades.find((upgrade) => upgrade.name == "Auto2")
    const PortalElement = document.getElementById('autopower')
    let PortalTotal = 2 * (PortalTotal10.quantity * PortalTotal10.multiplier) + (PortalTotal100.quantity * PortalTotal100.multiplier)
    console.log('Total Autopower is ', PortalTotal);
    PortalElement.innerHTML = PortalTotal

    DrawBlackHole()
}


function DrawPriceOneTeleport() {
    const PriceOnePortal = clickUpgrades.find((upgrade) => upgrade.name == "One Portal")
    const OneTeleport = document.getElementById('OneTeleportPrice')
    OneTeleport.innerHTML = PriceOnePortal.price
}

function Auto1Price() {
    const BuyTen = automaticUpgrades.find((upgrade) => upgrade.name == "Auto1")
    const BuyTenElement = document.getElementById('Auto1Price')
    BuyTenElement.innerText = BuyTen.price
}

function DrawPriceTenTeleport() {
    const PriceOnePortal = clickUpgrades.find((upgrade) => upgrade.name == "Ten Portal")
    const OneTeleport = document.getElementById('TenTeleportPrice')
    OneTeleport.innerHTML = PriceOnePortal.price
}

function Auto2Price() {
    const BuyTen = automaticUpgrades.find((upgrade) => upgrade.name == "Auto2")
    const BuyTenElement = document.getElementById('Auto2Price')
    BuyTenElement.innerText = BuyTen.price
}

function DrawPortalOneStats() {
    const BuyOne = clickUpgrades.find((upgrade) => upgrade.name == "One Portal")
    const BuyOneElement = document.getElementById('OneTeleportx')
    // TODO grab element for price of OnePortal, and put that information on the page
    BuyOneElement.innerText = BuyOne.quantity
}
function DrawPortalOneStats2() {
    const BuyOne = clickUpgrades.find((upgrade) => upgrade.name == "One Portal")
    const BuyOneElement = document.getElementById('OneTeleportx2')
    // TODO grab element for price of OnePortal, and put that information on the page
    BuyOneElement.innerText = BuyOne.quantity
}



function DrawOneTeleportQuantity() {
    const BuyTen = automaticUpgrades.find((upgrade) => upgrade.name == "Auto1")
    const BuyTenElement = document.getElementById('OneTeleportQuantity')
    BuyTenElement.innerText = BuyTen.quantity
}
function DrawTenTeleportQuantity() {
    const BuyTen = automaticUpgrades.find((upgrade) => upgrade.name == "Auto2")
    const BuyTenElement = document.getElementById('TenTeleportQuantity')
    BuyTenElement.innerText = BuyTen.quantity
}


function DrawPortalTenStats() {
    const BuyTen = clickUpgrades.find((upgrade) => upgrade.name == "Ten Portal")
    const BuyTenElement = document.getElementById('TenTeleportx')
    // TODO grab element for price of TenPortal, and put that information on the page
    BuyTenElement.innerText = BuyTen.quantity
}

function DrawPortalTenStats2() {
    const BuyTen = clickUpgrades.find((upgrade) => upgrade.name == "Ten Portal")
    const BuyTenElement = document.getElementById('TenTeleporty')
    // TODO grab element for price of TenPortal, and put that information on the page
    BuyTenElement.innerText = BuyTen.quantity * 10
}



// TODO write a function that will total up your click upgrades and auto upgrades separately
// After totalling those up, grab your HTML elements and put those numbers on the page.
// Look at Mick totalling his cart on Mocha Micks lecture




function BuyAuto1() {
    const BuyOne = automaticUpgrades.find((upgrade) => upgrade.name == "Auto1")

    if (Total >= BuyOne.price) {
        BuyOne.quantity++
        Total -= BuyOne.price
        BuyOne.price += 5
        // BuyOne.multiplier++
        console.log("purchased auto", BuyOne);
    }
    else {
        console.log("Not enough money for auto1 ");
    }
    DrawBlackHole()
    DrawPortalOneStats()
    DrawPortalOneStats2()
    Auto1Price()
    DrawAutoPower()
    DrawOneTeleportQuantity()
}

function BuyAuto2() {
    const BuyOne = automaticUpgrades.find((upgrade) => upgrade.name == "Auto2")

    if (Total >= BuyOne.price) {
        BuyOne.quantity++
        Total -= BuyOne.price
        BuyOne.price += 5
        // BuyOne.multiplier++
        console.log("purchased auto2", BuyOne);
    }
    else {
        console.log("Not enough money for auto 2");
    }
    DrawBlackHole()
    DrawPortalOneStats()
    DrawPortalOneStats2()
    DrawTenTeleportQuantity()
    Auto2Price()
    DrawAutoPower()
}







function AddAutoBonuses() {
    // FIXME loop through your auto upgrades array, and add each upgrades price * quantity to your Total global variable
    let AutoTotal = 0
    // let Auto1 = automaticUpgrades.find((autoupgrade) => autoupgrade.name = "Auto")

    for (let i = 0; i < automaticUpgrades.length; i++) {
        const element = Total[i];
        AutoTotal += (automaticUpgrades[i].quantity * automaticUpgrades[i].multiplier)
        Total += AutoTotal
    }
    console.log("AutoTotal is ", AutoTotal);

    DrawBlackHole()


}




setInterval(AddAutoBonuses, 1000);





























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








