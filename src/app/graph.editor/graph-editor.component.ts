import { Component, AfterViewInit } from '@angular/core';

declare var GraphEditor: any;
declare var $: any;

@Component({
    selector: 'app-graph-editor',
    templateUrl: './graph-editor.component.html'
})
export class GraphEditorComponent {

    private graphEditor;

    public constructor () {
        $( document ).ready(function() {
            this.graphEditor = new GraphEditor('#editor', { });
        });
    }

    // private onStart(): void {
    //     this.editor = d3.select('#editor')
    //         .append('svg:svg')
    //         .attr('width', this.windowWidth)
    //         .attr('height', this.windowHeight)
    //         .attr('pointer-events', 'all');

    //     const outer = d3.select('#editor')
    //         .append('svg:svg')
    //         .attr('width', this.windowWidth)
    //         .attr('height', this.windowHeight)
    //         .attr('pointer-events', 'all');

    //     this.vis = outer
    //         .append('svg:g')
    //           .call(d3.behavior.zoom().on('zoom', this.rescale))
    //           .on('dblclick.zoom', null)
    //         .append('svg:g')
    //           .on('mousemove', mousemove)
    //           .on('mousedown', mousedown)
    //           .on('mouseup', mouseup);

    //     this.vis.append('svg:rect')
    //           .attr('width', this.windowWidth)
    //           .attr('height', this.windowHeight)
    //           .attr('fill', 'white');

    //     this.force = d3.layout.force()
    //         .size([this.windowWidth, this.windowHeight])
    //         .nodes([{}]) // initialize with a single node
    //         .linkDistance(50)
    //         .charge(-200)
    //         .on('tick', tick);

    //     this.drag_line = this.vis.append('line')
    //         .attr('class', 'drag_line')
    //         .attr('x1', 0)
    //         .attr('y1', 0)
    //         .attr('x2', 0)
    //         .attr('y2', 0);

    //     this.nodes = this.force.nodes();
    //     this.links = this.force.links();
    //         // node = vis.selectAll(".node"),
    //         // link = vis.selectAll(".link");
    //     d3.select(window).on('keydown', keydown);
    //     this.redraw();
    // }

    // private rescale() {
    //     const trans = d3.event.translate;
    //     const scale = d3.event.scale;

    //     this.vis.attr('transform',
    //         'translate(' + trans + ')'
    //         + ' scale(' + scale + ')');
    //   }
}
