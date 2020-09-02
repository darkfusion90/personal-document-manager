import { createSelector } from 'reselect'

import AppState from '../states/AppState'
import ModalState from '../states/ModalState'
import IModal from '../models/Modal'

export const modalStateSelector = (state: AppState): ModalState => state.modalState

export const modalSelector = createSelector<AppState, ModalState, IModal | null>(
    modalStateSelector,
    (modalState: ModalState) => modalState.modal
)

export const modalStatusSelector = createSelector<AppState, ModalState, boolean>(
    modalStateSelector,
    (modalState: ModalState) => modalState.isModalActive
)

export default { modalStateSelector, modalSelector, modalStatusSelector }