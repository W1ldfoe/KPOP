import { Component, Input} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>Your sort text</p>
              <p>{{result}} </p>`
})
export class ChildCo {
    @Input()
    result!: string;
}