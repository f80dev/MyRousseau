import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material';

interface carNode {
  name: string;
  children?: carNode[];
}

const TREE_DATA : carNode[] = [
  {
    name: 'BMW',
    children: [
      {name: 'Série 5'},
      {name: 'Série 1'},
      {name: 'X5'},
    ]
  }, {
    name: 'Renault',
    children: [
      {name: 'Clio'},
      {name: 'Scénic'},
      {name: 'Kangoo'},
      {name: 'Captur'}
    ]
  },
  {
    name: 'Peugeot',
    children: [
      {name: '308'},
      {name: '208'},
      {name:'508'}
    ]
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-car-picker',
  templateUrl: './car-picker.component.html',
  styleUrls: ['./car-picker.component.css']
})
export class CarPickerComponent implements OnInit {

  @Output('onclick') onclick: EventEmitter<any>=new EventEmitter();

  private transformer = (node: carNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit() {
  }

  selcar(node) {
    this.onclick.emit({car:node.name});
  }
}
