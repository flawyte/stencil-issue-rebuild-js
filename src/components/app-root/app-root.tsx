import { h, Component } from '@stencil/core';
import { fn as fn1 } from '../../modules/module1';
import { fn as fn2 } from '../../modules/module2';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <ul>
        <li>fn1 : {fn1()}</li>
        <li>fn2 : {fn2()}</li>
      </ul>
    );
  }
}
