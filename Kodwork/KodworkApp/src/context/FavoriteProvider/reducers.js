export default function reducers(state, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const {favoriteJob} = action.payload;
      return {...state, favoriteJobs: [...state.favoriteJobs, favoriteJob]};
    case 'REMOVE_FAVORITE':
      const {id} = action.payload;
      return {
        ...state,
        favoriteJobs: state.favoriteJobs.filter(job => job.id !== id),
      };
    default:
      return state;
  }
}
