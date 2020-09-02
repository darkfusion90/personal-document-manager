import ModalId from "../../components/modals/@types/Modals";

export default interface IModal<P = {}> {
    id: ModalId
    props: P
}

