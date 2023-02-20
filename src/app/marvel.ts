export interface Marvel {
    data: {
        total: number;
        results: Heroes[]
    }
}

export interface Heroes {

    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string,
        extension: string,
    }
    comics: {
        available: number,
    }

    series: Series


}


export interface Series {
    available: number;
    collectionURI: string;
    items: SeriesItem[];
    returned: number;
}


export interface SeriesItem {
    resourceURI: string;
    name: string;
}
