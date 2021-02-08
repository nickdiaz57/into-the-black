class Encounter {
    constructor() {
        console.log('Encounter loaded')
    }
}

var Event = {
    OUTPOST: {
        icon: "O",
        text: "You find yourself within range of a Federation outpost. Wide-band communications broadcast the outpost's fueling and repair services.",
        buttons: {
            'approach': {},//next scene, buy fuel and hp
            'ignore': {}//end
        },
    },

    FIRE: {
        icon: "O",
        text: ["Warnings and distress calls flash across your console as you approach the outpost.\nThe station is engulfed in flames!",
        "There are survivors still aboard. One airlock is still operational.\nThere is no way to tell how much longer the station will hold together."]
        //station on fire, can try and save people on board
        //chance for station to explode and cause damage, or gain crewmate on successful rescue
    },

    SPIDERS: {
        icon: "O",
        text: ["Warnings and distress calls flash across your console as you approach the outpost.\nYour radio crackles to life with a frantic message.",
        "The station has been overrun by giant alien spiders!\nNo time to explain. The survivors plead for assistance."]
        //research station overwhelmed by giant alien spiders
        //attempt rescue, gain crewmate on success or lose crewmate/take damage on fail
    },

    DERELICT: {
        icon: "D",
        text: "A heavily damaged warship drifts through the darkness, long abandoned. It looks like it can be salvaged for scrap."
        //can salvage for scrap
    },

    DISTRESS: {
        icon: "E",
        text: ["An emergency distress signal flashes up on your console.\nA heavy cruiser is persistently hailing you.",
        "They ask for some spare fuel to make it to the nearest station. They say they can pay.\nThe cruiser is heavily armed."]
        //chance to be a pirate trap, take damage or surrender fuel; or find stranded civilian ship, needs fuel, gives scrap
    },

    BLACKHOLE: {
        icon: "B",
        text: "Strange readings fill your terminal as light from faraway stars bend unnaturally around a distant point.\nYour ship computer warns you that you've found a black hole."
        //can teleport to random place on map, small chance to instantly destroy ship
    },

    PIRATE: {
        icon: "T",
        text: "A large trade ship is being harassed by a heavily armed pirate vessel.\nThey haven't noticed your ship yet."
        //attacking trader, can either ignore or intervene
        //intervene and lose causes significant damage, intervene and win to gain scrap and tech from trader
    },

    TRADER: {
        icon: "T",
        text: "A large trade ship lumbers through the system.\nThey hail you as you pass, offering their wares."
        //offers tech in exchange for fuel and scrap, fuel for scrap
    },

    PLANET: {
        icon: "P",
        text: ["Your terminal crackles to life with a garbled distress signal coming from a nondescript desert world.\nIt seems a ship has crashed on the surface.",
        "You send a team down to investigate, and they find a single haggard survivor.\nHe has been there a long time. His mental state is uncertain."]
        //find crash survivor, may either sabotage ship and cause damage or become new crewmate
    },

    DEPOT: {
        icon: "F",
        text: "A small automated fuel depot appears on your scanners. It clears you for a refueling procedure as you approach."
        //refuel
    },

    SHIPYARD: {
        icon: "Y",
        text: ["A bustling shipyard overtakes the near side of a small moon orbiting an earth-like planet.\nSmall frigates weave in between colossal fleet carriers and dreadnoughts in dry dock.",
        "Countless advertisements roll across your terminal, but one catches your eye.\nOne vendor offers to upgrade your ship's armor plating."]
        //buy armor increase
    },

    STAR: {
        icon: "N",
        text: ["Your cabin is bathed in the eerie bluish-white light of a nearby neutron star.\nMassive jets carry superheated plasma thousands of miles out from the poles of the star.",
        "Alerts flash on your console. Passing through the jets can temporarily overcharge your drive core.\nHowever, your ship may not be able to handle the strain..."]
        //neutron star, using it will cause damage but greatly increase next jump
    },

    BEACON: {
        icon: "G",
        text: "Telemetry data for the next system loads to your terminal as the beacon comes into range.\nOne step closer to home..."
    }
}

//possible extra crewmates: mechanic, gives autoheal; navigator, gives extra sight range; engineer, increases move range