export interface ConfirmDialogProps {
    show: boolean;
    title: string;
    description: string;
    onConfirm: (event: React.MouseEvent) => void;
    onCancel: (event: React.MouseEvent) => void;
}

export function ConfirmDialog({ show, onConfirm, onCancel, title, description } : ConfirmDialogProps) {
    return (
        <>
            <div className={'modal' + (show ? ' d-block' : ' d-none')} tabIndex={-1}>
                <div className='modal-dialog'>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            <button onClick={onCancel} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>{description}</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={onCancel} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button onClick={onConfirm} type="button" className="btn btn-primary">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}