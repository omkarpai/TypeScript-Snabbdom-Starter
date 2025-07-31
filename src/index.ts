import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    VNode,
} from 'snabbdom';
import App from './App/App';

let vnode: VNode | HTMLElement | null = document.getElementById('root');

if (!vnode) {
    throw new Error('[FATAL]: Unable to get root element to use as vnode');
}

export const patch = init([
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
]);

export const render = (): void => {
    const newVnode = App();
    if (!vnode) {
        throw new Error('[FATAL]: vnode link was found to be null');
    }
    vnode = patch(vnode, newVnode);
};

render();
