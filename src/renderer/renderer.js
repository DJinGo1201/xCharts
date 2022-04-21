import { createContext } from './context';
import {
  line,
  rect,
  circle,
  text,
  path,
  ring,
} from './shape';

export function createRenderer(width, height) {
  const context = createContext(width, height);

  return {
    node: () => context.node,
    group: () => context.group,
    line: (attributes) => line(context, attributes),
    rect: (attributes) => rect(context, attributes),
    circle: (attributes) => circle(context, attributes),
    text: (attributes) => text(context, attributes),
    path: (attributes) => path(context, attributes),
    ring: (attributes) => ring(context, attributes),
  };
}
