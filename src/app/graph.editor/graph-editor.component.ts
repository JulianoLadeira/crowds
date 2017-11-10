import { Component, AfterViewInit, HostListener } from '@angular/core';

declare var GraphEditor: any;
declare var $: any;

@Component({
    selector: 'app-graph-editor',
    templateUrl: './graph-editor.component.html'
})
export class GraphEditorComponent implements AfterViewInit {

    private graphEditor: any;
    private key: any;

    public constructor () { }

    public ngAfterViewInit(): void {
        this.graphEditor = new GraphEditor('#editor', { });
    }

    public hello (): void {
        this.graphEditor.delete_selected_elements();
        console.log(this.buildAdjacencyMatrix());
    }

    /**
     * Builds the adjacency matrix of the current graph.
     */
    public buildAdjacencyMatrix(): boolean[][] {

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

            return adjacencyMatrix;
        } catch (exception) {
            return null;
        }
    }
}
