const renderValue = ({ fieldName, id, val }) => {
  const [_, type, itemId, itemInd] = id.split('-');

  if (fieldName === 'field') {
    const nodeElement = document.getElementById(`field-${type}-${itemId}-${itemInd}`);
    if (nodeElement) nodeElement.textContent = val;
  }

  if (fieldName === 'text') {
    const nodeElement = document.getElementById(`text-${type}-${itemId}`);
    if (nodeElement) nodeElement.textContent = val;
  }
};

export { renderValue };
