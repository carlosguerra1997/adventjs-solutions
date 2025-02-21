export function countSheeps(sheeps) {
  const sheepsFiltered = sheeps.filter(({ color, name }) => 
    color === 'rojo' 
      && name.toLowerCase().includes('a') 
      && name.toLowerCase().includes('n')
  )
  
  return sheepsFiltered
}

const sheeps = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

countSheeps(sheeps)