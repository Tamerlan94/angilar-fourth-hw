export class product {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public addonDescription: string,
        public count: number,
    ) { }
}


export let products = [
    {
        id: 1,
        title: "product1",
        description: "some product",
        addonDescription: "added desc",
        count: 40
    },
    {
        id: 2,
        title: "cup",
        description: "some cup",
        addonDescription: "small and tall",
        count: 20
    },
    {
        id: 3,
        title: "phone",
        description: "just a common phone",
        addonDescription: "named by iphone",
        count: 14
    },
    {
        id: 4,
        title: "table",
        description: "need to the cup standing",
        addonDescription: "yep, that is",
        count: 1
    },
    {
        id: 5,
        title: "toy",
        description: "zoomers toy",
        addonDescription: "hug",
        count: 3
    },
]