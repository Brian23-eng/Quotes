export class Quotes {
    showDescription: boolean;

    constructor(public id: number,
        public name: string,
        public description: string,
        public submittedBy: string,
        public upVotes: number,
        Date:Date){
            this.showDescription = false;
        }
    
    
}
