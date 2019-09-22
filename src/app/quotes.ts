export class Quotes {
    showDescription: boolean;

    constructor(public id: number,
        public name: string,
        public description: string,
        public submittedBy: string,
        public upVote: number,
        public dnVote: number,
        public Date:Date){
            this.showDescription = false;
            
        }
    
 
}
 