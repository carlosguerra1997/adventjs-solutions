export default function countSheeps(sheeps) {
  const sheepsFiltered = sheeps.filter(({ color, name }) => 
    color === 'rojo' 
      && name.toLowerCase().includes('a') 
      && name.toLowerCase().includes('n')
  )
  
  return sheepsFiltered
}