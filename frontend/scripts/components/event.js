var Event = {
    OUTPOST: {
        icon: "O",
        scenes: {
            'start': {
                text: "You find yourself within range of a bustling Federation outpost.\nWide-band communications broadcast the outpost's fueling and repair services.",
                buttons: {
                    'buy fuel': {value: 'Buy fuel.', next: 'fuel'},
                    'buy repairs': {value: 'Buy repairs.', next: 'repair'},
                    'finish': {value: 'Leave station.', next: 'end'}
                }
            },
            'fuel': {
                text: 'The transaction clears.\nA small droid approaches your ship with additional fuel.',
                buttons: {
                    'finish': {value: 'Leave station.', next: 'end'}
                }
            },
            'repair': {
                text: 'The transaction clears.\nA group of repair drones encircles your ship and patches the hull.',
                buttons: {
                    'finish': {value: 'Leave station.', next: 'end'}
                }
            }
        }
    },

    FIRE: {
        icon: "O",
        scenes: {
            'start': {
                text: "Warnings and distress calls flash across your console as you approach the outpost.\nThe station is engulfed in flames!",
                buttons: {
                    'proceed': {value: 'Fire!', next: 'decide'}
                }
            },
            'decide': {
                text: "There are survivors still aboard. One airlock is still operational.\nThere is no way to tell how much longer the station will hold together.",
                buttons: {
                    'help': {value: "Approach the station. Try and help the survivors.", next: {3: 'help fail', 10: 'help success'}},
                    'finish': {value: "Stay away. We can't take the risk.", next: 'end'}
                }
            },
            'help success': {
                text: "The last of the survivors clambers aboard, and you pull away from the station safely.\nYou drop off the survivors on a nearby station. One offers to join you.",
                buttons: {
                    'finish': {value: 'Welcome aboard.', next: 'end'}
                }
            },
            'help fail': {
                text: "The station explodes just before you can dock. Your ship is violently thrown away from the blast.\nNo one could have survived that.",
                buttons: {
                    'finish': {value: 'Leave.', next: 'end'}
                }
            }
        }
        //station on fire, can try and save people on board
        //chance for station to explode and cause damage, or gain crewmate on successful rescue
    },

    SPIDERS: {
        icon: "O",
        scenes: {
            'start': {
                text: "Warnings and distress calls flash across your console as you approach the outpost.\nYour radio crackles to life with a frantic message.",
                buttons: {
                    'proceed': {value: 'Message received.', next: 'decide'}
                }
            },
            'decide': {
                text: "The station has been overrun by giant alien spiders!\nNo time to explain. The survivors plead for assistance.",
                buttons: {
                    'help': {value: "Giant spiders are no joke. We have to help.", next: {3: 'help fail', 10: 'help success'}},
                    'finish': {value: "No chance. I didn't sign up for giant spiders.", next: 'end'}
                }
            },
            'help success': {
                text: "Your crew holds off the spiders long enough to evacuate the remaining civilians.\nYou drop off the survivors on a nearby station. One offers to join you.",
                buttons: {
                    'finish': {value: 'Welcome aboard.', next: 'end'}
                }
            },
            'help fail': {
                text: "The spiders are far more aggressive than you could have expected. The fight is short and bloody.\nYou barely make it back to the ship alive. One of your crew doesn't return.",
                buttons: {
                    'finish': {value: 'Leave.', next: 'end'}
                }
            }
        }
        //research station overwhelmed by giant alien spiders
        //attempt rescue, gain crewmate on success or lose crewmate/take damage on fail
    },

    DERELICT: {
        icon: "D",
        scenes: {
            'start': {
                text: "A heavily damaged warship drifts through the darkness, long abandoned.\nIt looks like parts of the ship can be salvaged for scrap.",
                buttons: {
                    'finish': {value: 'Take what you can.', next: 'end'}
                }
            }
        }
        //can salvage for scrap
    },

    DISTRESS: {
        icon: "E",
        scenes: {
            'start': {
                text: "An emergency distress signal flashes up on your console.\nA nearby cruiser is persistently hailing you.",
                buttons: {
                    'proceed': {value: 'Investigate.', next: 'decide'}
                }
            },
            'decide': {
                text: "They ask for some spare fuel to make it to the nearest station. They say they can pay.\nThe cruiser is heavily armed.",
                buttons: {
                    'accept': {value: 'Give them fuel.', next: {3: 'ambush', 10: 'thanks'}},
                    'decline': {value: 'Turn them down.', next: {4: 'ambush fail', 10: 'end'}}
                }
            },
            'thanks': {
                text: "They seem grateful. They send over some scrap as thanks.",
                buttons: {
                    'finish': {value: 'Leave.', next: 'end'}
                }
            },
            'ambush': {
                text: "As you open your hold and approach the cruiser, they deploy weapons. A trap!\nThey order you to surrender all your scrap and some fuel.",
                buttons: {
                    'surrender': {value: "Give them what they want.", next: 'surrender'},
                    'escape': {value: "Try to escape.", next: 'damage'}
                }
            },
            'ambush fail': {
                text: "As you turn to leave, the cruiser deploys weapons. They meant to lure you in.\nYou're able to escape with only minor damage.",
                buttons: {
                    'finish': {value: "Leave.", next: 'end'}
                }
            },
            'surrender': {
                text: "You surrender a loaded cargo capsule. The cruiser scoops it up and speeds off.\nYour hold is empty, but your ship is unharmed.",
                buttons: {
                    'finish': {value: "Leave.", next: 'end'}
                }
            },
            'damage': {
                text: "You close your hold and attempt to escape. The cruiser opens fire.\nYou were in a vulnerable position. Your ship takes heavy damage before you can get away.",
                buttons: {
                    'finish': {value: "Leave.", next: 'end'}
                }
            }
        }
        //chance to be a pirate trap, take damage or surrender fuel; or find stranded civilian ship, needs fuel, gives scrap
    },

    BLACKHOLE: {
        icon: "B",
        text: "Strange readings fill your terminal as light from faraway stars bends unnaturally around a distant point.\nYour ship computer warns you that you've found a black hole.",
        buttons: {}
        //can teleport to random place on map, small chance to instantly destroy ship
    },

    PIRATE: {
        icon: "T",
        text: "A large trade ship is being harassed by a heavily armed pirate vessel.\nThey haven't noticed your ship yet.",
        buttons: {}
        //attacking trader, can either ignore or intervene
        //intervene and lose causes significant damage, intervene and win to gain scrap and tech from trader
    },

    TRADER: {
        icon: "T",
        text: "A large trade ship lumbers through the system.\nThey hail you as you pass, offering their wares.",
        buttons: {}
        //offers tech in exchange for fuel and scrap, fuel for scrap
    },

    PLANET: {
        icon: "P",
        text: ["Your terminal crackles to life with a garbled distress signal coming from a nondescript desert world.\nIt seems a ship has crashed on the surface.",
        "You send a team down to investigate, and they find a single haggard survivor.\nHe has been there a long time. His mental state is uncertain."],
        buttons: {}
        //find crash survivor, may either sabotage ship and cause damage or become new crewmate
    },

    DEPOT: {
        icon: "F",
        text: "A small automated fuel depot appears on your scanners.\nIt clears you for a refueling procedure as you approach.",
        buttons: {}
        //refuel
    },

    SHIPYARD: {
        icon: "Y",
        text: ["A busy shipyard overtakes the near side of a small moon orbiting an earth-like planet.\nSmall frigates weave in between colossal fleet carriers and dreadnoughts in dry dock.",
        "Countless advertisements roll across your terminal, but one catches your eye.\nA vendor offers to upgrade your ship's armor plating."],
        buttons: {}
        //buy armor increase
    },

    STAR: {
        icon: "N",
        text: ["Your cabin is bathed in the eerie bluish-white light of a neutron star.\nMassive jets carry superheated plasma thousands of miles out from the poles of the star.",
        "Alerts flash on your console. Passing through the jets can temporarily overcharge your drive core.\nHowever, your ship may not be able to handle the strain..."],
        buttons: {}
        //neutron star, using it will cause damage but greatly increase next jump
    },

    BEACON: {
        icon: "G",
        text: "Telemetry data for the next system loads to your terminal as the beacon comes into range.\nOne step closer to home...",
        buttons: {}
    }
}

//possible extra crewmates: mechanic, gives autoheal; navigator, gives extra sight range; engineer, increases move range