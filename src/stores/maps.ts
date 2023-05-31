import { defineStore } from 'pinia'
import { Map } from '@/types'

import { useTeamStore } from '@/stores/teams'

export const useMapStore = defineStore('maps', () => {
  const teams = useTeamStore()

  const counter = ref(9)
  const mapList = reactive<Map[]>([
    { id: 'train', name: 'Train', vetted: false, picked: false },
    { id: 'mirage', name: 'Mirage', vetted: false, picked: false },
    { id: 'cache', name: 'Cache', vetted: false, picked: false },
    { id: 'inferno', name: 'Inferno', vetted: false, picked: false },
    { id: 'cbbl', name: 'Cobblestone', vetted: false, picked: false },
    { id: 'nuke', name: 'Nuke', vetted: false, picked: false },
    { id: 'dust2', name: 'Dust 2', vetted: false, picked: false },
    { id: 'vertigo', name: 'Vertigo', vetted: false, picked: false },
    { id: 'anubis', name: 'Anubis', vetted: false, picked: false },
    { id: 'ancient', name: 'Ancient', vetted: false, picked: false }
  ])

  const pickedMapName = ref('')

  const markVetted = (i: number) => {
    if (counter.value === 0) return

    mapList[i].vetted = true
    counter.value--

    if (counter.value === 0) {
      markPicked()
      return
    }

    teams.teamTurnRef = !teams.teamTurnRef
  }

  const markPicked = () => {
    for (let i = 0; i <= mapList.length; i++) {
      if (!mapList[i].vetted) {
        mapList[i].picked = true
        pickedMapName.value = mapList[i].name

        break
      }
    }
  }

  return { counter, pickedMapName, mapList, markVetted }
})
