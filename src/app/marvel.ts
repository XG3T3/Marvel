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
    comics:{
        available:number,
    }
}
