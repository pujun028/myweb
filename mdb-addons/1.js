





export class Name { //用export对外部暴露该类
    constructor(private first: string, private second: string) { }
    get nameMessage() {
        return `Hello ${this.first} ${this.second}`;
    }
}