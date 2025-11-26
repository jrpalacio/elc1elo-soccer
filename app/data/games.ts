export type Team = {
  id: number,
  name: string,
  logo: string,
  goals: number
}

export type Game = {
  id: number,
  homeTeam: Team,
  awayTeam: Team,
  matchday: number,
  date: string,
  time: string,
  status: 'finished' | 'pending' | 'live'
}

const games: Game[] = [
  {
    id: 1,
    homeTeam: {
      id: 1,
      name: 'F.C. Barcelona',
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_64x64.png',
      goals: 0
    },
    awayTeam: {
      id: 2,
      name: 'Real Madrid',
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/XDClkrMKtkm3UTP2YKN6oQ_96x96.png',
      goals: 1
    },
    matchday: 2,
    date: '2025-01-01',
    time: '12:00',
    status: 'finished',
  },
  {
    id: 2,
    homeTeam: {
      id: 3,
      name: 'Villarreal',
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/WKH7Ak5cYD6Qm1EEqXzmVw_96x96.png',
      goals: 0
    },
    awayTeam: {
      id: 4,
      name: 'Athletic Club',
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/OSL_5Zm6kYPP1J17Bo5uDA_96x96.png',
      goals: 0
    },
    matchday: 2,
    date: '2025-01-01',
    time: '12:00',
    status: 'finished',
  },
  {
    id: 3,
    homeTeam: {
      id: 5,
      name: 'Alavés',
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/RUcTOeFcBc7q7uku1nR_iQ_96x96.png',
      goals: 0
    },
    awayTeam: {
      id: 6,
      name: 'PSV Eindhoven',
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/FylTPR72JXIGFzqwQocSAQ_96x96.png',
      goals: 0
    },
    matchday: 0,
    date: '2025-01-01',
    time: '12:00',
    status: 'live',
  },
  {
    id: 4,
    homeTeam: {
      id: 7,
      name: 'Real Sociedad',
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/WKH7Ak5cYD6Qm1EEqXzmVw_96x96.png',
      goals: 0
    },
    awayTeam: {
      id: 8,
      name: 'Real Madrid',
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
      goals: 0
    },
    matchday: 0,
    date: '2025-01-01',
    time: '12:00',
    status: 'pending',
  },
  {
    id: 5,
    homeTeam: {
      id: 9,
      name: 'Real Madrid',
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/sHiSmLm_rA0BOC5MfrNt8A_96x96.png',
      goals: 0
    },
    awayTeam: {
      id: 10,
      name: 'Real Madrid',
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/RUcTOeFcBc7q7uku1nR_iQ_96x96.png',
      goals: 0
    },
    matchday: 0,
    date: '2025-01-01',
    time: '12:00',
    status: 'pending',
  },
  {
    id: 6,
    homeTeam: {
      id: 11,
      name: 'Real Madrid',
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/RUcTOeFcBc7q7uku1nR_iQ_96x96.png',
      goals: 0
    },
    awayTeam: {
      id: 12,
      name: 'Real Madrid',
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
      goals: 0
    },
    matchday: 0,
    date: '2025-01-01',
    time: '12:00',
    status: 'pending',
  }
]

export default games;