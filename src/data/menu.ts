export interface MenuItem {
    name: string;
    description: string;
    price: string;
}

export const menu: MenuItem[] = [
    {
        name: "Croissant",
        description: "Butter-laminated, 72-hour proof",
        price: "$6",
    },
    {
        name: "Kouign-amann",
        description: "Caramelized layers, Breton sea salt",
        price: "$8",
    },
    {
        name: "Paris-Brest",
        description: "Hazelnut praline, choux pastry",
        price: "$11",
    },
    {
        name: "Tarte au Citron",
        description: "Meyer lemon, torched meringue",
        price: "$9",
    },
    {
        name: "Financier",
        description: "Brown butter, almond",
        price: "$5",
    },
    {
        name: "Mille-feuille",
        description: "Vanilla bean cream, puff pastry",
        price: "$10",
    },
];