function countPackages(carriers, carrierID) {
  const carrierMap = new Map()
  for (const carrier of carriers) {
    const [name, packages, subordinates] = carrier
    carrierMap.set(name, { packages, subordinates })
  }

  function dfs(id) {
    if (!carrierMap.has(id)) {
      return 0
    }

    const { packages, subordinates } = carrierMap.get(id)
    return packages + subordinates.reduce((acc, sub) => acc + dfs(sub), 0) 
  }

  return dfs(carrierID)
}
