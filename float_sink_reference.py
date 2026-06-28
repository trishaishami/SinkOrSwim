LIQUIDS = {
    "Fresh Water": 1.0,
    "Salt Water": 1.03,
    "Oil": 0.9,
}

ITEM_DENSITIES = {
    "Granite Rock": 2.7,
    "Quartz Crystal": 2.65,
    "Stone": 2.6,
    "Seashell": 2.7,
    "Driftwood Piece": 0.6,
}


def density(mass, volume):
    return mass / volume


def float_or_sink(item_density, liquid_density):
    return "Float" if item_density < liquid_density else "Sink"


for item, assumed_density in ITEM_DENSITIES.items():
    volume = 1.0
    mass = assumed_density * volume
    object_density = density(mass, volume)
    results = [
        f"{liquid}: {float_or_sink(object_density, liquid_density)}"
        for liquid, liquid_density in LIQUIDS.items()
    ]
    print(f"{item} ({object_density:.2f} g/cm^3) -> " + ", ".join(results))
