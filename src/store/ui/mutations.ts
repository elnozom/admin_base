import { MutationTree } from 'vuex';
import { UiState } from './types';

export const mutations: MutationTree<UiState> = {
    appLoaded(state) {
        state.loading = false;
    },
    respondModal(state , payload) {
        state.respondModal = payload.status;
        state.respondModalUserId = payload.id;
    }
};