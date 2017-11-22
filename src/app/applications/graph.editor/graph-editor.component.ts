import { GraphParsingException } from './../../.common-components/exception/graph-parsing.exception';
import { Component, AfterViewInit, HostListener } from '@angular/core';

declare var GraphEditor: any;
declare var Papa: any;
declare var $: any;

@Component({
    selector: 'app-graph-editor',
    templateUrl: './graph-editor.component.html'
})
export class GraphEditorComponent implements AfterViewInit {

    private graphEditor: any;
    private key: any;

    private matrix: boolean[][];

    public constructor () { }

    public ngAfterViewInit(): void {
        this.graphEditor = new GraphEditor('#editor', { });
    }

    /**
     * Builds the matrix from the input file.
     */
    public parseInputFile (): void {

        const connectionValues: Array<string> = ['1', 'true'];
        const noConnectionValues: Array<string> = ['0', 'false'];

        const element: HTMLInputElement = <HTMLInputElement> document.getElementById('input');
        const file: File = element.files[0];

        Papa.parse(file, {complete: (results) => {
            const data = results.data;
            const adjacencyMatrix: boolean[][] = [];
            let lineCount: number = data.length;

            if (!(data[lineCount - 1].length === 1 && data[lineCount - 1][0] === '')) {
                throw new Error('Input file must end in new line');
            }

            lineCount--;
            for (let i = 0; i < lineCount; i++) {

                if (connectionValues.includes(data[i][i])) {
                    throw new GraphParsingException ('Self-connected node', i, undefined);
                }

                adjacencyMatrix[i] = [];

                for (let j = 0; j < lineCount; j++) {
                    if (connectionValues.includes(data[i][j]) || noConnectionValues.includes(data[i][j])) {

                        if (connectionValues.includes(data[i][j]) && connectionValues.includes(data[j][i])) {
                            adjacencyMatrix[i][j] = true;
                        } else if (noConnectionValues.includes(data[i][j]) && noConnectionValues.includes(data[j][i])) {
                            adjacencyMatrix[i][j] = false;
                        } else {
                            throw new GraphParsingException ('Distinct values', i, j);
                        }
                    } else {
                        throw new GraphParsingException ('Value unknown', i, j);
                    }
                }
            }

            this.matrix = adjacencyMatrix;
        }});
    }

    /**
     * Builds the adjacency matrix of the current graph.
     */
    public buildAdjacencyMatrixFromGraphEditor(): void {

        try {

            const rawData: any = this.graphEditor.get_raw_data();
            const nodeCount: number = rawData.nodes.length;
            const adjacencyMatrix: boolean[][] = [];

            let counter = 0;

            while (counter < nodeCount) {
                const newLine: boolean[] = new Array<boolean>(nodeCount);
                adjacencyMatrix.push(newLine);
                counter++;
            }

            for (const edge of rawData.edge_list) {
                const index1: number = parseInt(edge.node1.label, null);
                const index2: number = parseInt(edge.node2.label, null);

                const lowerIndex: number = Math.min(index1, index2);
                const upperIndex: number = Math.max(index1, index2);

                adjacencyMatrix[index1][index2] = true;
                adjacencyMatrix[index2][index1] = true;
            }

            for (const line of adjacencyMatrix) {
                for (counter = 0; counter < nodeCount; counter++) {
                    if (!line[counter]) {
                        line[counter] = false;
                    }
                }
            }

            this.matrix = adjacencyMatrix;
        } catch (exception) {
            return null;
        }
    }

    public printInputFile(): void {
        console.log(this.matrix);
    }
}
