import { defineStore } from 'pinia'

export const useTeamStore = defineStore('teams', () => {
  const team1 = ref('')
  const team2 = ref('')
  const teamTurnRef = ref(false)

  const setTeamTurnName = () => {
    if (teamTurnRef.value) {
      if (team2.value) return team2.value

      return 'Time 2'
    }

    if (team1.value) return team1.value

    return 'Time 1'
  }

  return {
    team1,
    team2,
    teamTurnRef,
    setTeamTurnName
  }
})
