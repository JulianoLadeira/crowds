export class GraphParsingException {
    public message: string;
    public node1: number;
    public node2: number;

    public constructor (message: string, node1: number, node2: number) {
        this.message = message;
        this.node1 = node1;
        this.node2 = node2;
    }
}
