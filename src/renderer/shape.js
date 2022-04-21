import { setAttributes, createSVGElement, mount } from './utils';

export function shape(type, context, attributes) {
  const { group } = context;
  const el = createSVGElement(type);
  setAttributes(el, attributes);

  mount(group, el);
  return el;
}

export function line(context, attributes) {
  return shape('line', context, attributes);
}

export function rect(context, attributes) {
  const {
    width,
    height,
    x,
    y,
  } = attributes;

  return shape('rect', context, {
    ...attributes,
    width: Math.abs(width),
    height: Math.abs(height),
    x: width > 0 ? x : x + width,
    y: height > 0 ? y : y + height,
  });
}

export function circle(context, attributes) {
  return shape('circel', context, attributes);
}

export function text(context, attributes) {
  const { text, ...rest } = attributes;
  const textElement = shape('text', context, rest);
  textElement.textContent = text;
  return textElement;
}

export function path(context, attributes) {
  const { path = [] } = attributes;
  return shape('path', context, { ...attributes, d: path.flat().join(' ') });
}

export function ring(context, attributes) {
  const {
    cx,
    cy,
    r1,
    r2,
    ...styles
  } = attributes;

  const { stroke, strokeWidth = 1, fill } = styles;
  const innerStroke = circle(context, {
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r1,
  });

  const ring = circle(context, {
    ...styles,
    strokeWidth: r2 - r1 - strokeWidth,
    stroke: fill,
    fill: 'transparent',
    cx,
    cy,
    r: (r1 + r2) / 2,
  });

  const outerStroke = circle(context, {
    fill: 'transparent',
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r2,
  });

  return [innerStroke, ring, outerStroke];
}
