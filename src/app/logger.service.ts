/**
 * Logging helper class
 */
export class Logger {
    private className:String = "";

    private HRtimestamp() {
        let now = new Date();
        return now.getDate()+"/"+(now.getMonth()+1)+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()+":"+now.getMilliseconds();
    }

    private prefix() {
        return "["+this.HRtimestamp()+"] " + this.className + " | ";
    }

    constructor(cn:String) {
        this.className = cn;
    }
    
    log(msg: any)   { console.log(this.prefix() + "%O", msg); }
    error(msg: any) { console.error(this.prefix() + "%O", msg); }
    warn(msg: any)  { console.warn(this.prefix() + "%O", msg); }
}