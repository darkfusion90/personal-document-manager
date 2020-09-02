import React, { ComponentType } from 'react'
import IModal from '../../store/models/Modal'
import { modalSelector, modalStatusSelector } from '../../store/selectors/modal-selectors'
import AppState from '../../store/states/AppState'
import { IModalState } from '../../store/states/ModalState'
import { connect } from 'react-redux'

export type IPropsForWrappedComponent = IModalState
export declare type IWrappedComponentType = ComponentType<IPropsForWrappedComponent>

declare type IStateToProps = IModalState
interface IDispatchToProps { }

declare type IModalConnectorProps = IStateToProps & IDispatchToProps

const ModalConnector = (Component: IWrappedComponentType): React.FC<IModalConnectorProps> => (props) => {
    return <Component modal={props.modal} isModalActive={props.isModalActive} />
}

const mapStateToProps = (state: AppState): IStateToProps => {
    return {
        modal: modalSelector(state),
        isModalActive: modalStatusSelector(state)
    }
}

const mapDispatchToProps: IDispatchToProps = {}

const withModal = (Component: IWrappedComponentType) => {
    return connect<IStateToProps, IDispatchToProps, {}, AppState>(
        mapStateToProps,
        mapDispatchToProps
    )(ModalConnector(Component))
}

export default withModal
