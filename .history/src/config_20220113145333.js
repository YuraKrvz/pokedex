export const colors = {
   grass: '#b2dfdb',
   fire: '#ffccbc',
   water: '#b3e5fc',
   bug: '#bcaaa4',
   normal: '#e0e0e0',
   poison: '#e91e63',
   electric: '#f0f4c3',
   ground: '#795548',
   psychic: '#b0bec5',
   fairy: '#ffd180',
   fighting: '#ccff90',

}

export const handlerFilterList = (search, set, list, mainList) => {
   if(search.length > 1){
      set( list.filter(pok => pok.name.includes(search)) )
   } else if (search.length < 1){
      set(mainList)
   }
}