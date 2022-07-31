import { MutationTree } from 'vuex';
import { UiState } from './types';
import { snackBarModel } from '@/utils/snack/snackbar.model'

export const mutations: MutationTree<UiState> = {
    appLoaded(state) {
        state.loading = false;
    },
    setSnack: (state, val : snackBarModel) =>  {
        console.log("val")
        console.log(val)
        state.snackBar = val
    },
    stopSnack: state => {
        state.snackBar.Active = false
    },
    respondModal(state , payload) {
        state.respondModal = payload.status;
        state.respondModalUserId = payload.id;
    }
};