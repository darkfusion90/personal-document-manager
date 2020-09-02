import IModal from "../../../store/models/Modal";
import ModalId from "./Modals";

interface IUpdateDocumentModalProps {
    documentId: string
}

const UpdateDocumentModal = (documentId: string): IModal<IUpdateDocumentModalProps> => {
    return {
        id: ModalId.updateDocumentModal,
        props: { documentId }
    }
}

export default UpdateDocumentModal