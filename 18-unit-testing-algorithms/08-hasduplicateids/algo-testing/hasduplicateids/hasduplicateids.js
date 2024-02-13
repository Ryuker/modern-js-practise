function hasDuplicateIds(root, idSet = new Set()) {
  if (!root) return false;

  // Check root if if the id exists in the idSet, if so we have a duplicate
  if(idSet.has(root.id)) return true ;

  root.id && idSet.add(root.id);

  // Check child nodes for duplicate id
  if (root.hasChildNodes()) {
    for (let child of root.children) {
      const result = hasDuplicateIds(child, idSet); // recursive call
      if (result) return true;
    }
  }

  // No duplicate was found
  return false;
}

module.exports = hasDuplicateIds;