


class attendance{
    constructor(date, from, to, forWorker){
        this.date=date;
         this.from=from;
         this.to=to;
         this.forWorker=forWorker;
    }

    get Date(){
        return this.date;
    }
    set Date(Date){
        this.date=Date;
    }

    get From(){
        return this.from;
    }
    set From(From){
        this.from=From;
    }

    get To(){
        return this.to;
    }
    set To(To){
        this.to=To;
    }

    get ForWorker(){
        return this.forWorker;
    }
    set ForWorker(ForWorker){
        this.forWorker=ForWorker;
    }

    
} 
