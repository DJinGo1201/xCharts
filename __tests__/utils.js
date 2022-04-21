export function createDiv() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
}

export function mount(parent, child) {
  if (!parent) return;
  parent.appendChild(child);
}
